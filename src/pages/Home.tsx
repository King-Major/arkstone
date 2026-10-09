import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, FileCheck2, Gem, HeartHandshake, KeyRound, Minus, Plus, Scale } from "lucide-react";
import { properties, wa } from "../data";
import { Reveal, SectionHead } from "../components/ui";
import PropertyCard from "../components/PropertyCard";
import { BriefForm } from "../components/Forms";

const pillars = [
  { icon: KeyRound, t: "Direct Access", d: "We source carefully selected residential, commercial, land, and development opportunities, including properties that may not be broadly marketed." },
  { icon: FileCheck2, t: "Rigorous Assessment", d: "We coordinate appropriate professional reviews across ownership, title, documentation, valuation, property particulars, and transaction considerations to identify and mitigate avoidable risks." },
  { icon: Scale, t: "Market Intelligence", d: "We use relevant market research, comparable-property analysis, pricing information, location dynamics, and demand indicators to give clients a stronger basis for decision-making." },
  { icon: HeartHandshake, t: "Strategic Negotiation", d: "We help clients evaluate commercial terms and approach negotiations with clearer objectives and better information." },
  { icon: Gem, t: "Acquisition & Post-Acquisition Support", d: "We coordinate with relevant legal and professional parties through the acquisition process and provide practical support following completion." },
];
const journey = [
  ["Strategic Alignment", "We begin by understanding your objectives, financial parameters, timeline, preferred locations, lifestyle or business requirements, and intended use of the property."],
  ["Curated Access", "We identify properties and opportunities that align with your brief through our market network and selected sources."],
  ["Assessment", "The opportunity is evaluated against relevant market, documentation, ownership, valuation, property, and transaction considerations."],
  ["Advisory & Negotiation", "We help you understand the opportunity, assess its position in the market, and negotiate appropriate commercial terms."],
  ["Acquisition & Closing", "We coordinate with the relevant legal and professional parties through documentation, contracting, payment, and closing."],
  ["Continued Relationship", "Following acquisition, qualifying clients can continue their relationship with Arkstone through selected opportunities, market intelligence, private briefings, and ongoing guidance."],
];
const assessment = [
  "Location — Quality, accessibility, demand, trajectory, and strategic relevance.",
  "Documentation & Ownership — Title, ownership, approvals, and supporting documentation.",
  "Entry Position — Whether the acquisition price is supported by relevant market evidence.",
  "Market Position — How the asset compares with competing properties.",
  "Demand & Liquidity — The quality of its potential occupier, buyer, or tenant market.",
  "Income & Capital Potential — Where relevant, potential for rental income, capital appreciation, wealth preservation, or portfolio diversification.",
  "Long-Term Suitability — Whether the property serves the client’s stated objectives.",
];
const serve = [
  ["Private Investors & Wealth", "Building Value Beyond the Transaction.", "For individuals, families, and private investors seeking to preserve, grow, diversify, or strategically deploy capital through real estate."],
  ["Private Residences", "Living & Heritage.", "For clients seeking exceptional homes for personal use, family living, legacy, or long-term ownership."],
  ["Corporate Real Estate", "Asset Precision.", "For companies and institutions making significant property decisions."],
];
const faqs = [
  ["Can I work with Arkstone if I am not ready to buy immediately?", "Yes. An advisory conversation can begin with understanding your objectives, timeline, budget, and intended use. Where appropriate, we can help you develop a clearer acquisition strategy before entering the market."],
  ["How does Arkstone assess properties?", "We consider factors such as ownership, title, documentation, valuation, location, market position, demand, property characteristics, and transaction structure. Appropriate professional reviews are coordinated where required."],
  ["Does Arkstone guarantee that a property has no risk?", "No. Real estate transactions involve legal, financial, market, and property-specific considerations. Our role is to identify and help mitigate avoidable risks through disciplined assessment and appropriate professional review."],
  ["What kinds of opportunities do you advise on?", "We work across residential, investment, commercial, land, and development opportunities in prime Nigerian markets, with a focus on opportunities that deserve careful consideration and align with the client’s objectives."],
];
const filters = ["All", "Private Residences", "Investment", "Commercial", "Land", "Off-Plan", "Private-Market"] as const;

export default function Home() {
  const [f, setF] = useState<(typeof filters)[number]>("All");
  const [openQ, setOpenQ] = useState<number | null>(0);
  const list = properties.filter((p) => {
    if (f === "All") return true;
    if (f === "Private Residences") return p.type === "Residential";
    if (f === "Commercial") return p.type === "Commercial";
    if (f === "Investment") return p.type === "Residential" || p.type === "Commercial";
    return p.type === "Residential" || p.type === "Commercial";
  });

  return (
    <>
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-ink pt-20">
        <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/Lagos_skyline.jpg/1920px-Lagos_skyline.jpg" alt="Victoria Island skyline in Lagos" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-ink/80 to-ink/20" />
        <a href="https://commons.wikimedia.org/wiki/File:Lagos_skyline.jpg" target="_blank" rel="noreferrer" className="absolute bottom-3 right-4 z-10 text-[10px] text-white/70 hover:text-white">Photo: Clara Sanchiz · CC BY-SA 2.0</a>
        <div className="container-x relative py-20">
          <motion.div initial={{ opacity: 0, y: 32, x: -20 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }} className="max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-gold-light">Prime Real Estate, Navigated with Clarity</p>
            <h1 className="max-w-2xl text-5xl font-semibold leading-[0.98] text-white md:text-7xl lg:text-8xl">Prime Real Estate, <span className="text-gold-light">with clarity.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/80">Arkstone is a real estate advisory and acquisition firm helping private clients, investors, families, and corporate institutions make better property decisions across Nigeria’s prime markets.</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a className="btn-gold" href={wa("Hello Arkstone, I'd like to request advisory.")}>Request Advisory <ArrowRight size={16} /></a>
              <Link className="btn-outline border-white/50 bg-white/5 text-white hover:border-gold hover:bg-white/10" to="/assets">Explore Portfolio</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="container-x max-w-4xl text-center">
          <SectionHead title="Better Real Estate Decisions Begin Before the Purchase." sub="High-value real estate requires more than market access. It demands foresight, sound judgment, thorough assessment, and precise execution." center />
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-neutral-600">Arkstone helps clients move from opportunity to acquisition with the information, perspective, and professional support required to make significant real estate decisions well.</p>
        </div>
      </section>

      <section className="bg-ivory py-24">
        <div className="container-x">
          <SectionHead title="We Don’t Sell Inventory. We Curate Decisions." sub="The property market can present hundreds of options. Our role is to determine which ones deserve your attention—and which ones don’t." />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {pillars.map(({ icon: I, t, d }, i) => (
              <Reveal key={t} delay={i * 0.08} className="group relative flex h-full flex-col overflow-hidden border border-gold/30 bg-navy p-7 text-white shadow-[0_8px_30px_rgba(16,36,58,0.12)] transition-all duration-500 hover:-translate-y-2 hover:border-gold hover:bg-gold hover:text-ink hover:shadow-[0_18px_45px_rgba(16,36,58,0.16)]">
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
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <SectionHead title="A Beautiful Property Can Still Be the Wrong Decision." sub="We look beyond presentation. Depending on the mandate, our assessment considers:" />
          <div className="grid gap-5 lg:grid-cols-2">
            {assessment.map((item, i) => (
              <Reveal key={item} delay={i * 0.04} className="border border-ink/10 bg-ivory p-5 md:p-6">
                <p className="text-base leading-7 text-neutral-700"><span className="font-semibold text-ink">{item.split(" — ")[0]}</span> — {item.split(" — ")[1]}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 border-l-2 border-gold bg-gold-pale/60 p-6 md:p-8">
            <p className="text-lg leading-relaxed text-neutral-700">Our objective is not simply to find a property.</p>
            <p className="mt-2 text-2xl font-semibold text-ink md:text-3xl">It is to help determine whether the property deserves the client’s capital.</p>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24">
        <div className="container-x">
          <SectionHead title="Who We Serve" sub="Private investors, private residences, and corporate real estate." />
          <div className="grid gap-6 md:grid-cols-3">
            {serve.map(([title, subtitle, text], i) => (
              <Reveal key={title} delay={i * 0.1} className="border border-ink/10 bg-white p-7 shadow-[0_18px_40px_rgba(16,36,58,0.05)]">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold">{title}</p>
                <h3 className="mt-4 text-2xl font-semibold text-ink">{subtitle}</h3>
                <p className="mt-4 text-base leading-7 text-neutral-600">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <SectionHead title="The Arkstone Acquisition Journey" sub="From intention to ownership." />
          <div className="relative grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {journey.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.08} className="relative border border-ink/10 bg-white p-6 shadow-[0_12px_28px_rgba(16,36,58,0.04)]">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center border border-gold bg-gold-pale font-serif text-lg font-bold text-gold">0{i + 1}</div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">Arkstone</span>
                </div>
                <h3 className="text-xl font-semibold text-ink">{t}</h3>
                <p className="mt-3 text-base leading-7 text-neutral-600">{d}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 border border-gold/40 bg-gold-pale/60 p-6 md:p-8">
            <p className="text-lg leading-relaxed text-neutral-700">The goal is simple: to make one successful acquisition the beginning of a long-term relationship with Arkstone.</p>
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-white">
        <div className="container-x max-w-4xl">
          <SectionHead title="The Prime Real Estate Market Report & Acquisition Guide" sub="Understand the market before you commit capital." center />
          <div className="mt-8 rounded-2xl border border-gold/30 bg-white/5 p-8 text-left shadow-[0_18px_40px_rgba(16,36,58,0.12)]">
            <p className="text-lg leading-relaxed text-white/80">A practical guide for private investors, families, and corporate decision-makers considering real estate across Ikoyi, Victoria Island, Lekki, and other prime Nigerian markets.</p>
            <ul className="mt-6 grid gap-3 text-base text-white/75 md:grid-cols-2">
              <li>• Understanding property value</li>
              <li>• Key acquisition considerations</li>
              <li>• Title and documentation</li>
              <li>• Market positioning</li>
              <li>• Capital preservation</li>
              <li>• Investment considerations</li>
              <li>• Acquisition strategy</li>
            </ul>
            <div className="mt-8">
              <a href={wa("Hello Arkstone, I'd like to download the private report.")} target="_blank" rel="noreferrer" className="btn-gold">Download Private Report</a>
            </div>
            <p className="mt-5 text-sm leading-6 text-white/60">Strictly confidential. Arkstone respects your privacy and will never share your contact details without your consent.</p>
          </div>
        </div>
      </section>

      <section id="portfolio" className="scroll-mt-20 bg-ivory py-24">
        <div className="container-x">
          <SectionHead title="Selected Portfolio" sub="A considered selection of properties and opportunities across Nigeria’s prime markets." />
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {filters.map((x) => (
              <button key={x} onClick={() => setF(x)} className={`border px-5 py-2 text-sm font-medium transition ${f === x ? "border-gold bg-gold text-ink" : "border-neutral-300 bg-white hover:border-gold"}`}>{x}</button>
            ))}
          </div>
          <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map((p, i) => (
                <motion.div layout key={p.id} initial={{ opacity: 0, y: 36, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 18, scale: 0.96 }} transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}>
                  <PropertyCard p={p} cta="Request Property Briefing" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          <div className="mt-12 text-center"><Link to="/assets" className="btn-ink">View Full Portfolio <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x max-w-3xl">
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
        </div>
      </section>

      <section id="brief" className="border-t border-gold/40 bg-gold-pale/60 py-24">
        <div className="container-x max-w-3xl">
          <SectionHead title="Begin a Private Conversation." sub="Whether you are considering a landmark residence, building a real estate portfolio, exploring an investment opportunity, or assessing property for your organisation, begin with a conversation." />
          <Reveal className="border border-gold/50 bg-white p-7 shadow-sm md:p-10"><BriefForm /></Reveal>
        </div>
      </section>
    </>
  );
}
