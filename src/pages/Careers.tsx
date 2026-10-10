import { ArrowRight, Check } from "lucide-react";
import { EMAIL } from "../data";
import { Reveal, SectionHead } from "../components/ui";

const values = [
  ["Integrity", "A commitment to honesty, discretion, and responsible conduct."],
  ["Excellence", "Attention to detail and a desire to deliver work to a high standard."],
  ["Analytical Thinking", "The ability to research, evaluate information, and approach decisions thoughtfully."],
  ["Professionalism", "Strong communication, accountability, and respect for clients and colleagues."],
  ["Initiative", "A willingness to learn, take ownership, and contribute meaningfully."],
];

const areas = [
  "Real Estate Advisory and Acquisition",
  "Property Research and Market Intelligence",
  "Sales and Client Advisory",
  "Legal and Title Due Diligence",
  "Marketing, Communications, and Brand Strategy",
  "Operations and Client Experience",
];

export default function Careers() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep pb-20 pt-32 text-white md:pb-28 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-light/50 via-transparent to-transparent" />
        <div className="container-x relative max-w-5xl">
          <Reveal className="max-w-4xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-gold-light">Careers at Arkstone</p>
            <h1 className="text-5xl font-semibold leading-[1.02] md:text-7xl">Build a Career in <span className="text-gold-light">Better Real Estate.</span></h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/75">At Arkstone, we believe better real estate decisions begin with better thinking, sound judgment, and people who care about getting the details right.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Join our team</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight md:text-5xl">Thoughtful people. Better decisions.</h2>
          </Reveal>
          <Reveal className="space-y-5 text-base leading-8 text-neutral-600 md:text-lg">
            <p>We are building a real estate advisory and acquisition firm focused on helping clients navigate Nigeria’s prime property markets with clarity, diligence, and confidence. Our work requires more than market knowledge. It requires integrity, analytical thinking, professionalism, and a commitment to excellence.</p>
            <p>We welcome conversations with individuals who share these values and are interested in contributing to the future of real estate advisory in Nigeria.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-24">
        <div className="container-x">
          <SectionHead title="Who We Look For" sub="We value people who demonstrate:" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(([title, text], index) => (
              <Reveal key={title} delay={index * 0.04} className="group border border-ink bg-ink p-6 text-white transition-colors duration-200 hover:border-gold hover:bg-ivory active:border-gold active:bg-ivory">
                <span className="flex h-10 w-10 items-center justify-center border border-white/20 bg-white/10 text-gold-light transition-colors duration-200 group-hover:border-gold/40 group-hover:bg-gold-pale group-hover:text-ink group-active:border-gold/40 group-active:bg-gold-pale group-active:text-ink"><Check size={19} /></span>
                <h3 className="mt-4 text-xl font-semibold transition-colors duration-200 group-hover:text-ink group-active:text-ink">{title}</h3>
                <p className="mt-2 leading-7 text-white/75 transition-colors duration-200 group-hover:text-neutral-600 group-active:text-neutral-600">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Areas of interest</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">Where you could contribute.</h2>
            <p className="mt-5 leading-7 text-neutral-600">As Arkstone grows, opportunities may emerge across several areas of our work, including:</p>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {areas.map((area, index) => (
              <Reveal key={area} delay={index * 0.04} className="group flex items-start gap-3 border border-ink bg-ink p-5 text-white transition-colors duration-200 hover:border-gold hover:bg-ivory active:border-gold active:bg-ivory">
                <Check size={17} className="mt-1 shrink-0 text-gold-light transition-colors group-hover:text-gold group-active:text-gold" />
                <p className="leading-6 transition-colors group-hover:text-ink group-active:text-ink">{area}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white md:py-24">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light">Interested in working with us?</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">We welcome your introduction.</h2>
            <p className="mt-5 leading-7 text-white/70">If you believe your skills, experience, or perspective could contribute to Arkstone’s work, we welcome you to introduce yourself. Share a brief introduction, your area of expertise, and how you believe you could contribute to our mission of helping clients make better real estate decisions.</p>
            <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Career Interest at Arkstone")}`} className="btn-gold mt-8">Express Your Interest <ArrowRight size={16} /></a>
            <p className="mt-5 text-sm text-white/55">Your information will be treated professionally and handled in accordance with Arkstone’s privacy practices.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
