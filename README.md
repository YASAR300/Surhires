# Surhires — Production Frontend

Surhires is a modern marketing website and recruitment platform connecting high-growth tech companies with pre-vetted engineering, product, and leadership talent.

## Tech Stack

- **Framework:** Next.js (App Router, JavaScript/JSX only, zero TypeScript, no `.tsx`)
- **Styling:** Tailwind CSS v4 with custom design tokens in `app/globals.css`
- **Icons:** `lucide-react`
- **Fonts:** Next.js Google Fonts (`Plus Jakarta Sans` for headings, `Inter` for body text)

## Design Tokens & Palette

Defined once in `app/globals.css` and exposed via CSS variables:

| Token | Value / Hex | Usage |
| :--- | :--- | :--- |
| **Primary Navy** | `#0B1F3A` | Brand primary, headers, primary buttons, footer |
| **Navy Dark** | `#061324` | Active states and high-contrast surfaces |
| **Teal Accent** | `#14B8A6` | Brand accent, badges, highlights, CTA accents |
| **Teal Dark** | `#0F766E` | Text & inline links (≥ 4.5:1 contrast on white) |
| **Warm White** | `#FAF8F5` | Background canvas |
| **White Surface** | `#FFFFFF` | Cards, input fields, modals |
| **Slate Neutrals** | `#F8FAFC` to `#0F172A` | Borders, subtle backgrounds, and body typography |

### Typography Scale
- **Headings:** `Plus Jakarta Sans` (`--font-heading`)
- **Body:** `Inter` (`--font-body`)
- **Scales:** `text-display`, `text-h1`, `text-h2`, `text-h3`, `text-body-lg`, `text-body`, `text-small`

### Accessibility
- Focus rings: visible `outline: 2px solid #0F766E` with `outline-offset: 2px` on all interactive elements.
- Motion: Respects `prefers-reduced-motion` to suppress transitions/animations when requested by the OS.

---

## Folder Structure

```
Surhires/
├── app/
│   ├── layout.jsx        # Root layout with fonts, metadata API, Navbar & Footer
│   ├── page.jsx          # Home page assembling all marketing sections
│   ├── globals.css       # Design tokens, typography scale, focus ring & reduced motion
│   ├── jobs/
│   │   └── page.jsx      # Jobs marketplace with search & department filters
│   ├── employers/
│   │   └── page.jsx      # Employer value proposition, pricing tiers & inquiry form
│   └── not-found.jsx     # Custom 404 page
├── components/
│   ├── ui/               # Button, Card, Badge, Container, Section, Accordion, Input, Select, Textarea
│   ├── layout/           # Navbar, Footer, MobileMenu
│   └── sections/         # Hero, Stats, FeaturedJobs, HowItWorks, Testimonials, Faq, EmployerCta
├── data/                 # jobs.js, faqs.js, testimonials.js, plans.js, navigation.js
├── lib/                  # utils.js with cn() helper
├── jsconfig.json         # Path alias config ("@/*")
└── package.json
```

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```
