import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, FileCheck2, Gem, HeartHandshake, KeyRound, Minus, Plus, Scale } from "lucide-react";
import { properties, wa } from "../data";
import { Reveal, SectionHead } from "../components/ui";
import PropertyCard from "../components/PropertyCard";
import { BriefForm } from "../components/Forms";

const pillars = [
  { icon: KeyRound, t: "Direct Owner Access", d: "No middleman chains. We deal directly with primary title holders and verified developers so you get real prices, fast answers, and zero game-playing." },
  { icon: FileCheck2, t: "Clear & Verified Paperwork", d: "Before we arrange an inspection, our legal team checks available title documents so you can make an informed decision with greater confidence." },
  { icon: Scale, t: "Strong Negotiation in Your Corner", d: "We work for you, not the seller. We negotiate fiercely on your behalf to secure the absolute best price, eliminate hidden fees, and maximize your capital." },
  { icon: HeartHandshake, t: "Complete Post-Handover Care", d: "We don't vanish after closing. We stay by your side for 90 days post-handover, handling move-in deep cleaning, estate registration, key security handovers, and developer repairs." },
  { icon: Gem, t: "The Arkstone Private Insider Circle", d: "Your relationship with us grows after you buy. Clients gain exclusive, private access to genuine distress sales, off-market commercial spaces, and high-yield investments before they hit the public market." },
];
const steps = [
  ["Share Your Brief", "Tell us your lifestyle goals, location focus, or investment targets. We curate 2 or 3 solid, verified options. No time-wasting."],
  ["Stress-Free Inspections", "Before you step into Lagos traffic, we give you clear facts about estate infrastructure, access routes, and title status upfront."],
  ["Honest & Protected Closing", "We handle price negotiations, coordinate smoothly with your legal team, and give you a plain cost breakdown with zero hidden charges."],
  ["Welcome Home Support", "We organize a complimentary deep clean, assist with estate security registration, and handle any lingering builder adjustments."],
];
const faqs = [
  ["Do you charge an inspection fee before showing properties?", "No. We do not charge inspection fees. Instead, we use a quick 2-minute Acquisition Brief to understand your requirements and present available properties aligned with your budget and lifestyle."],
  ["How does Arkstone verify title documents before inspection?", "Our legal team reviews available title documents and verifies ownership information with primary owners and relevant registries before we arrange an inspection. We share the findings clearly so you can make an informed decision."],
  ["How do you handle negotiation with developers and sellers?", "We represent you, the buyer, not the seller. We bring institutional negotiation tactics to the table to ensure you get the true market valuation, eliminate hidden developer levies, and secure non-price value like extended warranties and service term coverage."],
  ["What is included in your 90-Day Post-Handover Care?", "Our service doesn't end when commission is paid. For 90 days after you receive your keys, we assist with move-in deep cleaning, estate gate registration, key handovers, and acting as your representative to resolve any lingering builder repairs."],
  ["How do I gain access to the Arkstone Private Insider Circle?", "Membership is automatically granted to clients who complete an acquisition through Arkstone. Members receive exclusive 24-hour priority access to genuine distress sales, off-market commercial assets, and high-yield investment opportunities across prime Lagos before they hit the public market."],
  ["Do you advise on commercial real estate as well as residential?", "Yes. In addition to luxury residential homes, Arkstone advises corporate clients and private investors on prime commercial acquisitions, including Grade-A office spaces, flagship retail hubs, and strategic development land in Ikoyi, Victoria Island, and Lekki."],
];
const filters = ["All", "Luxury Residential", "Commercial Assets"] as const;

export default function Home() {
  const [f, setF] = useState<(typeof filters)[number]>("All");
  const [openQ, setOpenQ] = useState<number | null>(0);
  const list = properties.filter((p) => f === "All" || (f === "Commercial Assets" ? p.type === "Commercial" : p.type === "Residential"));
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-ink pt-20">
        <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/Lagos_skyline.jpg/1920px-Lagos_skyline.jpg" alt="Victoria Island skyline in Lagos" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-ink/80 to-ink/20" />
        <a href="https://commons.wikimedia.org/wiki/File:Lagos_skyline.jpg" target="_blank" rel="noreferrer" className="absolute bottom-3 right-4 z-10 text-[10px] text-white/70 hover:text-white">Photo: Clara Sanchiz · CC BY-SA 2.0</a>
        <div className="container-x relative py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-gold-light">A more considered way to invest</p>
            <h1 className="max-w-2xl text-5xl font-semibold leading-[0.98] text-white md:text-7xl lg:text-8xl">Lagos property, <span className="text-gold-light">with confidence.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/80">Direct access to exceptional properties, verified title information, expert negotiation, and attentive support long after handover.</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="btn-gold" onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}>Explore Verified Properties <ArrowRight size={16} /></button>
              <a className="btn-outline border-white/50 bg-white/5 text-white hover:border-gold hover:bg-white/10" target="_blank" rel="noreferrer" href={wa("Hello Arkstone, I'd like to speak with an advisor.")}>Speak with an Advisor</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-ivory py-24"><div className="container-x">
        <SectionHead title="Why Choose Arkstone" sub="Five commitments that protect your capital from first conversation to long after handover." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {pillars.map(({ icon: I, t, d }, i) => (
            <Reveal key={t} delay={i * 0.07} className={`border border-gold/50 bg-white p-8 lg:col-span-2 ${i === 3 ? "lg:col-start-2" : ""} ${i === 4 ? "md:col-span-2 lg:col-span-2" : ""}`}>
              <I className="text-gold" size={30} strokeWidth={1.5} />
              <h3 className="mt-5 text-xl font-semibold">{t}</h3>
              <p className="mt-3 leading-relaxed text-neutral-600">{d}</p>
            </Reveal>
          ))}
        </div>
      </div></section>

      {/* Journey */}
      <section className="py-24"><div className="container-x">
        <SectionHead title="The Acquisition Journey" sub="How we work, from first brief to the day you move in." />
        <div className="relative grid gap-10 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gold/50 md:block" />
          {steps.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.1} className="relative">
              <div className="relative flex h-12 w-12 items-center justify-center border border-gold bg-white font-serif text-lg font-bold text-gold">{i + 1}</div>
              <h3 className="mt-5 text-xl font-semibold">{t}</h3>
              <p className="mt-2 leading-relaxed text-neutral-600">{d}</p>
            </Reveal>
          ))}
        </div>
      </div></section>

      {/* Portfolio */}
      <section id="portfolio" className="scroll-mt-20 bg-ivory py-24"><div className="container-x">
        <SectionHead title="Curated Portfolio Preview" sub="Every property is reviewed and its title information verified before it appears here." />
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {filters.map((x) => (
            <button key={x} onClick={() => setF(x)} className={`border px-5 py-2 text-sm font-medium transition ${f === x ? "border-gold bg-gold" : "border-neutral-300 bg-white hover:border-gold"}`}>{x}</button>
          ))}
        </div>
        <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.div layout key={p.id} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}>
                <PropertyCard p={p} cta="Request Private Briefing" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        <div className="mt-12 text-center"><Link to="/assets" className="btn-ink">View All Available Assets <ArrowRight size={16} /></Link></div>
      </div></section>

      {/* FAQ */}
      <section className="py-24"><div className="container-x max-w-3xl">
        <SectionHead title="Frequently Asked Questions" />
        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {faqs.map(([q, a], i) => (
            <div key={q}>
              <button onClick={() => setOpenQ(openQ === i ? null : i)} aria-expanded={openQ === i} className="flex w-full items-center justify-between gap-6 py-5 text-left text-lg font-semibold">
                {q}{openQ === i ? <Minus className="shrink-0 text-gold" /> : <Plus className="shrink-0 text-gold" />}
              </button>
              <AnimatePresence initial={false}>
                {openQ === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <p className="pb-6 leading-relaxed text-neutral-600">{a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div></section>

      {/* Brief */}
      <section id="brief" className="border-t border-gold/40 bg-gold-pale/60 py-24"><div className="container-x max-w-3xl">
        <SectionHead title="Begin Your Acquisition." sub="Share your requirements to receive a curated portfolio within 24 hours." />
        <Reveal className="border border-gold/50 bg-white p-7 shadow-sm md:p-10"><BriefForm /></Reveal>
      </div></section>
    </>
  );
}
