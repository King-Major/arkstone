import { createServer } from "node:http";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";

dotenv.config({ path: resolve(dirname(fileURLToPath(import.meta.url)), ".env") });

const port = Number(process.env.PORT || 3000);
const apiKey = process.env.RESEND_API_KEY;
const from = process.env.RESEND_FROM;
const to = process.env.RESEND_TO;
const isProduction = process.env.NODE_ENV === "production";
const allowedOrigins = new Set(
  (process.env.ALLOWED_ORIGINS || (isProduction ? "" : "http://localhost:5173,http://localhost:5174"))
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
);
const rateLimit = new Map();
const maxBodySize = 10_000;
const rateLimitWindowMs = 10 * 60 * 1000;
const rateLimitMax = 8;

if (!apiKey || !from || !to) {
  throw new Error("RESEND_API_KEY, RESEND_FROM, and RESEND_TO must be configured.");
}
if (!allowedOrigins.size) {
  throw new Error("ALLOWED_ORIGINS must include the Render Static Site URL.");
}

function sendJson(response, status, payload, origin) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    ...(origin ? {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      Vary: "Origin",
    } : {}),
  });
  response.end(JSON.stringify(payload));
}

async function readJson(request) {
  let size = 0;
  const chunks = [];
  for await (const chunk of request) {
    size += chunk.length;
    if (size > maxBodySize) throw new Error("Request body too large.");
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

function field(body, name, maxLength, required = false) {
  const value = body[name];
  if (value === undefined && !required) return "";
  if (typeof value !== "string") throw new Error(`Invalid ${name}.`);
  const trimmed = value.trim();
  if ((required && !trimmed) || trimmed.length > maxLength) throw new Error(`Invalid ${name}.`);
  return trimmed;
}

function getLead(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) throw new Error("Invalid request.");
  const kind = body.kind;
  if (!["contact", "acquisition-brief", "report-download"].includes(kind)) {
    throw new Error("Invalid request type.");
  }

  const lead = {
    kind,
    name: field(body, "name", 120, true),
    phone: field(body, "phone", 40, true),
    email: field(body, "email", 254),
    interest: field(body, "interest", 120),
    asset: field(body, "asset", 80),
    timeline: field(body, "timeline", 80),
    message: field(body, "message", 4_000),
  };

  if (lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    throw new Error("Invalid email.");
  }
  if (kind === "report-download" && !lead.email) throw new Error("Email is required.");
  if (kind === "report-download" && !lead.interest) throw new Error("Primary interest is required.");
  if (kind === "contact" && !lead.message) throw new Error("Message is required.");
  if (kind === "acquisition-brief" && (!lead.email || !lead.asset || !lead.timeline || !lead.message)) {
    throw new Error("Email, area of interest, timeline, and requirements are required.");
  }
  return lead;
}

function checkRateLimit(request) {
  const now = Date.now();
  const key = request.socket.remoteAddress || "unknown";
  const entry = rateLimit.get(key);
  if (!entry || now - entry.startedAt >= rateLimitWindowMs) {
    rateLimit.set(key, { startedAt: now, count: 1 });
    return true;
  }
  entry.count += 1;
  return entry.count <= rateLimitMax;
}

const server = createServer(async (request, response) => {
  if (request.url === "/health" && request.method === "GET") {
    sendJson(response, 200, { status: "ok" });
    return;
  }

  const origin = request.headers.origin;
  if (origin && !allowedOrigins.has(origin)) {
    sendJson(response, 403, { error: "This website is not allowed to submit enquiries." });
    return;
  }

  if (request.method === "OPTIONS" && request.url === "/api/leads") {
    sendJson(response, 204, {}, origin);
    return;
  }
  if (request.method !== "POST" || request.url !== "/api/leads") {
    sendJson(response, 404, { error: "Not found." }, origin);
    return;
  }
  if (!checkRateLimit(request)) {
    sendJson(response, 429, { error: "Too many requests. Please try again later." }, origin);
    return;
  }
  if (!request.headers["content-type"]?.includes("application/json")) {
    sendJson(response, 415, { error: "Request must use JSON." }, origin);
    return;
  }

  try {
    const lead = getLead(await readJson(request));
    const details = [
      `Type: ${lead.kind}`,
      `Name: ${lead.name}`,
      `Phone: ${lead.phone}`,
      lead.email && `Email: ${lead.email}`,
      lead.interest && `Primary interest: ${lead.interest}`,
      lead.asset && `Area of interest: ${lead.asset}`,
      lead.timeline && `Timeline: ${lead.timeline}`,
      lead.message && `Message:\n${lead.message}`,
    ].filter(Boolean).join("\n");
    const subject = {
      contact: "Website contact enquiry",
      "acquisition-brief": "New acquisition brief",
      "report-download": "Prime Real Estate Report request",
    }[lead.kind];
    const email = {
      from,
      to: [to],
      subject,
      text: details,
      ...(lead.email ? { reply_to: lead.email } : {}),
    };

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    });
    if (!resendResponse.ok) {
      console.error("Resend rejected a lead email:", resendResponse.status, await resendResponse.text());
      sendJson(response, 502, { error: "We couldn't send your message. Please try again or contact us by WhatsApp." }, origin);
      return;
    }

    sendJson(response, 200, { ok: true }, origin);
  } catch (error) {
    if (error instanceof SyntaxError) {
      sendJson(response, 400, { error: "Please check the form and try again." }, origin);
      return;
    }
    if (error.message?.startsWith("Invalid ") || error.message === "Email is required." ||
      error.message === "Primary interest is required." || error.message === "Message is required." ||
      error.message === "Email, area of interest, timeline, and requirements are required.") {
      sendJson(response, 400, { error: error.message === "Invalid request." ? "Please check the form and try again." : error.message }, origin);
      return;
    }
    if (error.message === "Request body too large.") {
      sendJson(response, 413, { error: error.message }, origin);
      return;
    }
    console.error("Lead email request failed:", error);
    sendJson(response, 502, { error: "We couldn't send your message. Please try again or contact us by WhatsApp." }, origin);
  }
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Arkstone lead API listening on port ${port}`);
});
