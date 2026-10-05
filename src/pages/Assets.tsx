import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import { properties, wa } from "../data";
import { PageBanner } from "../components/ui";
import PropertyCard from "../components/PropertyCard";

const Sel = ({ v, set, all, opts }: { v: string; set: (s: string) => void; all: string; opts: string[] }) => (
  <select value={v} onChange={(e) => set(e.target.value)} className="input">
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
      <PageBanner title="Curated Residential & Commercial Inventory." sub="Every listing carries a verified title badge and has passed our baseline legal audit." />
      <section className="py-14"><div className="container-x">
        <div className="mb-10 grid gap-3 border border-neutral-200 bg-ivory p-5 md:grid-cols-6">
          <div className="relative md:col-span-2"><Search size={16} className="absolute left-3 top-3.5 text-neutral-400" /><input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search features, e.g. pool" className="input !pl-9" /></div>
          <Sel v={loc} set={setLoc} all="Location" opts={["Ikoyi", "Victoria Island", "Lekki Phase 1"]} />
          <Sel v={type} set={setType} all="Asset type" opts={["Residential", "Commercial"]} />
          <Sel v={title} set={setTitle} all="Title status" opts={["C of O", "Governor's Consent", "Registered Survey"]} />
          <select value={price} onChange={(e) => setPrice(e.target.value)} className="input">
            <option value="">Any price</option><option value="300">Up to ₦300M</option><option value="700">Up to ₦700M</option><option value="1000">Up to ₦1B</option><option value="5000">Above ₦1B</option>
          </select>
        </div>
        <p className="mb-6 text-sm text-neutral-500">{list.length} asset{list.length === 1 ? "" : "s"} found</p>
        {list.length === 0 ? (
          <div className="py-16 text-center"><p className="text-lg">No assets match these filters.</p><button onClick={reset} className="btn-outline mt-5">Clear filters</button></div>
        ) : (
          <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map((p) => (
                <motion.div layout key={p.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><PropertyCard p={p} cta="Inquire on WhatsApp" /></motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
        <div className="mt-16 flex flex-col items-center justify-between gap-5 bg-gold px-8 py-10 text-center md:flex-row md:text-left">
          <p className="max-w-2xl font-serif text-2xl font-semibold">Looking for confidential, off-market opportunities?</p>
          <a href={wa("Hello Arkstone, I'd like an off-market briefing.")} target="_blank" rel="noreferrer" className="btn-ink shrink-0">Request Off-Market Briefing</a>
        </div>
      </div></section>
    </>
  );
}
