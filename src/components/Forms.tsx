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
  const go = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); const d = data(e);
    await submitLead("report-download", d); // backend should email the PDF + send WhatsApp welcome
    window.open(wa(`Hello Arkstone, I'm ${d.name}. Please send me the Q4 Prime Real Estate Title & Pricing Report.`), "_blank");
    setDone(true);
  };
  if (done) return <Done text="Thank you. Your report is on its way to your inbox and WhatsApp." />;
  return (
    <form onSubmit={go} className="space-y-4">
      <F label="Full name"><input required name="name" className="input" autoComplete="name" /></F>
      <F label="WhatsApp / phone number"><input required name="phone" type="tel" className="input" autoComplete="tel" /></F>
      <F label="Email address"><input required name="email" type="email" className="input" autoComplete="email" /></F>
      <button className="btn-gold w-full">Download Free Report</button>
    </form>
  );
}

export function BriefForm() {
  const [done, setDone] = useState(false);
  const go = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); const d = data(e);
    await submitLead("acquisition-brief", d);
    window.open(wa(`Acquisition Brief\nName: ${d.name}\nPhone: ${d.phone}\nAsset: ${d.asset}\nTimeline: ${d.timeline}`), "_blank");
    setDone(true);
  };
  if (done) return <Done text="Brief received. Expect your curated portfolio within 24 hours." />;
  return (
    <form onSubmit={go} className="grid gap-5 md:grid-cols-2">
      <F label="Full name"><input required name="name" className="input" /></F>
      <F label="Phone / WhatsApp number"><input required name="phone" type="tel" className="input" /></F>
      <F label="Asset type">
        <select name="asset" className="input" defaultValue="Luxury Residential"><option>Luxury Residential</option><option>Grade-A Commercial</option><option>Land & Investment</option></select>
      </F>
      <F label="Acquisition timeline">
        <select name="timeline" className="input" defaultValue="Immediate"><option>Immediate</option><option>Next 1–3 Months</option><option>Exploring Options</option></select>
      </F>
      <button className="btn-ink md:col-span-2">Submit Acquisition Brief</button>
    </form>
  );
}

export function ContactForm() {
  const [done, setDone] = useState(false);
  const go = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); const d = data(e);
    await submitLead("contact", d);
    window.open(wa(`Hello Arkstone, I'm ${d.name} (${d.phone}). ${d.message}`), "_blank");
    setDone(true);
  };
  if (done) return <Done text="Message sent. An advisor will respond shortly." />;
  return (
    <form onSubmit={go} className="space-y-5">
      <F label="Name"><input required name="name" className="input" /></F>
      <F label="Phone number"><input required name="phone" type="tel" className="input" /></F>
      <F label="Message"><textarea required name="message" rows={5} className="input" /></F>
      <button className="btn-gold w-full">Send Message</button>
    </form>
  );
}
