import { Link } from "react-router-dom";
import { ArrowRight, BookOpenCheck, KeyRound, MessagesSquare, Sparkles } from "lucide-react";
import { Reveal, SectionHead } from "../components/ui";

const benefits = [
  { icon: KeyRound, title: "Selected opportunities", text: "Relevant opportunities shared with regard to a client’s stated objectives and mandate." },
  { icon: BookOpenCheck, title: "Market intelligence", text: "Research and perspectives to help clients stay informed as they evaluate real estate decisions." },
  { icon: MessagesSquare, title: "Private briefings", text: "Focused conversations around market context, acquisition considerations, and next steps." },
  { icon: Sparkles, title: "An ongoing relationship", text: "A continued point of contact for guidance and suitable opportunities as client objectives evolve." },
];

const steps = [
  ["Share your objectives", "Tell us about your real estate interests, priorities, and the kind of information or opportunities that would be useful to you."],
  ["Have a private conversation", "Our advisory team will learn more about your brief and explain how Arkstone works with clients."],
  ["Discuss fit and next steps", "We will discuss whether an ongoing Insider Circle relationship is appropriate and what the next steps could look like."],
];

export default function InsiderCircle() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep pb-20 pt-32 text-white md:pb-28 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-light/50 via-transparent to-transparent" />
        <div className="container-x relative max-w-5xl">
          <Reveal>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-gold-light">A private Arkstone relationship</p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">The Arkstone <span className="text-gold-light">Insider Circle.</span></h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">An ongoing relationship for selected clients seeking relevant opportunities, market intelligence, private briefings, and considered guidance.</p>
            <Link to="/contact" className="btn-gold mt-8">Enquire about the Insider Circle <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHead title="Insight and access, shaped around your brief." sub="The Insider Circle extends the client relationship beyond a single transaction. It is designed to support informed decisions over time—not to promise access to every opportunity or a particular investment outcome." />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {benefits.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 0.05} className="group border border-ink bg-ink p-6 text-white shadow-[0_12px_30px_rgba(16,36,58,0.04)] transition-colors duration-200 hover:border-gold hover:bg-ivory active:border-gold active:bg-ivory">
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
          <SectionHead title="Start with a conversation." sub="Access is discussed directly with our advisory team so that expectations and relevance are clear." />
          <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-3">
            {steps.map(([title, text], index) => (
              <Reveal key={title} delay={index * 0.06} className="group border border-ink bg-ink p-6 text-white transition-colors duration-200 hover:border-gold hover:bg-ivory active:border-gold active:bg-ivory">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-light">Step 0{index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold transition-colors duration-200 group-hover:text-ink group-active:text-ink">{title}</h3>
                <p className="mt-3 leading-7 text-white/75 transition-colors duration-200 group-hover:text-neutral-600 group-active:text-neutral-600">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
