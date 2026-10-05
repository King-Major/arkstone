// ---- EDIT THESE: contact details --------------------------------------
export const WHATSAPP = "2340000000000"; // international format, no "+"
export const EMAIL = "hello@arkstone.ng";
export const ADDRESS = "Office address, Ikoyi, Lagos, Nigeria";
export const LEAD_ENDPOINT = import.meta.env.VITE_LEAD_ENDPOINT as string | undefined;

export const wa = (text: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

// ---- PROPERTY LISTINGS: add / edit / remove entries here ---------------
export type Property = {
  id: string; title: string; location: "Ikoyi" | "Victoria Island" | "Lekki Phase 1";
  type: "Residential" | "Commercial"; titleStatus: "C of O" | "Governor's Consent" | "Registered Survey";
  price: string; priceM: number; // priceM = price in millions of naira (for filtering)
  beds?: number; bq?: number; sqm: number; description: string;
  images: string[]; video?: string; mapQuery: string;
};
const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=75`;

export const properties: Property[] = [
  { id: "ik-01", title: "Contemporary 5-Bedroom Detached", location: "Ikoyi", type: "Residential", titleStatus: "C of O", price: "₦850,000,000", priceM: 850, beds: 5, bq: 2, sqm: 780,
    description: "Gated detached residence with pool, smart-home wiring and 24/7 estate security.", images: [u("photo-1613490493576-7fde63acd811"), u("photo-1600585154340-be6161a56a0c"), u("photo-1600607687939-ce8a6c25118c")], mapQuery: "Ikoyi, Lagos" },
  { id: "vi-01", title: "Waterfront 4-Bedroom Penthouse", location: "Victoria Island", type: "Residential", titleStatus: "Governor's Consent", price: "₦620,000,000", priceM: 620, beds: 4, bq: 1, sqm: 420,
    description: "Full-floor penthouse with lagoon views, private lift lobby and concierge.", images: [u("photo-1600596542815-ffad4c1539a9"), u("photo-1600566753190-17f0baa2a6c3"), u("photo-1512917774080-9991f1c4c750")], mapQuery: "Victoria Island, Lagos" },
  { id: "lk-01", title: "Luxury 4-Bedroom Terrace", location: "Lekki Phase 1", type: "Residential", titleStatus: "Registered Survey", price: "₦280,000,000", priceM: 280, beds: 4, bq: 1, sqm: 360,
    description: "Modern terrace in a managed estate with reliable power and water infrastructure.", images: [u("photo-1600047509807-ba8f99d2cdde"), u("photo-1600573472592-401b489a3cdc"), u("photo-1600566752355-35792bedcfea")], mapQuery: "Lekki Phase 1, Lagos" },
  { id: "vi-02", title: "Grade-A Office Floor, 1,200 sqm", location: "Victoria Island", type: "Commercial", titleStatus: "C of O", price: "₦1,400,000,000", priceM: 1400, sqm: 1200,
    description: "Full floor in a Grade-A tower with backup power, parking and fibre connectivity.", images: [u("photo-1486406146926-c627a92ad1ab"), u("photo-1497366216548-37526070297c"), u("photo-1497366811353-6870744d04b2")], mapQuery: "Victoria Island, Lagos" },
  { id: "lk-02", title: "Flagship Retail Unit", location: "Lekki Phase 1", type: "Commercial", titleStatus: "Governor's Consent", price: "₦390,000,000", priceM: 390, sqm: 310,
    description: "High-footfall corner retail space on a prime Lekki Phase 1 frontage.", images: [u("photo-1441986300917-64674bd600d8"), u("photo-1555529669-e69e7aa0ba9e"), u("photo-1497366754035-f200968a6e72")], mapQuery: "Lekki Phase 1, Lagos" },
  { id: "ik-02", title: "Elegant 3-Bedroom Apartment", location: "Ikoyi", type: "Residential", titleStatus: "C of O", price: "₦310,000,000", priceM: 310, beds: 3, bq: 1, sqm: 240,
    description: "Corner apartment in a boutique block with gym, pool and dedicated parking.", images: [u("photo-1545324418-cc1a3fa10c00"), u("photo-1502672260266-1c1ef2d93688"), u("photo-1560448204-e02f11c3d0e2")], mapQuery: "Ikoyi, Lagos" },
];
