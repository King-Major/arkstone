import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Eye, Gem, HeartHandshake, ShieldCheck, Target } from "lucide-react";
import { Reveal, SectionHead } from "../components/ui";

const team = [
  ["Bisola Loto", "Principal Advisor & Managing Partner", "Strategic advisory, client relations, and high-stakes price negotiation."],
  ["Nonso Azubike", "Managing Partner", "Commercial and residential developer relationships, market research, and brand operations."],
  ["Tosin Omotosho", "Head of Legal & Title Due Diligence", "Document checks, legal searches, and buyer protection."],
];
const guarantees = [
  [Eye, "Radical Transparency", "Clear facts on title information, estate fees, and access before you set out for an inspection."],
  [ShieldCheck, "Capital Protection", "Considered negotiation focused on protecting your interests and uncovering unexpected costs."],
  [Target, "Curated Efficiency", "A focused shortlist of two or three options matched to your brief, not an endless stream of listings."],
  [HeartHandshake, "90-Day Transition Care", "Continued support with move-in, estate onboarding, and initial builder fixes after handover."],
  [Gem, "Private Circle Access", "For Arkstone clients: ongoing access to private, off-market opportunities across Lagos."],
] as const;
const initials = (name: string) => name.split(" ").map((part) => part[0]).join("");

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep pb-16 pt-32 text-white md:pb-24 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-light/50 via-transparent to-transparent" />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal className="max-w-2xl">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-gold-light">The Arkstone standard</p>
            <h1 className="text-5xl font-semibold leading-[1.02] md:text-7xl">Property guidance, <span className="text-gold-light">grounded in trust.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70">A more thoughtful way to buy property in Lagos: clear information, considered advice, and a team in your corner from first conversation to handover.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold">Meet your advisor <ArrowRight size={16} /></Link>
              <Link to="/assets" className="btn-outline border-white/30 text-white hover:border-gold hover:bg-white/10">Explore properties</Link>
            </div>
            <p className="mt-8 text-xs font-medium uppercase tracking-[0.18em] text-white/45">Independent property advisory · Lagos, Nigeria</p>
          </Reveal>
          <Reveal delay={0.12} className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -inset-3 border border-gold/40" />
            <div className="relative aspect-[5/4] overflow-hidden bg-ink">
              <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/Lagos_skyline.jpg/1920px-Lagos_skyline.jpg" alt="The Lagos Island skyline" className="h-full w-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-transparent to-navy-deep/10" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <p className="font-serif text-2xl text-white md:text-3xl">Local perspective.<br /><span className="text-gold-light">Personal counsel.</span></p>
                <a href="https://commons.wikimedia.org/wiki/File:Lagos_skyline.jpg" target="_blank" rel="noreferrer" className="text-right text-[10px] text-white/60 underline decoration-white/30 underline-offset-2 hover:text-white">Photo: Clara Sanchiz<br />CC BY-SA 2.0</a>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 hidden border border-gold/40 bg-ivory px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-ink sm:block">Your interests, always in focus</div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-gold">Who we are</p>
            <h2 className="font-serif text-4xl font-semibold leading-tight md:text-6xl">A better experience starts with better advice.</h2>
            <div className="mt-6 h-px w-16 bg-gold" />
          </Reveal>
          <Reveal className="space-y-6 text-base leading-8 text-neutral-600 md:text-lg">
            <p>Buying a home or commercial property in Lagos should feel like a confident milestone—not a leap into the unknown. Yet unclear title information, fragmented communication, and unexpected costs can make the process harder than it needs to be.</p>
            <p>Arkstone Real Estate was established to bring greater care and clarity to property decisions. We work as advisors: taking time to understand your brief, sharing relevant information, and helping you assess your options before you commit.</p>
            <p>From reviewing available title documents and negotiating on your behalf to staying close through the transition after handover, our work is guided by one principle: <strong className="font-semibold text-ink">under-promise and over-deliver.</strong></p>
            <div className="border-l-2 border-gold bg-gold-pale/50 py-5 pl-6 pr-5">
              <p className="font-serif text-2xl leading-snug text-ink md:text-3xl">“Your confidence matters as much as the property you choose.”</p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-neutral-500">The Arkstone commitment</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="container-x">
          <SectionHead title="The people behind your move." sub="A dedicated team bringing together property advisory, market knowledge, and title due diligence." />
          <div className="grid gap-5 md:grid-cols-3">
            {team.map(([name, role, focus], i) => (
              <Reveal key={name} delay={i * 0.08} className="group flex h-full flex-col border border-ink/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/70 hover:shadow-[0_18px_45px_rgba(16,36,58,0.09)] md:p-8">
                <div className="relative flex aspect-[1.25/1] items-center justify-center overflow-hidden bg-ink">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-light via-ink to-navy-deep" />
                  <span className="absolute right-4 top-3 font-sans text-xs font-semibold tracking-[0.18em] text-white/40">0{i + 1} / 03</span>
                  <span className="relative font-serif text-7xl text-gold-light/90">{initials(name)}</span>
                  <span className="absolute bottom-0 left-0 h-1 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                </div>
                <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.18em] text-gold">{role}</p>
                <h3 className="mt-2 text-2xl font-semibold">{name}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-neutral-600">{focus}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-x">
          <Reveal className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-4xl font-semibold leading-tight text-white md:text-6xl">A relationship built around you.</h2>
            <div className="mx-auto mt-5 h-px w-16 bg-gold" />
            <p className="mt-5 text-lg leading-relaxed text-white/65">Thoughtful guidance and practical care at every stage of the acquisition.</p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
            {guarantees.map(([Icon, title, description], i) => (
              <Reveal key={title} delay={i * 0.06} className={`group flex h-full flex-col border border-white/15 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/70 hover:bg-white/[0.07] md:p-7 lg:col-span-2 ${i === 3 ? "lg:col-start-2" : ""} ${i === 4 ? "sm:col-span-2 lg:col-span-2" : ""}`}>
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center border border-gold/50 text-gold-light"><Icon size={21} strokeWidth={1.5} /></span>
                  <ArrowUpRight size={17} className="text-white/35 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-light" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold leading-tight">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-white/60">{description}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/15 pt-8 sm:flex-row sm:items-center">
            <p className="max-w-xl font-serif text-2xl text-white/85">Thinking about your next move in Lagos?</p>
            <Link to="/contact" className="btn-gold shrink-0">Start a conversation <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
