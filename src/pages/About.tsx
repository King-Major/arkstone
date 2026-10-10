import { Link } from "react-router-dom";
import { ArrowRight, Eye, Gem, HeartHandshake, ShieldCheck, Target } from "lucide-react";
import { Reveal, SectionHead } from "../components/ui";

const principles = [
  ["Selective Access", "We focus on relevant opportunities rather than overwhelming clients with inventory."],
  ["Disciplined Assessment", "We examine the factors that determine whether an opportunity deserves further consideration."],
  ["Strategic Advisory", "We bring context, perspective, and negotiation discipline to important decisions."],
  ["Long-Term Stewardship", "We view acquisition as the beginning of a relationship—not the end of a transaction."],
  ["Market Intelligence", "We study relevant market conditions so clients can make decisions from a stronger information base."],
];

const leadership = [
  ["Bisola Loto", "Principal Advisor & Managing Partner", "Focus: Strategic advisory; Client relationships; Acquisition strategy; High-stakes negotiation"],
  ["Nonso Azubike", "Managing Partner", "Focus: Developer relationships; Market research; Strategic partnerships; Brand operations"],
  ["Tosin Omotosho", "Legal & Title Due Diligence Advisor", "Focus: Title verification; Legal searches; Documentation review; Transaction compliance; Buyer protection"],
];
const reasons = [
  { icon: Eye, title: "Real Estate Advisory", text: "Positioning every decision within context and strategic intent." },
  { icon: Target, title: "Market Intelligence", text: "Translating dynamics into a clearer decision-making framework." },
  { icon: ShieldCheck, title: "Client Strategy", text: "Tailoring the process to your brief, priorities, and risk tolerance." },
  { icon: HeartHandshake, title: "Acquisition", text: "Helping structure a more disciplined and informed purchase path." },
  { icon: Gem, title: "Legal & Title Due Diligence", text: "Reviewing documentation and transaction risk with care." },
] as const;

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep pb-16 pt-32 text-white md:pb-24 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-light/50 via-transparent to-transparent" />
        <div className="container-x relative max-w-5xl">
          <Reveal className="max-w-4xl">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-gold-light">Advisory Rooted in Rigor</p>
            <h1 className="text-5xl font-semibold leading-[1.02] md:text-7xl">Real estate defined by <span className="text-gold-light">better judgment.</span></h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/75">Arkstone exists to help people make better decisions with real estate. For a private client, property can represent a home, family security, or legacy. For an investor, it can represent capital preservation, income, diversification, or long-term wealth. For a company, it can represent a significant allocation of capital and an important operational decision.</p>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75">The stakes are therefore higher than simply finding a property. Real estate markets can involve fragmented information, complex documentation, uncertain valuations, competing interests, and significant financial commitments. Arkstone brings greater structure to that process.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-gold">Our purpose</p>
            <h2 className="font-serif text-4xl font-semibold leading-tight md:text-6xl">We help clients identify the right property.</h2>
            <div className="mt-6 h-px w-16 bg-gold" />
          </Reveal>
          <Reveal className="space-y-6 text-base leading-8 text-neutral-600 md:text-lg">
            <p>We combine market intelligence, carefully sourced opportunities, disciplined assessment, strategic negotiation, and client support to help individuals, families, investors, and organisations navigate significant real estate decisions.</p>
            <p>We do not believe our value lies in showing clients the most properties.</p>
            <p className="font-semibold text-ink">It lies in helping them identify the right ones.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="container-x">
          <SectionHead title="Our Approach" sub="A method built around information, alignment, and clear judgment." />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {principles.map(([title, text], i) => (
              <Reveal key={title} delay={i * 0.06} className="border border-ink/10 bg-white p-6 shadow-[0_12px_30px_rgba(16,36,58,0.04)]">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold">{title}</p>
                <p className="mt-4 text-base leading-7 text-neutral-600">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHead title="Leadership" sub="A coordinated perspective rather than a single-property sales approach." />
          <div className="grid gap-5 md:grid-cols-3">
            {leadership.map(([name, role, focus], i) => (
              <Reveal key={name} delay={i * 0.08} className="border border-ink/10 bg-white p-6 md:p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold">{role}</p>
                <h3 className="mt-4 text-2xl font-semibold text-ink">{name}</h3>
                <p className="mt-4 text-base leading-7 text-neutral-600">{focus}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-x">
          <Reveal className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-4xl font-semibold leading-tight text-white md:text-6xl">Why this team</h2>
            <div className="mx-auto mt-5 h-px w-16 bg-gold" />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {reasons.map(({ icon: I, title, text }, i) => (
              <Reveal key={title} delay={i * 0.06} className="border border-white/10 bg-white/5 p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center border border-gold/30 bg-navy-light text-gold-light"><I size={22} /></div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
