import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, FileCheck2, Gem, HeartHandshake, KeyRound, Minus, Plus, Scale } from "lucide-react";
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
const teamCards = [
  { name: "Bisola Loto", role: "Principal Advisor & Managing Partner", focus: "Strategic advisory, client relations, and high-stakes price negotiation.", accent: "bg-navy-deep text-white" },
  { name: "Nonso Azubike", role: "Managing Partner", focus: "Commercial and residential developer relationships, market research, and brand operations.", accent: "bg-ink text-white" },
  { name: "Tosin Omotosho", role: "Head of Legal & Title Due Diligence", focus: "Document checks, legal searches, and buyer protection.", accent: "bg-navy text-white" },
];
const initials = (name: string) => name.split(" ").map((part) => part[0]).join("");

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
          <motion.div initial={{ opacity: 0, y: 32, x: -20 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }} className="max-w-3xl">
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

      <section className="bg-ivory py-6 md:py-10">
        <div className="container-x -mt-12 relative z-20">
          <div className="grid gap-5 md:grid-cols-3">
            {teamCards.map(({ name, role, focus, accent }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 42, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
                className="group relative overflow-hidden border border-ink/10 bg-white shadow-[0_18px_50px_rgba(16,36,58,0.08)] transition-all duration-300 hover:border-gold/60 hover:shadow-[0_26px_65px_rgba(16,36,58,0.12)]"
              >
                <div className={`relative flex aspect-[1.25/1] items-center justify-center overflow-hidden ${accent}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,179,134,0.22),transparent_55%)]" />
                  <span className="absolute right-4 top-3 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">0{i + 1} / 03</span>
                  <span className="relative font-serif text-6xl text-gold-light/90 md:text-7xl">{initials(name)}</span>
                  <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
                </div>
                <div className="p-6 md:p-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold">{role}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-ink">{name}</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{focus}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-ivory py-24"><div className="container-x">
        <SectionHead title="Why Choose Arkstone" sub="Five commitments that protect your capital from first conversation to long after handover." />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          {pillars.map(({ icon: I, t, d }, i) => (
            <Reveal
              key={t}
              delay={i * 0.09}
              y={26}
              className={`group relative flex h-full flex-col overflow-hidden border border-gold/30 bg-navy p-7 text-white shadow-[0_8px_30px_rgba(16,36,58,0.12)] transition-all duration-500 hover:-translate-y-2 hover:border-gold hover:bg-gold hover:text-ink hover:shadow-[0_18px_45px_rgba(16,36,58,0.16)] sm:col-span-1 lg:col-span-2 ${i === 3 ? "lg:col-start-2" : ""} ${i === 4 ? "lg:col-start-4" : ""}`}
            >
              <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center border border-gold/50 bg-navy-light text-gold-light transition-colors duration-300 group-hover:border-ink/20 group-hover:bg-white/50 group-hover:text-ink">
                  <I size={22} strokeWidth={1.5} />
                </span>
                <span className="font-sans text-xs font-semibold tracking-[0.18em] text-white/60 transition-colors duration-300 group-hover:text-ink/60">0{i + 1} <span className="text-gold-light group-hover:text-ink">/</span> 05</span>
              </div>
              <h3 className="mt-7 text-2xl font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-ink">{t}</h3>
              <p className="mt-3 flex-1 text-[15px] leading-7 text-white/75 transition-colors duration-300 group-hover:text-ink/80">{d}</p>
              <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-4 transition-colors duration-300 group-hover:border-ink/20">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/55 transition-colors duration-300 group-hover:text-ink/60">The Arkstone difference</span>
                <ArrowUpRight size={17} className="text-gold-light transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" aria-hidden="true" />
              </div>
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
            {list.map((p, i) => (
              <motion.div
                layout
                key={p.id}
                initial={{ opacity: 0, y: 36, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 18, scale: 0.96 }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
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
                  <motion.div initial={{ height: 0, opacity: 0, y: -10 }} animate={{ height: "auto", opacity: 1, y: 0 }} exit={{ height: 0, opacity: 0, y: -10 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
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
