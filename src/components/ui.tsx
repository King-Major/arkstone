import { motion } from "framer-motion";
import type { ReactNode } from "react";

export const Reveal = ({ children, delay = 0, className = "", x = 0, y = 36 }: { children: ReactNode; delay?: number; className?: string; x?: number; y?: number }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, x, y, scale: 0.97 }}
    whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const SectionHead = ({ title, sub, center = true }: { title: string; sub?: string; center?: boolean }) => (
  <Reveal className={`mb-12 max-w-3xl ${center ? "mx-auto text-center" : ""}`} y={26}>
    <h2 className="text-4xl font-semibold leading-tight md:text-6xl">{title}</h2>
    <div className={`mt-5 h-px w-16 bg-gold ${center ? "mx-auto" : ""}`} />
    {sub && <p className="mt-5 text-lg leading-relaxed text-neutral-600">{sub}</p>}
  </Reveal>
);

export const PageBanner = ({ title, sub }: { title: string; sub: string }) => (
  <section className="border-b border-gold/30 bg-gradient-to-br from-ivory via-white to-gold-pale/50 pb-16 pt-36">
    <div className="container-x max-w-4xl">
      <motion.h1 initial={{ opacity: 0, y: 36, x: -18 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="text-5xl font-semibold leading-[1.05] md:text-7xl">{title}</motion.h1>
      <p className="mt-6 max-w-2xl text-lg text-neutral-600">{sub}</p>
    </div>
  </section>
);
