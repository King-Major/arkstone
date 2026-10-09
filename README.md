# Arkstone Real Estate (React + TypeScript + Vite + Tailwind + Framer Motion + Lucide)

    npm install
    npm run dev        # local
    npm run build      # production build in /dist

Edit `src/data.ts` for: WhatsApp number, email, address and ALL property listings (add/edit/remove entries; images, price, title badge, map query, optional video URL).

## Resend lead email setup (Render)

The frontend stays a Render Static Site. A separate Render Web Service runs the email API in `server/index.js`. Local settings go in the root `.env` (Vite) and `server/.env` (API); both are git-ignored. The Resend API key belongs only in `server/.env` or the Web Service's private environment settings and must never be added as a `VITE_` variable.

1. Verify a sending domain in Resend and create an API key.
2. Replace the placeholder values in the two local `.env` files with your actual Resend key and Render service URLs. The root `.env` URL is for local development; set it to the deployed API URL before building the Static Site for production.
3. Create a Render **Web Service** from this repository:
   - Build command: `npm install`
   - Start command: `npm run start:api`
4. Add the matching server values to the Web Service's environment settings:
   - `RESEND_API_KEY`: the Resend API key
   - `RESEND_FROM`: a sender address on the verified domain, for example `Arkstone Website <website@arkstonerealestate.ng>`
   - `RESEND_TO`: the Arkstone inbox that should receive enquiries
   - `ALLOWED_ORIGINS`: the full Render Static Site URL, with no trailing slash (for example `https://arkstone.onrender.com`)
5. In the Render **Static Site**, set `VITE_LEAD_ENDPOINT` to the Web Service URL plus `/api/leads` (for example `https://arkstone-leads.onrender.com/api/leads`) and redeploy the site. Render does not read the ignored local `.env` files, so configure these values in each service's environment settings.
6. For local development, the root `.env` points at `http://localhost:3000/api/leads` and `server/.env` allows `http://localhost:5173,http://localhost:5174`. Start the API with `npm run start:api`.

The API accepts contact enquiries, acquisition briefs, and report requests. It validates and rate-limits submissions, then sends plain-text notification emails through Resend. Form submissions show an error instead of a success confirmation if the email API is unavailable. The report request currently sends a notification only; it does not attach or automatically deliver a PDF.
