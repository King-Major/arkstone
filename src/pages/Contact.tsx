import { Mail, MapPin, MessageCircle } from "lucide-react";
import { ADDRESS, EMAIL, WHATSAPP, wa } from "../data";
import { PageBanner, Reveal } from "../components/ui";
import { ContactForm } from "../components/Forms";

export default function Contact() {
  const rows = [
    { I: MessageCircle, l: "Direct WhatsApp", v: `+${WHATSAPP}`, h: wa("Hello Arkstone, I'd like to speak with an advisor.") },
    { I: Mail, l: "Email", v: EMAIL, h: `mailto:${EMAIL}` },
    { I: MapPin, l: "Office Address", v: ADDRESS, h: undefined },
  ];
  return (
    <>
      <PageBanner title="Talk Directly with an Advisor." sub="Tell us what you're looking for and an Arkstone advisor will respond personally." />
      <section className="py-20"><div className="container-x grid gap-14 lg:grid-cols-2">
        <Reveal className="space-y-8">
          {rows.map(({ I, l, v, h }) => (
            <div key={l} className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold"><I className="text-gold" size={22} strokeWidth={1.5} /></div>
              <div><p className="text-sm text-neutral-500">{l}</p>{h ? <a href={h} className="text-lg font-semibold hover:text-gold">{v}</a> : <p className="text-lg font-semibold">{v}</p>}</div>
            </div>
          ))}
          <iframe title="Office location" loading="lazy" className="h-64 w-full border border-neutral-200" src="https://maps.google.com/maps?q=Ikoyi%2C%20Lagos&output=embed" />
        </Reveal>
        <Reveal className="border border-gold/50 bg-ivory p-7 md:p-10"><ContactForm /></Reveal>
      </div></section>
    </>
  );
}
