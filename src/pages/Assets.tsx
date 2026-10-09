import { ArrowRight, BadgeCheck, Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { properties, wa } from "../data";
import { Reveal } from "../components/ui";
import PropertyCard from "../components/PropertyCard";

const Sel = ({ v, set, all, opts }: { v: string; set: (s: string) => void; all: string; opts: string[] }) => (
  <select value={v} onChange={(e) => set(e.target.value)} aria-label={all} className="input h-full min-h-12">
    <option value="">{all}</option>{opts.map((o) => <option key={o}>{o}</option>)}
  </select>
);

export default function Assets() {
  const [loc, setLoc] = useState(""); const [type, setType] = useState(""); const [title, setTitle] = useState("");
  const [price, setPrice] = useState(""); const [q, setQ] = useState("");
  const list = useMemo(() => properties.filter((p) =>
    (!loc || p.location === loc) && (!type || p.type === type) && (!title || p.titleStatus === title) &&
    (!price || p.priceM <= Number(price)) && (!q || `${p.title} ${p.description}`.toLowerCase().includes(q.toLowerCase()))), [loc, type, title, price, q]);
  const reset = () => { setLoc(""); setType(""); setTitle(""); setPrice(""); setQ(""); };
  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep pb-20 pt-32 text-white md:pb-28 md:pt-40">
        <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/Lagos_skyline.jpg/1920px-Lagos_skyline.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-ink/55" />
        <div className="container-x relative">
          <Reveal className="max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-gold-light">A portfolio, considered</p>
            <h1 className="text-5xl font-semibold leading-[1.02] md:text-7xl">Curated residential & commercial real estate</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">A considered selection of properties across Nigeria’s prime markets. Our portfolio is intentionally selective.</p>
            <div className="mt-8 flex items-center gap-2 text-sm text-white/65"><BadgeCheck size={17} className="text-gold-light" /> Carefully selected opportunities across Lagos</div>
          </Reveal>
        </div>
      </section>
      <section className="pb-20 md:pb-28">
        <div className="container-x">
        <div className="relative -mt-8 mb-12 border border-ink/10 bg-white p-5 shadow-[0_18px_50px_rgba(16,36,58,0.10)] md:-mt-10 md:p-7">
          <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-ink"><SlidersHorizontal size={15} className="text-gold" /> Refine your search</div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            <div className="relative sm:col-span-2 lg:col-span-2"><Search size={16} className="absolute left-3 top-4 text-neutral-400" /><input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by name or feature" aria-label="Search properties" className="input min-h-12 !pl-9" /></div>
            <Sel v={loc} set={setLoc} all="All locations" opts={["Ikoyi", "Victoria Island", "Lekki Phase 1"]} />
            <Sel v={type} set={setType} all="All property types" opts={["Residential", "Commercial"]} />
            <Sel v={title} set={setTitle} all="Any title status" opts={["C of O", "Governor's Consent", "Registered Survey"]} />
            <select value={price} onChange={(e) => setPrice(e.target.value)} aria-label="Maximum price" className="input min-h-12">
              <option value="">Any budget</option><option value="300">Up to ₦300M</option><option value="700">Up to ₦700M</option><option value="1000">Up to ₦1B</option><option value="5000">Above ₦1B</option>
            </select>
          </div>
          {(loc || type || title || price || q) && <button onClick={reset} className="mt-4 text-xs font-semibold text-neutral-500 underline decoration-gold underline-offset-4 transition hover:text-ink">Clear all filters</button>}
        </div>
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">The Arkstone collection</p><h2 className="mt-2 font-serif text-3xl font-semibold md:text-4xl">Available properties</h2></div>
          <p className="text-sm text-neutral-500"><span className="font-semibold text-ink">{list.length}</span> {list.length === 1 ? "property" : "properties"}{q || loc || type || title || price ? " match your search" : " selected for you"}</p>
        </div>
        {list.length === 0 ? (
          <div className="border border-ink/10 bg-ivory px-6 py-20 text-center"><Search size={26} className="mx-auto text-gold" /><p className="mt-4 font-serif text-2xl">No properties match those filters.</p><p className="mt-2 text-sm text-neutral-500">Try a different search or clear your filters to see the full collection.</p><button onClick={reset} className="btn-outline mt-6">Clear filters</button></div>
        ) : (
          <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            <AnimatePresence mode="popLayout">
              {list.map((p) => (
                <motion.div layout key={p.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><PropertyCard p={p} cta="Inquire on WhatsApp" /></motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
        <div className="relative mt-16 overflow-hidden bg-ink px-7 py-9 text-white md:px-10 md:py-12">
          <div className="absolute -right-8 -top-16 h-64 w-64 rounded-full border border-gold/20" /><div className="absolute -right-1 -top-9 h-48 w-48 rounded-full border border-gold/20" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light">Private opportunities</p><p className="mt-3 max-w-2xl font-serif text-3xl leading-tight md:text-4xl">Looking for something beyond the public market?</p><p className="mt-3 text-sm text-white/60">Tell us what you have in mind. We’ll help you explore the right next step.</p></div>
            <a href={wa("Hello Arkstone, I'd like an off-market briefing.")} target="_blank" rel="noreferrer" className="btn-gold shrink-0">Request a private briefing <ArrowRight size={16} /></a>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
