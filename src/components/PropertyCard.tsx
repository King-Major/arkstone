import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck, BedDouble, MapPin, MessageCircle, Ruler, X, Warehouse } from "lucide-react";
import { wa, type Property } from "../data";

const Specs = ({ p }: { p: Property }) => (
  <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-neutral-600">
    {p.beds !== undefined && <span className="flex items-center gap-1.5"><BedDouble size={15} className="text-gold" />{p.beds} Beds{p.bq ? ` + ${p.bq} BQ` : ""}</span>}
    <span className="flex items-center gap-1.5"><Ruler size={15} className="text-gold" />{p.sqm.toLocaleString()} sqm</span>
    {p.type === "Commercial" && <span className="flex items-center gap-1.5"><Warehouse size={15} className="text-gold" />Commercial</span>}
  </div>
);

export default function PropertyCard({ p, cta }: { p: Property; cta: string }) {
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState(0);
  const text = `Hello Arkstone, I'd like a private briefing on "${p.title}" (${p.location}, ${p.id}).`;
  return (
    <>
      <article className="group flex flex-col border border-neutral-200 bg-white transition hover:border-gold hover:shadow-xl">
        <button onClick={() => setOpen(true)} className="relative block aspect-[4/3] overflow-hidden" aria-label={`View ${p.title}`}>
          <img src={p.images[0]} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          <span className="absolute left-3 top-3 flex items-center gap-1.5 bg-white px-3 py-1.5 text-xs font-semibold shadow"><BadgeCheck size={14} className="text-gold" />{p.titleStatus}</span>
        </button>
        <div className="flex flex-1 flex-col p-6">
          <p className="flex items-center gap-1.5 text-sm font-medium text-gold"><MapPin size={14} />{p.location}</p>
          <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
          <p className="mt-1 font-semibold">{p.price}</p>
          <div className="my-4"><Specs p={p} /></div>
          <a href={wa(text)} target="_blank" rel="noreferrer" className="btn-outline mt-auto w-full">{cta}</a>
        </div>
      </article>
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 p-3 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}>
            <motion.div onClick={(e) => e.stopPropagation()} initial={{ y: 30 }} animate={{ y: 0 }} exit={{ y: 30, opacity: 0 }} className="relative max-h-[94vh] w-full max-w-5xl overflow-y-auto bg-white">
              <button onClick={() => setOpen(false)} className="absolute right-3 top-3 z-10 bg-white p-2 shadow" aria-label="Close"><X size={18} /></button>
              <div className="grid md:grid-cols-2">
                <div>
                  <img src={p.images[img]} alt={p.title} className="aspect-[4/3] w-full object-cover" />
                  <div className="flex gap-2 p-3">
                    {p.images.map((s, i) => (<button key={s} onClick={() => setImg(i)} className={`h-16 flex-1 overflow-hidden border-2 ${i === img ? "border-gold" : "border-transparent"}`}><img src={s} alt="" className="h-full w-full object-cover" /></button>))}
                  </div>
                  {p.video && <video src={p.video} controls className="w-full" />}
                </div>
                <div className="space-y-4 p-7">
                  <p className="flex items-center gap-1.5 text-sm font-medium text-gold"><BadgeCheck size={15} />{p.titleStatus} verified</p>
                  <h3 className="text-2xl font-bold md:text-3xl">{p.title}</h3>
                  <p className="text-xl font-semibold">{p.price}</p>
                  <Specs p={p} />
                  <p className="leading-relaxed text-neutral-600">{p.description}</p>
                  <iframe title="Property location" loading="lazy" className="h-48 w-full border border-neutral-200"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(p.mapQuery)}&output=embed`} />
                  <a href={wa(text)} target="_blank" rel="noreferrer" className="btn-gold w-full"><MessageCircle size={16} />Inquire on WhatsApp</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
