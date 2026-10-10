import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, FileCheck2, Gem, HeartHandshake, KeyRound, Minus, Plus, Scale } from "lucide-react";
import { properties, wa } from "../data";
import { Reveal, SectionHead } from "../components/ui";
import PropertyCard from "../components/PropertyCard";
import { BriefForm } from "../components/Forms";

const capabilities = [
  { icon: KeyRound, title: "Direct Access", text: "We source carefully selected residential, commercial, land, and development opportunities, including properties that may not be broadly marketed." },
  { icon: FileCheck2, title: "Rigorous Assessment", text: "We coordinate appropriate professional reviews across ownership, title, documentation, valuation, property particulars, and transaction considerations to identify and mitigate avoidable risks." },
  { icon: Scale, title: "Market Intelligence", text: "We use relevant market research, comparable-property analysis, pricing information, location dynamics, and demand indicators to give clients a stronger basis for decision-making." },
  { icon: HeartHandshake, title: "Strategic Negotiation", text: "We help clients evaluate commercial terms and approach negotiations with clearer objectives and better information." },
  { icon: Gem, title: "Acquisition & Continued Support", text: "We coordinate with relevant legal and professional parties through the acquisition process and provide practical support following completion." },
];

const assessment = [
  "Location — Quality, accessibility, demand, trajectory, and strategic relevance.",
  "Documentation & Ownership — Title, ownership, approvals, and supporting documentation.",
  "Entry Position — Whether the acquisition price is supported by relevant market evidence.",
  "Market Position — How the asset compares with competing properties.",
  "Demand & Liquidity — The quality of its potential occupier, buyer, or tenant market.",
  "Income & Capital Potential — Where relevant, potential for rental income, capital appreciation, wealth preservation, or portfolio diversification.",
  "Long-Term Suitability — Whether the property serves the client’s stated objectives.",
];

const audiences = [
  ["Homebuyers", "For individuals and families seeking homes for personal use, family living, legacy, or long-term ownership."],
  ["Private Investors", "For individuals, families, and private investors seeking to preserve, grow, diversify, or strategically deploy capital through real estate."],
  ["Corporate Clients", "For companies and institutions making significant property decisions aligned with broader corporate objectives."],
];

const journey = [
  ["Strategic Alignment", "We understand your objectives, requirements, priorities, timeline, and financial considerations."],
  ["Curated Access", "We identify and present opportunities that align with your brief."],
  ["Assessment", "We evaluate the property, market position, documentation considerations, and relevant risks."],
  ["Advisory & Negotiation", "We help you assess the opportunity, make informed decisions, and negotiate strategically."],
  ["Acquisition & Closing", "We coordinate with relevant professionals and transaction parties toward completion."],
  ["Continued Relationship", "We provide appropriate ongoing guidance, market insight, and access to relevant opportunities."],
];

const insights = [
  {
    slug: "understanding-prime-lagos-locations",
    title: "Understanding Prime Lagos Locations",
    description: "A practical framework for comparing property submarkets against your objectives.",
    image: properties[0].images[0],
  },
  {
    slug: "a-disciplined-approach-to-acquisition",
    title: "A Disciplined Approach to Acquisition",
    description: "Questions to consider before committing capital to a property opportunity.",
    image: properties[1].images[0],
  },
];

const faqs = [
  ["What if I am not ready to buy immediately?", "We can begin by understanding your objectives and timeline, then help you develop a clearer acquisition strategy before you enter the market."],
  ["How does Arkstone assess properties?", "We consider ownership, title and documentation, valuation, location, market position, demand, property particulars, and transaction considerations. Relevant professional reviews are coordinated where required."],
  ["Does Arkstone guarantee that a property is risk-free?", "No. Real estate involves legal, financial, market, and property-specific risks. We help identify and mitigate avoidable risks through disciplined assessment and appropriate professional review."],
  ["Can Arkstone help with negotiation?", "Yes. We help clients evaluate commercial terms and approach negotiations with clearer objectives, market context, and a better understanding of the opportunity."],
  ["Does Arkstone develop properties?", "Arkstone focuses on real estate advisory and acquisition. We do not present ourselves as a property developer."],
  ["Can Arkstone represent properties developed by other parties?", "We may advise on or represent relevant third-party opportunities where they meet our assessment standards and fit a clear client mandate."],
  ["What is the Arkstone Insider Circle?", "It is a private client relationship for selected opportunities, market intelligence, briefings, and ongoing guidance. Access is discussed directly with our advisory team."],
  ["How can I gain access to the Insider Circle?", "Start with a conversation about your objectives. Our team will discuss whether the Insider Circle is appropriate for your needs."],
  ["Does Arkstone work with corporate clients?", "Yes. We support businesses and institutions considering strategic property acquisition and other corporate real estate requirements."],
];

const openReportRequest = () => window.dispatchEvent(new Event("arkstone:open-report"));

export default function Home() {
  const [openQ, setOpenQ] = useState<number | null>(0);

  return (
    <>
      <section className="relative flex min-h-[82vh] items-center overflow-hidden bg-ink pt-20">
        <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/Lagos_skyline.jpg/1920px-Lagos_skyline.jpg" alt="Victoria Island skyline in Lagos" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-ink/80 to-ink/20" />
        <a href="https://commons.wikimedia.org/wiki/File:Lagos_skyline.jpg" target="_blank" rel="noreferrer" className="absolute bottom-3 right-4 z-10 text-[10px] text-white/70 hover:text-white">Photo: Clara Sanchiz · CC BY-SA 2.0</a>
        <div className="container-x relative py-20">
          <motion.div initial={{ opacity: 0, y: 32, x: -20 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }} className="max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-gold-light">Better decisions. Greater confidence.</p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] text-white md:text-7xl lg:text-8xl">Prime Real Estate, <span className="text-gold-light">Navigated with Clarity.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/80">Arkstone is a real estate advisory and acquisition firm helping homebuyers, investors, families, and corporate institutions make better property decisions across Nigeria’s prime markets.</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link className="btn-gold" to="/contact">Request Advisory <ArrowRight size={16} /></Link>
              <Link className="btn-outline border-white/50 bg-white/5 text-white hover:border-gold hover:bg-white/10" to="/assets">Explore Portfolio</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-24">
        <div className="container-x">
          <SectionHead title="More Than Property Listings. A Better Way to Buy." sub="High-value real estate requires more than market access. It demands foresight, sound judgment, thorough assessment, and precise execution." />
          <p className="mx-auto -mt-5 mb-12 max-w-3xl text-center text-lg leading-relaxed text-neutral-600">The property market can present hundreds of options. Our role is to determine which ones deserve your attention—and which ones don’t.</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.06} className="group border border-ink bg-ink p-6 text-white shadow-[0_12px_30px_rgba(16,36,58,0.04)] transition-colors duration-200 hover:border-gold hover:bg-ivory active:border-gold active:bg-ivory md:p-7">
                <span className="flex h-12 w-12 items-center justify-center border border-white/20 bg-white/10 text-gold-light transition-colors duration-200 group-hover:border-gold/40 group-hover:bg-gold-pale group-hover:text-ink group-active:border-gold/40 group-active:bg-gold-pale group-active:text-ink"><Icon size={22} strokeWidth={1.5} /></span>
                <h3 className="mt-5 text-xl font-semibold transition-colors duration-200 group-hover:text-ink group-active:text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/75 transition-colors duration-200 group-hover:text-neutral-600 group-active:text-neutral-600">{text}</p>
              </Reveal>
            ))}
            <Reveal className="flex flex-col justify-between bg-ink p-7 text-white">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light">Our approach</p>
                <p className="mt-4 font-serif text-2xl leading-snug">Information, perspective, and professional support from opportunity to acquisition.</p>
              </div>
              <Link to="/services" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold-light hover:text-white">Explore our services <ArrowRight size={16} /></Link>
            </Reveal>
          </div>
        </div>
        <div className="container-x mt-20 border-t border-ink/10 pt-16">
          <SectionHead title="A Beautiful Property Can Still Be the Wrong Decision." sub="We look beyond presentation. Depending on the mandate, our assessment considers:" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {assessment.map((item, i) => (
              <Reveal key={item} delay={i * 0.04} className="group flex items-start gap-4 border border-ink bg-ink p-5 text-white transition-colors duration-200 hover:border-gold hover:bg-ivory active:border-gold active:bg-ivory md:p-6">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-white/10 text-xs font-semibold text-gold-light transition-colors duration-200 group-hover:bg-gold-pale group-hover:text-ink group-active:bg-gold-pale group-active:text-ink">0{i + 1}</span>
                <p className="pt-1 text-base font-medium leading-6 text-white/85 transition-colors duration-200 group-hover:text-ink group-active:text-ink">{item}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 border-l-2 border-gold bg-gold-pale/60 p-6 md:p-8">
            <p className="text-lg leading-relaxed text-neutral-700">Our objective is not simply to find a property. It is to help determine whether the property deserves the client’s capital.</p>
            <Link to="/operating-principles" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-gold">Explore our operating principles <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-24">
        <div className="container-x">
          <SectionHead title="Who We Serve" sub="Living & Heritage. Building Value Beyond the Transaction. Asset Precision." />
          <div className="grid gap-5 md:grid-cols-3">
            {audiences.map(([title, text], i) => (
              <Reveal key={title} delay={i * 0.06} className="border border-ink/10 bg-white p-6 md:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">{title}</p>
                <p className="mt-4 leading-7 text-neutral-600">{text}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-14">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {journey.map(([title, text], i) => (
                <Reveal key={title} delay={i * 0.04} className="border border-ink/10 bg-white p-5">
                  <p className="text-xs font-bold tracking-[0.16em] text-gold">0{i + 1} / ARKSTONE</p>
                  <h4 className="mt-3 text-lg font-semibold">{title}</h4>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">{text}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <p className="mt-7 text-center text-sm leading-6 text-neutral-600">A successful acquisition can be the beginning of a longer-term relationship.</p>
          <div className="mt-4 text-center"><Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-gold">See the full advisory process <ArrowRight size={15} /></Link></div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white md:py-24">
        <div className="container-x">
          <Reveal className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-4xl font-semibold leading-tight text-white md:text-6xl">Perspectives for Better Real Estate Decisions.</h2>
            <div className="mx-auto mt-5 h-px w-16 bg-gold" />
            <p className="mt-5 text-lg leading-relaxed text-white/70">Market intelligence, acquisition perspectives, and considered views on Nigeria’s prime real estate market.</p>
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="border border-gold/30 bg-white/5 p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light">Flagship publication</p>
              <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight md:text-4xl">The Prime Real Estate Market Report & Acquisition Guide</h3>
              <p className="mt-4 text-lg font-medium text-gold-light">Understand the Market Before You Commit Capital.</p>
              <p className="mt-4 leading-7 text-white/70">A practical guide for private investors, homebuyers, families, and corporate decision-makers considering Nigeria’s prime markets, including Ikoyi, Victoria Island, Lekki, and other relevant locations.</p>
              <p className="mt-3 text-sm leading-6 text-white/60">Explore property values, acquisition considerations, documentation, market positioning, capital preservation, and strategy.</p>
              <button onClick={openReportRequest} className="btn-gold mt-7">Download Private Report <ArrowRight size={16} /></button>
              <p className="mt-4 text-xs leading-5 text-white/55">Your information will be treated confidentially and will not be shared without your consent.</p>
            </div>
            <div className="grid gap-4">
              {insights.map((article) => (
                <Link key={article.slug} to={`/insights/${article.slug}`} className="group grid grid-cols-[112px_1fr] gap-4 border border-white/10 bg-white/5 p-3 transition hover:border-gold/50 sm:grid-cols-[140px_1fr] sm:gap-5 sm:p-4">
                  <img src={article.image} alt="" loading="lazy" className="h-full min-h-28 w-full object-cover" />
                  <span className="self-center">
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold-light">Arkstone Insights</span>
                    <span className="mt-2 block text-lg font-semibold leading-snug text-white group-hover:text-gold-light">{article.title}</span>
                    <span className="mt-2 block text-sm leading-6 text-white/65">{article.description}</span>
                  </span>
                </Link>
              ))}
              <Link to="/insights" className="inline-flex items-center gap-2 px-1 py-2 font-semibold text-gold-light hover:text-white">Explore All Insights <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="scroll-mt-20 bg-ivory py-20 md:py-24">
        <div className="container-x">
          <SectionHead title="Curated Residential & Commercial Real Estate." sub="Explore a selected range of residential, commercial, land, and other relevant opportunities across Nigeria’s prime markets." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {properties.slice(0, 3).map((property) => <PropertyCard key={property.id} p={property} cta="Request Property Briefing" />)}
          </div>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/contact" className="btn-gold">Request Property Briefing <ArrowRight size={16} /></Link>
            <Link to="/assets" className="btn-outline">View Full Portfolio <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-x max-w-3xl">
          <SectionHead title="Frequently Asked Questions" />
          <div className="divide-y divide-neutral-200 border-y border-neutral-200">
            {faqs.map(([question, answer], i) => (
              <div key={question}>
                <button onClick={() => setOpenQ(openQ === i ? null : i)} aria-expanded={openQ === i} className="flex w-full items-center justify-between gap-6 py-5 text-left text-base font-semibold md:text-lg">
                  {question}{openQ === i ? <Minus className="shrink-0 text-gold" /> : <Plus className="shrink-0 text-gold" />}
                </button>
                <AnimatePresence initial={false}>
                  {openQ === i && (
                    <motion.div initial={{ height: 0, opacity: 0, y: -10 }} animate={{ height: "auto", opacity: 1, y: 0 }} exit={{ height: 0, opacity: 0, y: -10 }} transition={{ duration: 0.35 }} className="overflow-hidden">
                      <p className="pb-6 leading-relaxed text-neutral-600">{answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
        <div id="brief" className="mt-16 border-t border-gold/40 bg-gold-pale/60 py-16 md:py-20">
        <div className="container-x max-w-3xl">
          <SectionHead title="Begin a Private Conversation." sub="Whether you are considering a landmark residence, evaluating an investment, building a portfolio, or addressing a corporate real estate requirement, share your objectives and our team will help determine the appropriate next steps." />
          <Reveal className="border border-gold/50 bg-white p-6 shadow-sm md:p-10"><BriefForm /></Reveal>
        </div>
        </div>
      </section>
    </>
  );
}
