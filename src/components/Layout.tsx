import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, MapPin, Menu, MessageCircle, X } from "lucide-react";
import { ADDRESS, EMAIL, wa } from "../data";

export const Logo = () => (
  <Link to="/" className="flex items-center gap-3" aria-label="Arkstone Real Estate home">
    <span className="flex h-10 w-10 rotate-45 items-center justify-center border border-gold bg-white">
      <span className="-rotate-45 font-serif text-lg font-bold text-gold">A</span>
    </span>
    <span className="leading-none">
      <span className="block font-serif text-xl font-bold tracking-wide">ARKSTONE</span>
      <span className="text-[10px] tracking-[0.3em] text-neutral-500">REAL ESTATE</span>
    </span>
  </Link>
);

const links = [["/", "Home"], ["/assets", "Available Assets"], ["/about", "About Us"], ["/contact", "Contact"]];
const msg = "Hello Arkstone, I'd like to speak with an advisor.";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="container-x flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-9 md:flex">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end className={({ isActive }) => `py-1 text-sm font-medium transition-colors hover:text-gold ${isActive ? "text-gold" : ""}`}>{label}</NavLink>
          ))}
        </nav>
        <a href={wa(msg)} target="_blank" rel="noreferrer" className="btn-gold hidden !py-2.5 md:inline-flex"><MessageCircle size={16} />Chat on WhatsApp</a>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t bg-white md:hidden">
            <div className="container-x flex flex-col gap-1 py-4">
              {links.map(([to, label]) => (<Link key={to} to={to} onClick={() => setOpen(false)} className="py-3 font-medium">{label}</Link>))}
              <a href={wa(msg)} className="btn-gold mt-2">Chat on WhatsApp</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const WhatsAppFloat = () => (
  <a href={wa(msg)} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
    className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink shadow-lg transition hover:scale-105 hover:bg-gold-light">
    <MessageCircle />
  </a>
);

export const Footer = () => (
  <footer className="border-t border-gold/40 bg-gold-pale/50">
    <div className="container-x grid gap-10 py-14 md:grid-cols-3">
      <div><Logo /><p className="mt-5 max-w-xs text-sm leading-relaxed text-neutral-600">Institutional real estate advisors for verified luxury residential and commercial acquisitions in Lagos.</p></div>
      <div className="text-sm">
        <h3 className="mb-4 font-serif text-lg font-semibold">Explore</h3>
        <ul className="space-y-2 text-neutral-600">{links.map(([to, l]) => <li key={to}><Link className="hover:text-gold" to={to}>{l}</Link></li>)}</ul>
      </div>
      <div className="space-y-3 text-sm text-neutral-600">
        <h3 className="mb-4 font-serif text-lg font-semibold text-ink">Contact</h3>
        <p className="flex gap-2"><Mail size={16} className="mt-0.5 text-gold" />{EMAIL}</p>
        <p className="flex gap-2"><MapPin size={16} className="mt-0.5 text-gold" />{ADDRESS}</p>
      </div>
    </div>
    <div className="border-t border-gold/30 py-5 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Arkstone Real Estate. All rights reserved.</div>
  </footer>
);
