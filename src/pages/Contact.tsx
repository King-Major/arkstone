import { ArrowRight, Clock3, Mail, MapPin, MessageCircle } from "lucide-react";
import { ADDRESS, EMAIL, WHATSAPP, wa } from "../data";
import { Reveal } from "../components/ui";
import { ContactForm } from "../components/Forms";

export default function Contact() {
  const rows = [
    { I: MessageCircle, l: "Direct WhatsApp", v: `+${WHATSAPP}`.replace(/(\d{3})(\d{3})(\d{3})(\d{3})/, "$1 $2 $3 $4"), h: wa("Hello Arkstone, I'd like to speak with an advisor.") },
    { I: Mail, l: "Email", v: EMAIL, h: `mailto:${EMAIL}` },
    { I: MapPin, l: "Office Address", v: ADDRESS, h: undefined },
  ];
  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep pb-20 pt-32 text-white md:pb-28 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-light/50 via-transparent to-transparent" />
        <div className="container-x relative grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <Reveal className="max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-gold-light">Let’s talk property</p>
            <h1 className="text-5xl font-semibold leading-[1.02] md:text-7xl">Let’s Discuss Your <span className="text-gold-light">Real Estate Objectives.</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">Whether you are considering a landmark residence, building a portfolio, acquiring commercial property, or exploring a specific opportunity, our team is available to discuss your requirements.</p>
          </Reveal>
          <Reveal delay={0.1} className="hidden border-l border-gold/40 pl-6 pb-1 lg:block">
            <p className="font-serif text-3xl text-white">Personal advice.<br /><span className="text-gold-light">No pressure.</span></p>
            <p className="mt-3 text-xs uppercase tracking-[0.16em] text-white/45">Lagos, Nigeria</p>
          </Reveal>
        </div>
      </section>
      <section className="pb-20 md:pb-28">
        <div className="container-x">
          <div className="relative -mt-8 grid items-start gap-6 lg:-mt-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
            <Reveal className="border border-ink/10 bg-white p-6 shadow-[0_18px_50px_rgba(16,36,58,0.08)] md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Contact details</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">We’re here to help.</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-600">Choose the way that works best for you. We’ll get back to you as soon as we can.</p>
              <div className="mt-7 space-y-3">
                {rows.map(({ I, l, v, h }) => (
                  <div key={l} className="flex items-start gap-4 border border-ink/10 bg-ivory/50 p-4 transition-colors hover:border-gold/60">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-ink text-gold"><I size={19} strokeWidth={1.6} /></div>
                    <div className="min-w-0 pt-0.5"><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-500">{l}</p>{h ? <a href={h} className="mt-1 block break-words text-sm font-semibold text-ink transition-colors hover:text-gold md:text-base">{v}</a> : <p className="mt-1 text-sm font-semibold text-ink md:text-base">{v}</p>}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3 border-t border-ink/10 pt-5 text-xs text-neutral-500"><Clock3 size={16} className="text-gold" />Speak with a real advisor, not a call centre.</div>
            </Reveal>
            <Reveal delay={0.08} className="border border-ink/10 bg-white p-6 shadow-[0_18px_50px_rgba(16,36,58,0.08)] md:p-9 lg:p-10">
              <div className="mb-7 border-b border-ink/10 pb-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Contact form</p>
                <h2 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">How can we help?</h2>
                <p className="mt-2 text-sm leading-6 text-neutral-600">Share a little about your plans and we’ll be in touch personally.</p>
              </div>
              <ContactForm />
            </Reveal>
          </div>
          <Reveal className="mt-8 overflow-hidden border border-ink/10 bg-ink">
            <div className="grid md:grid-cols-[0.75fr_1.25fr]">
              <div className="flex flex-col justify-center p-7 text-white md:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light">Find us in Lagos</p>
                <h2 className="mt-3 font-serif text-3xl font-semibold">A local team,<br />with a local view.</h2>
                <p className="mt-4 flex gap-3 text-sm leading-6 text-white/65"><MapPin size={18} className="mt-0.5 shrink-0 text-gold" />{ADDRESS}</p>
                <a href="https://maps.google.com/maps?q=Ikoyi%2C%20Lagos" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-light hover:text-white">View on Google Maps <ArrowRight size={15} /></a>
              </div>
              <iframe title="Arkstone office location in Lagos" loading="lazy" className="h-64 w-full border-0 md:h-full md:min-h-72" src="https://maps.google.com/maps?q=Ikoyi%2C%20Lagos&output=embed" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
