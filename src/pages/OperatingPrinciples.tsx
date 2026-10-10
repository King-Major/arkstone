import { Link } from "react-router-dom";
import { ArrowRight, Compass, FileSearch, Handshake, Scale, ShieldCheck, UsersRound } from "lucide-react";
import { Reveal, SectionHead } from "../components/ui";

const principles = [
  { icon: UsersRound, title: "Rigor Over Speed", text: "Important decisions deserve appropriate scrutiny. We prioritise thorough assessment over unnecessary urgency." },
  { icon: Compass, title: "Discretion & Quiet Authority", text: "Our clients entrust us with significant decisions and sensitive information. We operate with confidentiality, professionalism, and restraint." },
  { icon: FileSearch, title: "Data-Informed Precision", text: "We use relevant market information, comparable properties, location dynamics, and available evidence to strengthen decision-making." },
  { icon: Scale, title: "Independent Judgment", text: "Clients need an informed perspective—not simply another person trying to close a transaction. Our recommendations must serve the client’s objectives." },
  { icon: Handshake, title: "Curated Selectivity", text: "We do not measure value by the number of properties we can present. We focus on opportunities that are relevant, defensible, and worthy of consideration." },
  { icon: ShieldCheck, title: "Absolute Stewardship", text: "A transaction is important. The value created by making the right decision over time is even more important." },
];

const factors = [
  ["Location", "Surrounding development, accessibility, relevance to the brief, and location dynamics."],
  ["Ownership & documentation", "The records and supporting documentation available, and the independent reviews that may be required."],
  ["Entry price & market position", "Comparable information and how the proposed terms sit within the available market context."],
  ["Demand & liquidity", "Potential occupier, tenant, or buyer demand and the client’s likely holding horizon."],
  ["Income & capital considerations", "Where relevant, potential income, capital appreciation, preservation, and diversification—without treating projections as guarantees."],
  ["Long-term suitability", "Whether the property remains appropriate for the client’s intended use and longer-term objectives."],
];

export default function OperatingPrinciples() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep pb-20 pt-32 text-white md:pb-28 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-light/50 via-transparent to-transparent" />
        <div className="container-x relative max-w-5xl">
          <Reveal>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-gold-light">How we work</p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">Operating principles for <span className="text-gold-light">better decisions.</span></h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">Our work is guided by the client’s objectives, considered evidence, and a disciplined view of opportunity and risk.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHead title="The standards behind our advice." sub="These principles guide how we source, assess, communicate, and support real estate decisions." />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {principles.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 0.05} className="group border border-ink bg-ink p-6 text-white transition-colors duration-200 hover:border-gold hover:bg-ivory active:border-gold active:bg-ivory md:p-8">
                <span className="flex h-12 w-12 items-center justify-center border border-white/20 bg-white/10 text-gold-light transition-colors duration-200 group-hover:border-gold/40 group-hover:bg-gold-pale group-hover:text-ink group-active:border-gold/40 group-active:bg-gold-pale group-active:text-ink"><Icon size={22} /></span>
                <h2 className="mt-5 text-xl font-semibold transition-colors duration-200 group-hover:text-ink group-active:text-ink">{title}</h2>
                <p className="mt-3 leading-7 text-white/75 transition-colors duration-200 group-hover:text-neutral-600 group-active:text-neutral-600">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="container-x">
          <SectionHead title="A disciplined assessment framework." sub="The factors considered vary by property and mandate. Our role is to help clients identify what merits attention and coordinate suitable professional review." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {factors.map(([title, text], index) => (
              <Reveal key={title} delay={index * 0.04} className="group border border-ink bg-ink p-6 text-white transition-colors duration-200 hover:border-gold hover:bg-ivory active:border-gold active:bg-ivory">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-light">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold transition-colors duration-200 group-hover:text-ink group-active:text-ink">{title}</h3>
                <p className="mt-3 leading-7 text-white/75 transition-colors duration-200 group-hover:text-neutral-600 group-active:text-neutral-600">{text}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 border-l-2 border-gold bg-white p-6 text-lg leading-8 text-ink">Our objective is not simply to find a property. It is to help determine whether the property deserves the client’s capital.</p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-x flex flex-col items-start justify-between gap-6 border border-gold/30 bg-ink p-7 text-white md:flex-row md:items-center md:p-10">
          <div><h2 className="font-serif text-3xl font-semibold md:text-4xl">A considered decision starts with a clear brief.</h2><p className="mt-3 text-white/65">Tell us what you are looking to achieve.</p></div>
          <Link to="/contact" className="btn-gold shrink-0">Speak with an Advisor <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}
