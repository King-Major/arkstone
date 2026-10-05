import { Eye, Gem, HeartHandshake, ShieldCheck, Target } from "lucide-react";
import { PageBanner, Reveal, SectionHead } from "../components/ui";

const team = [
  ["Bisola Loto", "Principal Advisor & Managing Partner", "Strategic advisory, client relations, and high-stakes price negotiation."],
  ["Nonso Azubike", "Managing Partner", "Commercial & residential developer relationships, market research, and brand operations."],
  ["Tosin Omotosho", "Head of Legal & Title Due Diligence", "Document checks, legal searches, and buyer protection."],
];
const guarantees = [
  [Eye, "Radical Transparency", "Clear facts on legal titles, estate fees, and access before you leave your house for an inspection."],
  [ShieldCheck, "Capital Protection", "Strong negotiation focused on saving you money and stopping developers from adding surprise fees later."],
  [Target, "Curated Efficiency", "We present only 2 or 3 verified, exact-fit options tailored strictly to your brief."],
  [HeartHandshake, "90-Day Transition Care", "We stay with you through move-in cleaning, estate onboarding, and resolving any initial builder fixes."],
  [Gem, "Private Circle Access", "Ongoing, exclusive access to high-yield distress sales and private off-market deals across Lagos."],
] as const;
const initials = (n: string) => n.split(" ").map((x) => x[0]).join("");

export default function About() {
  return (
    <>
      <PageBanner title="Real Estate Built on Honesty and Peace of Mind." sub="Protecting elite capital from unverified middlemen, murky legal titles, and stressful transactions in Lagos." />
      <section className="py-24"><div className="container-x max-w-3xl">
        <SectionHead title="The Arkstone Story" center={false} />
        <Reveal className="space-y-6 font-serif text-xl leading-9 text-neutral-700">
          <p>Buying luxury property or commercial assets in Lagos should be an empowering milestone, not a stressful ordeal. Yet too often, buyers navigate unverified middlemen, unclear property titles, and builders who vanish the moment final payment is made.</p>
          <p>Arkstone Real Estate was established to set a higher standard. We operate as institutional real estate advisors, not casual salespeople trying to close a quick transaction.</p>
          <p>From verifying title documents before taking you for an inspection, to negotiating fiercely on your behalf, providing 90 days of post-handover care, and inviting you into our private investor circle, our commitment is simple: <strong className="text-ink">Under-promise and over-deliver.</strong></p>
        </Reveal>
      </div></section>
      <section className="bg-ivory py-24"><div className="container-x">
        <SectionHead title="Meet the Team" sub="Leadership with a single focus: your protection." />
        <div className="grid gap-8 md:grid-cols-3">
          {team.map(([n, r, f], i) => (
            <Reveal key={n} delay={i * 0.1} className="border border-neutral-200 bg-white text-center">
              <div className="flex aspect-[4/5] items-center justify-center bg-gradient-to-br from-gold-pale to-white font-serif text-7xl text-gold">{initials(n)}</div>
              <div className="border-t-2 border-gold p-6">
                <h3 className="text-xl font-semibold">{n}</h3>
                <p className="mt-1 text-sm font-medium text-gold">{r}</p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{f}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-neutral-400">Replace the initials tiles with professional portraits.</p>
      </div></section>
      <section className="py-24"><div className="container-x">
        <SectionHead title="Our Guarantees" />
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {guarantees.map(([I, t, d], i) => (
            <Reveal key={t} delay={i * 0.05} className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold"><I className="text-gold" size={22} strokeWidth={1.5} /></div>
              <div><h3 className="text-xl font-semibold">{t}</h3><p className="mt-1 leading-relaxed text-neutral-600">{d}</p></div>
            </Reveal>
          ))}
        </div>
      </div></section>
    </>
  );
}
