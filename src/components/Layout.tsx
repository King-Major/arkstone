import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BookOpenText, ChevronDown, Compass, Mail, MapPin, Menu, MessageCircle, Scale, Sparkles, X } from "lucide-react";
import { ADDRESS, EMAIL, wa } from "../data";
import logomarkDark from "../ARKSTONE/04. LOGOMARK/LOGOMARK C.png";
import logomarkLight from "../ARKSTONE/04. LOGOMARK/LOGOMARK W.png";

export const Logo = ({ light = false }: { light?: boolean }) => {
  const src = light ? logomarkLight : logomarkDark;
  const textClass = light ? "text-white/80" : "text-ink/80";
  const subTextClass = light ? "text-white/60" : "text-ink/60";

  return (
    <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label="Arkstone Real Estate home">
      <img src={src} alt="Arkstone Real Estate logo" className="h-8 w-auto object-contain sm:h-9 md:h-10" />
      <div className={`flex flex-col leading-none text-[10px] font-medium tracking-[0.2em] uppercase ${textClass}`}>
        <span className="text-[11px]">Arkstone</span>
        <span className={`text-[9px] tracking-[0.18em] ${subTextClass}`}>Real Estate</span>
      </div>
    </Link>
  );
};

const primaryLinks = [
  ["/", "Home"],
  ["/assets", "Portfolio"],
  ["/about", "About Us"],
] as const;
const contactLink = ["/contact", "Contact"] as const;
const exploreLinks = [
  { to: "/services", label: "Advisory Services", description: "Sourcing, assessment, negotiation and acquisition support.", icon: Compass },
  { to: "/operating-principles", label: "Operating Principles", description: "The standards and discipline behind our advice.", icon: Scale },
  { to: "/insights", label: "Arkstone Insights", description: "Research and perspectives on prime real estate.", icon: BookOpenText },
  { to: "/insider-circle", label: "Insider Circle", description: "A private relationship for insight, access and guidance.", icon: Sparkles },
] as const;
const footerLinks = [...primaryLinks, ...exploreLinks.map(({ to, label }) => [to, label] as const), contactLink];
const msg = "Hello Arkstone, I'd like to speak with an advisor.";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const exploreRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const exploreActive = exploreLinks.some(({ to }) => pathname === to || pathname.startsWith(`${to}/`));

  useEffect(() => {
    if (!exploreOpen) return;
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!exploreRef.current?.contains(event.target as Node)) setExploreOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExploreOpen(false);
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [exploreOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-ink/10 bg-ivory/95 shadow-[0_8px_30px_rgba(16,36,58,0.04)] backdrop-blur-md">
      <div className="container-x relative flex h-[76px] items-center justify-between gap-5 lg:h-20">
        <Logo />
        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex 2xl:gap-2">
          {primaryLinks.map(([to, label]) => (
            <NavLink key={to} to={to} end className={({ isActive }) => `relative whitespace-nowrap px-3 py-2 text-xs font-semibold transition-colors after:absolute after:inset-x-3 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform hover:text-gold hover:after:scale-x-100 2xl:px-4 2xl:text-sm ${isActive ? "text-gold after:scale-x-100" : "text-ink/80"}`}>{label}</NavLink>
          ))}
          <div className="relative" ref={exploreRef}>
            <button
              type="button"
              aria-expanded={exploreOpen}
              aria-controls="arkstone-explore-menu"
              onClick={() => setExploreOpen((current) => !current)}
              className={`inline-flex items-center gap-1 whitespace-nowrap px-3 py-2 text-xs font-semibold transition-colors hover:text-gold 2xl:px-4 2xl:text-sm ${exploreActive || exploreOpen ? "text-gold" : "text-ink/80"}`}
            >
              Discover
              <ChevronDown size={14} className={`transition-transform duration-200 ${exploreOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {exploreOpen && (
                <motion.div
                  id="arkstone-explore-menu"
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="fixed left-[max(1rem,calc((100vw-760px)/2))] top-20 z-50 w-[min(760px,calc(100vw-2rem))] overflow-hidden border border-gold/30 bg-white shadow-[0_24px_70px_rgba(10,25,40,0.2)]"
                >
                  <div className="grid md:grid-cols-[0.78fr_1.22fr]">
                    <div className="relative overflow-hidden bg-ink p-7 text-white md:p-9">
                      <div className="absolute -right-14 -top-16 h-48 w-48 rounded-full border border-gold/20" />
                      <div className="absolute -right-3 -top-5 h-32 w-32 rounded-full border border-gold/20" />
                      <div className="relative">
                        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-gold-light">Discover Arkstone</p>
                        <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight">Clarity for every property decision.</h2>
                        <p className="mt-4 text-sm leading-6 text-white/65">Explore the expertise, principles and perspectives behind our advisory.</p>
                        <Link to="/contact" onClick={() => setExploreOpen(false)} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold-light transition-colors hover:text-white">
                          Speak with an advisor <ArrowUpRight size={16} />
                        </Link>
                      </div>
                    </div>
                    <div className="grid gap-1 p-3 sm:grid-cols-2 sm:p-4">
                      {exploreLinks.map(({ to, label, description, icon: Icon }) => {
                        const active = pathname === to || pathname.startsWith(`${to}/`);
                        return (
                          <NavLink
                            key={to}
                            to={to}
                            onClick={() => setExploreOpen(false)}
                            className={`group flex gap-3 p-4 transition-colors hover:bg-ivory ${active ? "bg-ivory" : ""}`}
                          >
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold/30 bg-gold-pale/60 text-ink transition-colors group-hover:bg-gold group-hover:text-ink">
                              <Icon size={19} strokeWidth={1.6} />
                            </span>
                            <span className="min-w-0">
                              <span className="flex items-center gap-1 text-sm font-semibold text-ink">
                                {label}<ArrowUpRight size={13} className="text-gold opacity-0 transition-opacity group-hover:opacity-100" />
                              </span>
                              <span className="mt-1 block text-xs leading-5 text-neutral-500">{description}</span>
                            </span>
                          </NavLink>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-ink/10 bg-ivory/70 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                    <span>Arkstone Real Estate</span>
                    <span className="text-gold">Research · Advisory · Acquisition</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <NavLink to={contactLink[0]} className={({ isActive }) => `relative whitespace-nowrap px-3 py-2 text-xs font-semibold transition-colors after:absolute after:inset-x-3 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform hover:text-gold hover:after:scale-x-100 2xl:px-4 2xl:text-sm ${isActive ? "text-gold after:scale-x-100" : "text-ink/80"}`}>{contactLink[1]}</NavLink>
        </nav>
        <a href={wa(msg)} target="_blank" rel="noreferrer" className="btn-gold hidden !px-4 !py-2.5 lg:inline-flex"><MessageCircle size={16} /> <span className="hidden xl:inline">Chat on WhatsApp</span><span className="xl:hidden">WhatsApp</span></a>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t bg-ivory lg:hidden">
            <div className="container-x flex flex-col gap-1 py-4">
              {primaryLinks.map(([to, label]) => (<NavLink key={to} to={to} end onClick={() => setOpen(false)} className={({ isActive }) => `py-3 font-medium ${isActive ? "text-gold" : ""}`}>{label}</NavLink>))}
              <p className="pb-1 pt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">Discover</p>
              {exploreLinks.map(({ to, label }) => (<NavLink key={to} to={to} onClick={() => setOpen(false)} className={({ isActive }) => `py-3 font-medium ${isActive ? "text-gold" : ""}`}>{label}</NavLink>))}
              <NavLink to={contactLink[0]} onClick={() => setOpen(false)} className={({ isActive }) => `py-3 font-medium ${isActive ? "text-gold" : ""}`}>{contactLink[1]}</NavLink>
              <a href={wa(msg)} target="_blank" rel="noreferrer" className="btn-gold mt-2"><MessageCircle size={16} />Chat on WhatsApp</a>
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
  <footer className="border-t border-gold/30 bg-ink text-white">
    <div className="container-x grid gap-10 py-14 md:grid-cols-3">
      <div><Logo light /><p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">Institutional real estate advisors for verified luxury residential and commercial acquisitions in Lagos.</p></div>
      <div className="text-sm">
        <h3 className="mb-4 font-serif text-xl font-semibold text-white">Explore</h3>
        <ul className="space-y-2 text-white/65">{footerLinks.map(([to, l]) => <li key={to}><Link className="transition-colors hover:text-gold-light" to={to}>{l}</Link></li>)}</ul>
      </div>
      <div className="space-y-3 text-sm text-white/65">
        <h3 className="mb-4 font-serif text-xl font-semibold text-white">Contact</h3>
        <p className="flex gap-2"><Mail size={16} className="mt-0.5 text-gold" />{EMAIL}</p>
        <p className="flex gap-2"><MapPin size={16} className="mt-0.5 text-gold" />{ADDRESS}</p>
      </div>
    </div>
    <div className="border-t border-white/10 py-5 text-center text-xs text-white/45">© {new Date().getFullYear()} Arkstone Real Estate. All rights reserved.</div>
  </footer>
);
