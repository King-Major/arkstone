import { useState, type FormEvent, type ReactNode } from "react";
import { useSearchParams } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { submitLead } from "../lib";

type FormKind =
  | "inspection-schedule"
  | "homebuyer-preference"
  | "investor-preference"
  | "commercial-preference"
  | "post-viewing-feedback";

const Field = ({ label, children, className = "" }: { label: string; children: ReactNode; className?: string }) => (
  <label className={`block text-left text-sm font-medium text-ink ${className}`}>
    {label}
    <div className="mt-1.5">{children}</div>
  </label>
);

const Options = ({ label, name, values, type = "checkbox", required = false }: {
  label: string;
  name: string;
  values: string[];
  type?: "checkbox" | "radio";
  required?: boolean;
}) => (
  <fieldset>
    <legend className="text-sm font-medium text-ink">{label}{required && <span aria-hidden="true"> *</span>}</legend>
    <div className="mt-2 grid gap-2 sm:grid-cols-2">
      {values.map((value, index) => (
        <label key={value} className="flex items-start gap-2 border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-700">
          <input
            className="mt-0.5 accent-gold"
            type={type}
            name={name}
            value={value}
            required={required && type === "radio" && index === 0}
          />
          <span>{value}</span>
        </label>
      ))}
    </div>
  </fieldset>
);

const selectOptions = (placeholder: string, values: string[]) => (
  <>
    <option value="" disabled>{placeholder}</option>
    {values.map((value) => <option key={value}>{value}</option>)}
  </>
);

function toMessage(form: HTMLFormElement) {
  const grouped = new Map<string, string[]>();
  new FormData(form).forEach((value, key) => {
    if (["name", "email", "phone"].includes(key)) return;
    const entries = grouped.get(key) ?? [];
    entries.push(String(value));
    grouped.set(key, entries);
  });
  return Array.from(grouped, ([key, values]) => {
    const label = key.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^./, (letter) => letter.toUpperCase());
    return `${label}: ${values.join(", ")}`;
  }).join("\n");
}

function FormShell({ kind, title, description, submitLabel, successMessage, children }: {
  kind: FormKind;
  title: string;
  description: string;
  submitLabel: string;
  successMessage: string;
  children: ReactNode;
}) {
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    setSending(true);
    setError("");
    try {
      await submitLead(kind, {
        name: String(fields.get("name") ?? ""),
        email: String(fields.get("email") ?? ""),
        phone: String(fields.get("phone") ?? ""),
        message: toMessage(form),
      });
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "We couldn't send your request. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep pb-10 pt-28 text-white md:pb-12 md:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-light/50 via-transparent to-transparent" />
        <div className="container-x relative">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-gold-light">Who We Serve</p>
          <h1 className="max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">{description}</p>
        </div>
      </section>
      <section className="py-8 md:py-12">
        <div className="container-x">
          <div className="mx-auto max-w-5xl border border-ink/10 bg-white p-5 shadow-[0_18px_50px_rgba(16,36,58,0.08)] md:p-9">
            {done ? (
              <div role="status" className="flex flex-col items-center gap-3 py-10 text-center">
                <CheckCircle2 className="text-gold" size={44} />
                <p className="max-w-xl text-neutral-700">{successMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
                {children}
                <p className="text-xs leading-5 text-neutral-500 md:col-span-2">
                  <strong>Privacy statement:</strong> Strictly confidential. Arkstone respects your privacy and will never share your contact details without your consent.
                </p>
                {error && <p role="alert" className="text-sm text-red-700 md:col-span-2">{error}</p>}
                <button disabled={sending} className="btn-gold w-full disabled:cursor-not-allowed disabled:opacity-60 md:col-span-2">
                  {sending ? "Sending…" : submitLabel}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function IdentityFields({ phoneCountryCode = false }: { phoneCountryCode?: boolean }) {
  return (
    <>
      <Field label="Full Name">
        <input required name="name" autoComplete="name" className="input" />
      </Field>
      <Field label="Email Address">
        <input required name="email" type="email" autoComplete="email" className="input" />
      </Field>
      <Field label="Phone / WhatsApp Number">
        <input required name="phone" type="tel" autoComplete="tel" placeholder={phoneCountryCode ? "+234 800 000 0000" : "Include your country code"} className="input" />
      </Field>
    </>
  );
}

export function InspectionSchedulePage() {
  const today = new Date();
  const minDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  return (
    <FormShell
      kind="inspection-schedule"
      title="Schedule a Property Inspection"
      description="Tell us when and how you would like to view a property. An Arkstone agent will confirm the appointment."
      submitLabel="Schedule Inspection"
      successMessage="Thank you! Your inspection request has been received. An Arkstone agent will confirm your appointment shortly."
    >
      <IdentityFields phoneCountryCode />
      <Field label="Property Name / ID">
        <input required name="propertyNameId" className="input" placeholder="Enter the property name or ID" />
      </Field>
      <Field label="Preferred Viewing Date">
        <input required name="viewingDate" type="date" min={minDate} className="input" />
      </Field>
      <Field label="Preferred Time Slot">
        <select required name="timeSlot" defaultValue="" className="input">
          {selectOptions("Select a time", ["Morning (9:00 AM – 12:00 PM)", "Afternoon (12:00 PM – 3:00 PM)", "Evening (3:00 PM – 6:00 PM)"])}
        </select>
      </Field>
      <Options label="Inspection Type" name="inspectionType" type="radio" required values={["Physical Viewing", "Virtual Tour (Video Call)"]} />
      <Options label="Who are you inspecting for?" name="inspectionFor" type="radio" required values={["Myself", "Representing a Buyer / Investor"]} />
      <Field label="Purchase Timeline">
        <select required name="purchaseTimeline" defaultValue="" className="input">
          {selectOptions("Select a timeline", ["Immediately", "Within 1 Month", "1–3 Months", "Just Browsing"])}
        </select>
      </Field>
    </FormShell>
  );
}

export function HomebuyerPreferencePage() {
  return (
    <FormShell
      kind="homebuyer-preference"
      title="Find a Home That Fits Your Life"
      description="Share your home, lifestyle, and location preferences and we’ll curate a list of matching properties."
      submitLabel="Find My Dream Home"
      successMessage="Thank you! We have logged your preferences and will share a curated list of matching homes shortly."
    >
      <IdentityFields />
      <Options label="Preferred Contact Method" name="contactMethod" type="radio" values={["WhatsApp", "Phone Call", "Email"]} />
      <Options label="Preferred Location(s)" name="preferredLocations" values={["Ikoyi", "Victoria Island", "Lekki Phase 1", "Chevron / Orchid", "Banana Island", "Ikeja GRA", "Other"]} />
      <Options label="Property Type" name="propertyType" values={["Studio / 1-Bed", "2–3 Bed Apartment", "Terrace / Townhouse", "Semi-Detached", "Fully Detached"]} />
      <Field label="Number of Bedrooms">
        <select name="bedrooms" defaultValue="" className="input">{selectOptions("Select bedrooms", ["1", "2", "3", "4", "5+"])}</select>
      </Field>
      <Field label="Budget Range">
        <select name="budgetRange" defaultValue="" className="input">{selectOptions("Select a budget", ["Below ₦100M", "₦100M–₦250M", "₦250M–₦500M", "₦500M–₦1B", "₦1B+"])}</select>
      </Field>
      <Options label="Property Condition" name="propertyCondition" type="radio" values={["Brand New", "Off-Plan", "Renovated / Existing"]} />
      <Options label="Who will be living here?" name="residents" values={["Single / Young Professional", "Couple", "Family with Children", "Extended Family"]} />
      <Options label="Work & Daily Routines" name="routines" values={["Work from Home (Need Office Space)", "Frequent Travel (Need Security)", "Hosting & Entertaining Focus"]} />
      <Options label="Family & Pet Lifestyle" name="familyLifestyle" values={["Kid-Friendly / Safe Play Areas", "Pet-Friendly", "Close to Top Schools"]} />
      <Options label="Must-Have Amenities" name="amenities" values={["Swimming Pool", "Gym", "Elevator", "Solar / Backup Power", "Boys' Quarters (BQ)", "Balcony / Water View", "Gated Estate Security"]} />
      <Options label="Purchase Timeline & Funding" name="timelineFunding" type="radio" values={["Immediate", "1–3 Months", "3–6 Months", "Outright Cash", "Flexible Payment Plan", "Mortgage"]} />
    </FormShell>
  );
}

export function InvestorPreferencePage() {
  return (
    <FormShell
      kind="investor-preference"
      title="Build Your Real Estate Portfolio"
      description="Tell our investment team about your objectives, asset preferences, and capital allocation."
      submitLabel="Get High-Yield Portfolio"
      successMessage="Thank you! Our investment team will send you top-performing off-plan and high-yield opportunities shortly."
    >
      <IdentityFields />
      <Options label="Preferred Contact Method" name="contactMethod" type="radio" values={["WhatsApp", "Phone Call", "Email"]} />
      <Options label="Primary Investment Goal" name="investmentGoal" type="radio" values={["Shortlet / AirBnB Rental Yield", "Off-Plan Capital Appreciation", "Land Banking", "Property Flipping"]} />
      <Options label="Target Asset Class" name="assetClass" values={["Off-Plan Apartments", "Completed Luxury Units", "Commercial Spaces", "Land"]} />
      <Options label="Target Location Focus" name="locationFocus" values={["Island — Ikoyi/VI/Lekki", "Mainland — Ikeja/Yaba", "Emerging Corridors — Ibeju-Lekki/Epe"]} />
      <Field label="Capital Allocation / Budget">
        <select name="capitalBudget" defaultValue="" className="input">{selectOptions("Select a budget", ["₦50M–₦150M", "₦150M–₦300M", "₦300M–₦700M", "₦700M+"])}</select>
      </Field>
      <Options label="Payment Preference" name="paymentPreference" type="radio" values={["Outright Cash (Discounted)", "Flexible Installment Plan (e.g., 6–12 months)"]} />
      <Field label="Target ROI / Yield Expectation">
        <input name="roiExpectation" className="input" placeholder="Optional" />
      </Field>
    </FormShell>
  );
}

export function CommercialPreferencePage() {
  return (
    <FormShell
      kind="commercial-preference"
      title="Tell Us Your Commercial Property Requirements"
      description="Share your operational requirements and our commercial real estate desk will help identify suitable space."
      submitLabel="Find Commercial Properties"
      successMessage="Thank you! Our commercial real estate desk will review your space requirement and contact you immediately."
    >
      <IdentityFields />
      <Options label="Preferred Contact Method" name="contactMethod" type="radio" values={["WhatsApp", "Phone Call", "Email"]} />
      <Field label="Requirement Type">
        <select name="requirementType" defaultValue="" className="input">{selectOptions("Select a requirement", ["Office Space", "Retail / Storefront / Showroom", "Warehouse / Industrial", "Commercial Land"])}</select>
      </Field>
      <Options label="Transaction Focus" name="transactionFocus" type="radio" values={["Lease / Rent", "Outright Purchase"]} />
      <Field label="Floor Area Needed (Sqm)">
        <input name="floorArea" className="input" placeholder="e.g., 200 sqm" />
      </Field>
      <Field label="Preferred Commercial Location(s)">
        <input name="commercialLocations" className="input" />
      </Field>
      <Options label="Key Commercial Facilities Needed" name="facilities" values={["Dedicated Parking", "High KVA Generator / Heavy Power", "Fiber Internet", "Shell & Core", "Fully Fitted"]} />
      <Field label="Target Possession Date & Budget">
        <input name="possessionDateBudget" className="input" placeholder="Date and budget" />
      </Field>
    </FormShell>
  );
}

export function PostViewingFeedbackPage() {
  const [searchParams] = useSearchParams();
  const propertyFromUrl = searchParams.get("property") ?? searchParams.get("propertyViewed") ?? "";
  const [intent, setIntent] = useState("");
  const today = new Date();
  const maxDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  return (
    <FormShell
      kind="post-viewing-feedback"
      title="Tell Us About Your Viewing"
      description="Your feedback helps us understand your interest and recommend the right next step."
      submitLabel="Submit Feedback"
      successMessage="Thank you for your feedback! Our team will review your responses and contact you immediately."
    >
      <Field label="Full Name">
        <input required name="name" autoComplete="name" className="input" />
      </Field>
      <Field label="Property Viewed">
        <input required name="propertyViewed" defaultValue={propertyFromUrl} className="input" />
      </Field>
      <Field label="Date of Viewing">
        <input required name="viewingDate" type="date" max={maxDate} className="input" />
      </Field>
      <Options label="Overall Rating of Property" name="rating" type="radio" required values={["1", "2", "3", "4", "5"].map((rating) => `${rating} Star${rating === "1" ? "" : "s"}`)} />
      <Options label="Pricing Perception" name="pricingPerception" type="radio" required values={["Great Value", "Fair / Market Price", "Overpriced"]} />
      <Field label="What did you like most about the property?" className="md:col-span-2">
        <textarea name="likedMost" rows={3} className="input" />
      </Field>
      <Field label="Was there anything you disliked or would want changed?" className="md:col-span-2">
        <textarea name="disliked" rows={3} className="input" />
      </Field>
      <div className="md:col-span-2" onChange={(event) => {
        const target = event.target;
        if (target instanceof HTMLInputElement) setIntent(target.value);
      }}>
        <Options
          label="Intent & Next Step"
          name="intent"
          type="radio"
          required
          values={["🟢 Ready to make an offer now", "🟡 Interested, but need more details / a second viewing", "🔴 Not interested in this property"]}
        />
      </div>
      {(intent.startsWith("🟢") || intent.startsWith("🟡")) && (
        <Field label="Proposed Offer / Terms" className="md:col-span-2">
          <textarea name="proposedOffer" rows={3} className="input" placeholder="Enter your proposed offer price, payment terms, or required conditions..." />
        </Field>
      )}
      {intent.startsWith("🔴") && (
        <Field label="Alternative Criteria" className="md:col-span-2">
          <textarea name="alternativeCriteria" rows={3} className="input" placeholder="Tell us what you'd like to see in alternative properties..." />
        </Field>
      )}
    </FormShell>
  );
}
