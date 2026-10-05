import { motion } from "framer-motion";
import type { ReactNode } from "react";

export const Reveal = ({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay, ease: "easeOut" }}>
    {children}
  </motion.div>
);

export const SectionHead = ({ title, sub, center = true }: { title: string; sub?: string; center?: boolean }) => (
  <Reveal className={`mb-12 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
    <h2 className="text-3xl font-bold md:text-5xl">{title}</h2>
    <div className={`mt-5 h-px w-16 bg-gold ${center ? "mx-auto" : ""}`} />
    {sub && <p className="mt-5 text-lg leading-relaxed text-neutral-600">{sub}</p>}
  </Reveal>
);

export const PageBanner = ({ title, sub }: { title: string; sub: string }) => (
  <section className="border-b border-gold/30 bg-gradient-to-b from-gold-pale to-white pb-16 pt-36">
    <div className="container-x max-w-4xl">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold md:text-6xl">{title}</motion.h1>
      <p className="mt-6 max-w-2xl text-lg text-neutral-600">{sub}</p>
    </div>
  </section>
);
