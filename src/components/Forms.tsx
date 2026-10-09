import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { submitLead } from "../lib";
import { wa } from "../data";

const F = ({ label, children }: { label: string; children: ReactNode }) => (
  <label className="block text-left text-sm font-medium">{label}<div className="mt-1.5">{children}</div></label>
);
const data = (e: FormEvent<HTMLFormElement>) => Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
const Done = ({ text }: { text: string }) => (
  <div className="flex flex-col items-center gap-3 py-10 text-center"><CheckCircle2 className="text-gold" size={44} /><p className="max-w-sm text-neutral-700">{text}</p></div>
);

export function PopupForm() {
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const go = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = data(e);
    setSending(true);
    setError("");
    try {
      await submitLead("report-download", d);
      window.open(wa(`Hello Arkstone, I'm ${d.name}. Please send me the Prime Real Estate Market Report & Acquisition Guide. My primary interest is ${d.interest}.`), "_blank");
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "We couldn't send your request. Please try again.");
    } finally {
      setSending(false);
    }
  };
  if (done) return <Done text="Thank you. Your report request has been received. An advisor will follow up shortly." />;
  return (
    <form onSubmit={go} className="space-y-4">
      <F label="Full name"><input required name="name" className="input" autoComplete="name" /></F>
      <F label="WhatsApp / phone number"><input required name="phone" type="tel" className="input" autoComplete="tel" /></F>
      <F label="Email address"><input required name="email" type="email" className="input" autoComplete="email" /></F>
      <F label="Primary interest">
        <select required name="interest" className="input" defaultValue="">
          <option value="" disabled>Select an interest</option>
          <option>Private Residence</option><option>Investment Portfolio</option><option>Corporate Real Estate</option>
          <option>Off-Plan</option><option>Land Investment</option><option>Private-Market Opportunity</option>
        </select>
      </F>
      <p className="text-xs leading-5 text-neutral-500">Your information will be treated confidentially and will not be shared without your consent.</p>
      {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
      <button disabled={sending} className="btn-gold w-full disabled:cursor-not-allowed disabled:opacity-60">{sending ? "Sending…" : "Request Private Report"}</button>
    </form>
  );
}

export function BriefForm() {
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const go = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = data(e);
    setSending(true);
    setError("");
    try {
      await submitLead("acquisition-brief", d);
      window.open(wa(`Advisory Request\nName: ${d.name}\nEmail: ${d.email}\nPhone: ${d.phone}\nArea of Interest: ${d.asset}\nTimeline: ${d.timeline}\nRequirements: ${d.message}`), "_blank");
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "We couldn't send your request. Please try again.");
    } finally {
      setSending(false);
    }
  };
  if (done) return <Done text="Your advisory request has been received. An Arkstone advisor will review your brief and follow up." />;
  return (
    <form onSubmit={go} className="grid gap-5 md:grid-cols-2">
      <F label="Full name"><input required name="name" className="input" /></F>
      <F label="Email address"><input required name="email" type="email" autoComplete="email" className="input" /></F>
      <F label="Phone / WhatsApp number"><input required name="phone" type="tel" className="input" /></F>
      <F label="Area of interest">
        <select required name="asset" className="input" defaultValue=""><option value="" disabled>Select an area</option><option>Private Residence</option><option>Investment Portfolio</option><option>Corporate Real Estate</option><option>Off-Plan</option><option>Land Investment</option><option>Private-Market Opportunity</option></select>
      </F>
      <F label="Acquisition timeline">
        <select required name="timeline" className="input" defaultValue=""><option value="" disabled>Select a timeline</option><option>Immediate</option><option>1–3 Months</option><option>Strategic Exploration</option></select>
      </F>
      <div className="md:col-span-2"><F label="Requirements"><textarea required name="message" rows={4} className="input" placeholder="Tell us a little about your objectives." /></F></div>
      {error && <p role="alert" className="text-sm text-red-700 md:col-span-2">{error}</p>}
      <button disabled={sending} className="btn-ink self-end md:col-span-2 disabled:cursor-not-allowed disabled:opacity-60">{sending ? "Sending…" : "Request Advisory"}</button>
    </form>
  );
}

export function ContactForm() {
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const go = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = data(e);
    setSending(true);
    setError("");
    try {
      await submitLead("contact", d);
      window.open(wa(`Hello Arkstone, I'm ${d.name} (${d.phone}). ${d.message}`), "_blank");
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "We couldn't send your message. Please try again.");
    } finally {
      setSending(false);
    }
  };
  if (done) return <Done text="Message sent. An advisor will respond shortly." />;
  return (
    <form onSubmit={go} className="space-y-5">
      <F label="Name"><input required name="name" className="input" /></F>
      <F label="Phone number"><input required name="phone" type="tel" className="input" /></F>
      <F label="Message"><textarea required name="message" rows={5} className="input" /></F>
      {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
      <button disabled={sending} className="btn-gold w-full disabled:cursor-not-allowed disabled:opacity-60">{sending ? "Sending…" : "Send Message"}</button>
    </form>
  );
}
