import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, FileText } from "lucide-react";
import { properties } from "../data";
import { Reveal, SectionHead } from "../components/ui";

const articles = [
  {
    slug: "understanding-prime-lagos-locations",
    title: "Understanding Prime Lagos Locations",
    description: "A practical framework for comparing property submarkets against your objectives.",
    image: properties[0].images[0],
    sections: [
      ["Start with your intended use", "A location should be considered in relation to what the property needs to do for you. A homebuyer may prioritise daily convenience and long-term suitability; an investor may also consider tenant demand, holding horizon, and liquidity."],
      ["Look beyond the address", "Consider accessibility, surrounding development, infrastructure, the character of the immediate area, and how those factors relate to your plans. A well-known neighbourhood name alone does not establish that a specific property is right for you."],
      ["Compare like with like", "Property type, condition, size, title and documentation, amenities, and transaction terms all shape comparisons. Reviewing relevant comparable properties can provide context for an asking price without guaranteeing future value."],
      ["Bring the location back to your brief", "The right location is the one that aligns with your needs and the wider assessment of the property. Market context is one part of a disciplined decision—not a substitute for professional due diligence."],
    ],
  },
  {
    slug: "a-disciplined-approach-to-acquisition",
    title: "A Disciplined Approach to Acquisition",
    description: "Questions to consider before committing capital to a property opportunity.",
    image: properties[1].images[0],
    sections: [
      ["Clarify the objective", "Be clear about why you are considering the acquisition, how you intend to use the property, your priorities, timeline, and financial parameters."],
      ["Understand the evidence", "Consider available information on the property, ownership, title and supporting documentation, valuation, and market position. Identify what remains unknown and which matters need an independent professional review."],
      ["Assess the full opportunity", "Look at the location, entry price, demand, liquidity, property particulars, transaction terms, and long-term suitability together. A compelling feature should not distract from material questions elsewhere."],
      ["Decide at your pace", "A sound process leaves room to ask questions, compare relevant alternatives, and negotiate based on a clear brief. Real estate decisions involve risk; careful assessment helps you make them with better context."],
    ],
  },
];

const openReportRequest = () => window.dispatchEvent(new Event("arkstone:open-report"));

export default function Insights() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);

  if (slug && article) {
    return (
      <>
        <section className="relative overflow-hidden bg-navy-deep pb-16 pt-32 text-white md:pb-20 md:pt-40">
          <div className="container-x relative max-w-4xl">
            <Link to="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-gold-light hover:text-white"><ArrowLeft size={15} /> All Insights</Link>
            <p className="mb-4 mt-8 text-xs font-bold uppercase tracking-[0.24em] text-gold-light">Arkstone Insights · Market Perspective</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">{article.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">{article.description}</p>
          </div>
        </section>
        <article className="container-x max-w-3xl py-14 md:py-20">
          <img src={article.image} alt="" className="mb-10 aspect-[16/8] w-full object-cover" />
          <p className="mb-10 border-l-2 border-gold bg-ivory p-5 text-base leading-7 text-neutral-700">Every property decision is different. Use these considerations as a starting point for a conversation with the relevant real estate, legal, and financial professionals.</p>
          <div className="space-y-9">
            {article.sections.map(([heading, text]) => (
              <section key={heading}>
                <h2 className="font-serif text-2xl font-semibold md:text-3xl">{heading}</h2>
                <p className="mt-3 text-base leading-8 text-neutral-600">{text}</p>
              </section>
            ))}
          </div>
          <div className="mt-12 border border-gold/30 bg-ink p-6 text-white md:p-8">
            <h2 className="font-serif text-2xl font-semibold">Considering a property opportunity?</h2>
            <p className="mt-3 leading-7 text-white/65">Share your objectives with the Arkstone advisory team.</p>
            <Link to="/contact" className="btn-gold mt-5">Request Advisory <ArrowRight size={16} /></Link>
          </div>
        </article>
      </>
    );
  }

  if (slug) {
    return (
      <section className="container-x min-h-[60vh] py-40 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Arkstone Insights</p>
        <h1 className="mt-4 font-serif text-4xl font-semibold">This insight is not available.</h1>
        <Link to="/insights" className="btn-outline mt-7">Back to Insights</Link>
      </section>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep pb-20 pt-32 text-white md:pb-28 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-light/50 via-transparent to-transparent" />
        <div className="container-x relative max-w-5xl">
          <Reveal>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-gold-light">Research · Perspective · Guidance</p>
            <h1 className="text-5xl font-semibold leading-[1.02] md:text-7xl">Arkstone <span className="text-gold-light">Insights.</span></h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">Research and perspectives to help you navigate the Lagos real estate market with greater clarity.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x">
          <article className="grid overflow-hidden border border-gold/30 bg-ink text-white lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex min-h-72 items-center justify-center bg-gradient-to-br from-navy-light via-ink to-navy-deep p-8">
              <div className="max-w-xs border border-gold/40 bg-ivory/5 p-7 text-center shadow-2xl">
                <FileText className="mx-auto text-gold-light" size={38} strokeWidth={1.2} />
                <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-gold-light">Arkstone Research</p>
                <p className="mt-3 font-serif text-2xl leading-tight">Prime Real Estate Market Report & Acquisition Guide</p>
              </div>
            </div>
            <div className="p-7 md:p-10 lg:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light">Flagship publication</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight md:text-4xl">The Prime Real Estate Market Report & Acquisition Guide</h2>
              <p className="mt-4 text-lg font-medium text-gold-light">Understand the Market Before You Commit Capital.</p>
              <p className="mt-4 leading-7 text-white/70">A practical guide for private investors, homebuyers, families, and corporate decision-makers considering Nigeria’s prime markets, including Ikoyi, Victoria Island, Lekki, and other relevant locations.</p>
              <p className="mt-3 text-sm leading-6 text-white/60">Explore property values, acquisition considerations, documentation, market positioning, capital preservation, investment considerations, and acquisition strategy.</p>
              <button onClick={openReportRequest} className="btn-gold mt-7">Download Private Report <ArrowRight size={16} /></button>
              <p className="mt-4 text-xs leading-5 text-white/55">Your information will be treated confidentially and will not be shared without your consent.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-ivory py-16 md:py-24">
        <div className="container-x">
          <SectionHead title="Perspectives for Better Real Estate Decisions." sub="A considered starting point for understanding markets, opportunities, and acquisition decisions." />
          <div className="grid gap-6 md:grid-cols-2">
            {articles.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.06} className="overflow-hidden border border-ink/10 bg-white shadow-[0_12px_30px_rgba(16,36,58,0.05)]">
                <img src={item.image} alt="" loading="lazy" className="aspect-[16/8] w-full object-cover" />
                <div className="p-6 md:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Market Perspective</p>
                  <h2 className="mt-3 text-2xl font-semibold">{item.title}</h2>
                  <p className="mt-3 leading-7 text-neutral-600">{item.description}</p>
                  <Link to={`/insights/${item.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-gold">Read insight <ArrowRight size={15} /></Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-x text-center">
          <BookOpen className="mx-auto text-gold" size={30} />
          <h2 className="mt-4 font-serif text-3xl font-semibold md:text-4xl">Make your next property decision with more context.</h2>
          <Link to="/contact" className="btn-ink mt-7">Speak with an Advisor <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}
