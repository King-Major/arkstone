import { Link } from "react-router-dom";
import { ArrowRight, FileCheck2, Gem, HeartHandshake, KeyRound, Scale } from "lucide-react";
import { Reveal, SectionHead } from "../components/ui";

const services = [
  {
    icon: KeyRound,
    title: "Property Sales & Marketing",
    text: "We support the marketing and sale of selected properties by connecting relevant opportunities with suitable buyers through considered positioning, market understanding, and a professional transaction process.",
    outcome: "A relevant opportunity matched to a suitable buyer.",
  },
  {
    icon: FileCheck2,
    title: "Property Acquisition",
    text: "We help clients identify suitable properties, assess relevant considerations, evaluate opportunities, and navigate the acquisition process in line with their objectives.",
    outcome: "A more considered acquisition path.",
  },
  {
    icon: Scale,
    title: "Off-Plan Property Advisory",
    text: "We help clients evaluate off-plan opportunities by considering the developer, project details, available documentation, pricing, location, delivery considerations, and relevant risks before committing capital.",
    outcome: "Greater clarity before commitment.",
  },
  {
    icon: HeartHandshake,
    title: "Real Estate Investment Advisory",
    text: "We help investors assess real estate opportunities in relation to market conditions, entry price, potential income, capital appreciation, risk, and long-term investment objectives.",
    outcome: "Investment decisions informed by context.",
  },
  {
    icon: Gem,
    title: "Property Portfolio Management",
    text: "We help clients approach their property holdings strategically, with support for portfolio reviews, performance considerations, and the coordination of relevant property management professionals where required.",
    outcome: "A stronger strategic view of ownership.",
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
