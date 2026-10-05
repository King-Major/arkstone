import { LEAD_ENDPOINT } from "./data";
/** Sends a lead to your backend/CRM/Zapier/Formspree if VITE_LEAD_ENDPOINT is set in .env. */
export async function submitLead(kind: string, payload: Record<string, string>) {
  if (!LEAD_ENDPOINT) return;
  try {
    await fetch(LEAD_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ kind, ...payload }) });
  } catch { /* fail silently; WhatsApp fallback still opens */ }
}
