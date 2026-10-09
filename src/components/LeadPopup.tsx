import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { PopupForm } from "./Forms";

export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const openReport = () => setOpen(true);
    window.addEventListener("arkstone:open-report", openReport);
    if (sessionStorage.getItem("ark-popup")) {
      return () => window.removeEventListener("arkstone:open-report", openReport);
    }
    const cleanup = () => { clearTimeout(t); window.removeEventListener("scroll", onScroll); };
    const show = () => { setOpen(true); sessionStorage.setItem("ark-popup", "1"); cleanup(); };
    const onScroll = () => { if (window.scrollY / (document.body.scrollHeight - innerHeight) > 0.5) show(); };
    const t = setTimeout(show, 12000);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cleanup();
      window.removeEventListener("arkstone:open-report", openReport);
    };
  }, []);
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}>
          <motion.div role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()} initial={{ y: 30, scale: 0.97 }} animate={{ y: 0, scale: 1 }} exit={{ y: 20, opacity: 0 }}
            className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto border-t-4 border-gold bg-white p-7 shadow-2xl md:p-9">
            <button onClick={() => setOpen(false)} className="absolute right-4 top-4 text-neutral-500 hover:text-ink" aria-label="Close"><X /></button>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-gold">Arkstone Insights</p>
            <h2 className="pr-6 text-2xl font-bold md:text-3xl">The Prime Real Estate Market Report & Acquisition Guide</h2>
            <p className="mb-6 mt-3 text-sm leading-relaxed text-neutral-600">Request our practical guide to property values, acquisition considerations, documentation, market positioning, and strategy across Nigeria’s prime markets.</p>
            <PopupForm />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
