const contactDetails = [
  { label: "Address", value: "Admiralty way, Lekki Phase One" },
  { label: "Email", value: "Info@arkstonerealestate.ng" },
  { label: "Phone / WhatsApp", value: "09165225000" },
];

const collectionRows = [
  ["Contact details", "Name, email address, phone or WhatsApp number", "Website forms, report downloads, calls, messages"],
  ["Property interests", "Area of interest, budget, timeline, target location, requirements", "Website forms and advisory conversations"],
  ["Transaction information", "Identity documents, proof of funds, payment details, signed agreements", "Only when you proceed with a transaction"],
  ["Communications", "Messages, emails, call notes and meeting notes", "When you contact us or we advise you"],
  ["Website usage", "Pages visited, device and browser type, approximate location, and cookies", "Automatically, when you use our website (see section 10)"],
  ["Career applications", "CV, introduction and contact details", "When you express interest in working with us"],
];

const lawfulBasisRows = [
  ["To respond to your enquiries and requests for advisory", "Your consent, or steps you ask us to take before entering a contract"],
  ["To send you the Lagos Prime Real Estate Market Report and related information you request", "Your consent"],
  ["To provide advisory, acquisition and negotiation services", "Performance of our agreement with you"],
  ["To carry out title, ownership and documentation checks", "Performance of our agreement with you, and our legitimate interest in preventing fraud"],
  ["To keep records of transactions and meet legal, tax and regulatory requirements", "Legal obligation"],
  ["To send updates about selected opportunities, insights and events", "Your consent, which you can withdraw at any time"],
  ["To improve our website and services", "Our legitimate interest in running and improving our business"],
  ["To consider career applications", "Your consent, and steps you ask us to take before employment or engagement"],
];

const retentionRows = [
  ["Enquiries and report downloads that do not lead to a transaction", "Up to [2] years after our last contact, unless you ask us to delete it sooner"],
  ["Client and transaction records", "Up to [6] years after the transaction, to meet legal and tax requirements"],
  ["Career applications", "Up to [12] months, unless you join our team"],
];

function PolicyTable({ headers, rows }: { headers: [string, string, string?]; rows: string[][] }) {
  return (
    <div className="mt-6 overflow-x-auto border border-ink/10">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead className="bg-ink text-white">
          <tr>{headers.filter((header): header is string => Boolean(header)).map((header) => <th key={header} className="px-4 py-3 font-semibold">{header}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-t border-ink/10 even:bg-ivory/70">
              {row.map((cell, index) => <td key={index} className="px-4 py-3 align-top leading-6 text-neutral-600">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PolicySection({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-ink/10 py-8 last:border-0">
      <h2 className="font-serif text-2xl font-semibold text-ink md:text-3xl">{number}. {title}</h2>
      <div className="mt-4 space-y-4 leading-7 text-neutral-600">{children}</div>
    </section>
  );
}

export default function PrivacyPolicy() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep pb-16 pt-32 text-white md:pb-20 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-light/50 via-transparent to-transparent" />
        <div className="container-x relative max-w-4xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-gold-light">Your information. Our responsibility.</p>
          <h1 className="text-5xl font-semibold leading-tight md:text-7xl">Arkstone Privacy Policy</h1>
          <p className="mt-5 text-sm text-white/60"><strong className="text-white/80">Last updated:</strong> 21st October, 2026</p>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container-x mx-auto max-w-4xl border border-ink/10 bg-white px-6 py-2 shadow-[0_18px_50px_rgba(16,36,58,0.06)] md:px-10">
          <PolicySection number={1} title="About this policy">
            <p>Arkstone Real Estate (&quot;Arkstone&quot;, &quot;we&quot;, &quot;us&quot;) respects your privacy. This policy explains what personal information we collect, why we collect it, how we protect it and the choices you have. It applies to our website, our forms, our social media pages and our advisory services.</p>
            <p>We process personal information in line with the <strong>Nigeria Data Protection Act 2023</strong> and the guidance of the <strong>Nigeria Data Protection Commission (NDPC)</strong>.</p>
          </PolicySection>
          <PolicySection number={2} title="Who we are">
            <p>Arkstone Real Estate is a real estate advisory and acquisition firm, registered with the Corporate Affairs Commission (RC 8910636).</p>
            <ul className="space-y-2">{contactDetails.map(({ label, value }) => <li key={label}><strong className="text-ink">{label}:</strong> {value}</li>)}</ul>
            <p>We are the &quot;data controller&quot; for the personal information described in this policy.</p>
          </PolicySection>
          <PolicySection number={3} title="The information we collect">
            <PolicyTable headers={["Type", "Examples", "How we receive it"]} rows={collectionRows} />
            <p>We collect only what we need. Please do not send us identity or financial documents unless we ask for them as part of a transaction.</p>
          </PolicySection>
          <PolicySection number={4} title="Why we use your information, and our lawful basis">
            <PolicyTable headers={["Purpose", "Lawful basis"]} rows={lawfulBasisRows} />
            <p>We do not make decisions about you based solely on automated processing.</p>
          </PolicySection>
          <PolicySection number={5} title="Who we share your information with">
            <p>We <strong className="text-ink">never sell</strong> your personal information. We share it only where needed, and only with:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong className="text-ink">Arkstone team members</strong> who need it to serve you, including our legal and title due diligence advisor.</li>
              <li><strong className="text-ink">Professionals involved in your transaction</strong>, such as lawyers, surveyors, valuers and, where you are buying, the property owner or developer, and only with your knowledge.</li>
              <li><strong className="text-ink">Service providers</strong> who help us run our business, such as our customer relationship management (CRM) system, email, website hosting and secure file storage. They may use your information only to provide their service to us.</li>
              <li><strong className="text-ink">Authorities</strong>, where the law requires us to.</li>
            </ul>
          </PolicySection>
          <PolicySection number={6} title="International transfers">
            <p>Some of our service providers, such as our CRM and email systems, may store information on servers outside Nigeria. Where this happens, we take steps to ensure your information is protected to the standard required by Nigerian law, for example by using providers that offer appropriate contractual safeguards.</p>
          </PolicySection>
          <PolicySection number={7} title="How long we keep your information">
            <PolicyTable headers={["Information", "How long", undefined]} rows={retentionRows} />
            <p>When we no longer need your information, we delete it or make it anonymous.</p>
          </PolicySection>
          <PolicySection number={8} title="How we protect your information">
            <ul className="list-disc space-y-2 pl-6">
              <li>We store identity and financial documents securely, with access limited to named team members.</li>
              <li>We use password-protected systems, and access is removed when someone leaves our team.</li>
              <li>We ask the professionals and service providers we work with to keep your information confidential.</li>
            </ul>
            <p>If a data breach is likely to put your rights at high risk, we will notify the NDPC within 72 hours and inform you promptly, with guidance on what to do.</p>
          </PolicySection>
          <PolicySection number={9} title="Your rights">
            <p>Under the Nigeria Data Protection Act 2023, you have the right to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong className="text-ink">Be informed</strong> about how we use your information (this policy).</li>
              <li><strong className="text-ink">Access</strong> the information we hold about you and receive a copy.</li>
              <li><strong className="text-ink">Correct</strong> information that is inaccurate or out of date.</li>
              <li><strong className="text-ink">Ask us to delete</strong> your information where we no longer need it or have no lawful basis to keep it.</li>
              <li><strong className="text-ink">Restrict</strong> how we use your information in certain situations.</li>
              <li><strong className="text-ink">Object</strong> to our use of your information, including for marketing.</li>
              <li><strong className="text-ink">Withdraw your consent</strong> at any time, without affecting anything we did before you withdrew it.</li>
              <li><strong className="text-ink">Data portability</strong>, as provided for by the NDPC.</li>
              <li><strong className="text-ink">Complain to the Nigeria Data Protection Commission</strong> if you believe your information has been mishandled.</li>
            </ul>
            <p>To use any of these rights, contact us using the details in section 12. We will respond within [30] days.</p>
          </PolicySection>
          <PolicySection number={10} title="Cookies and website tracking">
            <p>Our website uses cookies and similar tools to keep the site working, understand how visitors use it, and, where you agree, to measure and improve our marketing. These include tools from our CRM provider, which may link form submissions to website visits.</p>
            <p>Essential cookies are always on, because the website needs them to work. All other cookies are used only <strong className="text-ink">with your consent</strong>, which you can give, refuse or change at any time through the cookie banner or settings on our website.</p>
          </PolicySection>
          <PolicySection number={11} title="Marketing messages">
            <p>We will send you updates about selected opportunities, market insights and events only if you have agreed to receive them. You can opt out at any time by using the unsubscribe link in any email, replying &quot;STOP&quot; to a message, or contacting us.</p>
          </PolicySection>
          <PolicySection number={12} title="Contact us">
            <p>For any question about this policy or your information:</p>
            <ul className="space-y-2">
              <li><strong className="text-ink">Email:</strong> <a className="text-ink underline decoration-gold underline-offset-4 hover:text-gold" href="mailto:info@arkstonerealestate.ng">info@arkstonerealestate.ng</a></li>
              <li><strong className="text-ink">Phone / WhatsApp:</strong> 09165225000</li>
              <li><strong className="text-ink">Address:</strong> Admiralty way, Lekki Phase One</li>
            </ul>
          </PolicySection>
          <PolicySection number={13} title="Changes to this policy">
            <p>We may update this policy from time to time. The latest version will always be on our website, with the date it was last updated. Where changes are significant, we will let you know.</p>
          </PolicySection>
        </div>
      </section>
    </>
  );
}
