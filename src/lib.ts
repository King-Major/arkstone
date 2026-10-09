import { LEAD_ENDPOINT } from "./data";

export async function submitLead(kind: string, payload: Record<string, string>) {
  if (!LEAD_ENDPOINT) {
    throw new Error("The contact service is not configured. Please contact us by WhatsApp or email.");
  }

  const response = await fetch(LEAD_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ kind, ...payload }),
  });

  if (!response.ok) {
    const result = await response.json().catch(() => null) as { error?: string } | null;
    throw new Error(result?.error || "We couldn't send your message. Please try again or contact us by WhatsApp.");
  }
}
