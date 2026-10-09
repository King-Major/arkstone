import { Link } from "react-router-dom";
import { ArrowRight, FileCheck2, Gem, HeartHandshake, KeyRound, Scale } from "lucide-react";
import { Reveal, SectionHead } from "../components/ui";

const services = [
  {
    icon: KeyRound,
    title: "Opportunity Sourcing & Direct Access",
    text: "We source residential, commercial, land, and development opportunities against a defined client brief. Where appropriate, our network can provide access to opportunities that are not broadly marketed.",
    outcome: "A relevant selection, not an indiscriminate list.",
  },
  {
    icon: FileCheck2,
    title: "Property & Transaction Assessment",
    text: "We coordinate appropriate reviews of ownership, title and supporting documentation, valuation, property particulars, and transaction considerations with relevant professional advisers.",
    outcome: "A clearer view of the questions and reviews a property requires.",
  },
  {
    icon: Scale,
    title: "Market Intelligence",
    text: "We bring together market research, comparable-property analysis, pricing, location dynamics, and demand indicators to put an opportunity in context.",
    outcome: "Better information for a more considered decision.",
  },
  {
    icon: HeartHandshake,
    title: "Strategic Negotiation",
    text: "We help clients clarify objectives, understand commercial terms, and approach negotiation with stronger information and a more disciplined position.",
    outcome: "A negotiation informed by the client’s priorities.",
  },
  {
    icon: Gem,
    title: "Acquisition Coordination & Continued Support",
    text: "We coordinate with relevant legal, financial, and professional parties through the acquisition process, and can continue supporting clients after completion where appropriate.",
    outcome: "A connected process from mandate through ownership.",
  },
];

const stages = [
  ["Strategic Alignment", "We understand your objectives, requirements, priorities, timeline, and financial considerations."],
  ["Curated Access", "We identify and present opportunities that align with your brief."],
  ["Assessment", "We evaluate the property, market position, documentation considerations, and relevant risks."],
  ["Advisory & Negotiation", "We help you assess the opportunity, make informed decisions, and negotiate strategically."],
  ["Acquisition & Closing", "We coordinate with relevant professionals and transaction parties toward completion."],
  ["Continued Relationship", "We provide appropriate ongoing guidance, market insight, and access to relevant opportunities."],
];

export default function Services() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep pb-20 pt-32 text-white md:pb-28 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-light/50 via-transparent to-transparent" />
        <div className="container-x relative max-w-5xl">
          <Reveal>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-gold-light">Arkstone Advisory</p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">From opportunity to acquisition, <span className="text-gold-light">with clarity.</span></h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">Our services bring sourcing, information, assessment, negotiation, and professional coordination together around your real estate objectives.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHead title="Advisory built around your decision." sub="We do more than introduce properties. We help clients understand which opportunities deserve serious consideration and what it takes to pursue them." />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map(({ icon: Icon, title, text, outcome }, index) => (
              <Reveal key={title} delay={index * 0.06} className="flex h-full flex-col border border-ink/10 bg-white p-6 shadow-[0_12px_30px_rgba(16,36,58,0.04)] md:p-8">
                <span className="flex h-12 w-12 items-center justify-center border border-gold/40 bg-gold-pale text-ink"><Icon size={22} /></span>
                <h2 className="mt-5 text-2xl font-semibold">{title}</h2>
                <p className="mt-4 flex-1 leading-7 text-neutral-600">{text}</p>
                <p className="mt-6 border-t border-ink/10 pt-4 text-sm font-semibold text-ink">{outcome}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="container-x">
          <SectionHead title="How We Help You Acquire with Confidence" sub="A clear process keeps the client brief at the centre of each decision." />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stages.map(([title, text], index) => (
              <Reveal key={title} delay={index * 0.04} className="border border-ink/10 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Stage 0{index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-neutral-600">{text}</p>
              </Reveal>
            ))}
          </ol>
          <p className="mx-auto mt-8 max-w-3xl text-center leading-7 text-neutral-600">A successful acquisition can be the beginning of a longer-term client relationship, supported by relevant opportunities and insight over time.</p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-x flex flex-col items-start justify-between gap-6 border border-gold/30 bg-ink p-7 text-white md:flex-row md:items-center md:p-10">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light">Start with your objectives</p><h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold md:text-4xl">Let’s identify the right next step.</h2></div>
          <Link to="/contact" className="btn-gold shrink-0">Request Advisory <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}
