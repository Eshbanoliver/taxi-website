# 🚕 Taxi GO — Premium Chauffeur & Taxi Booking Web Application

> An ultra-modern, high-performance web application designed for **Taxi GO**, Udaipur’s premier taxi and luxury chauffeur service. Built with React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide React.

---

## 📌 Table of Contents

- [Section 1: Project Overview](#section-1-project-overview)
- [Section 2: Key Features](#section-2-key-features)
- [Section 3: Technology Stack & Core Dependencies](#section-3-technology-stack--core-dependencies)
- [Section 4: Project Structure & File Map](#section-4-project-structure--file-map)
- [Section 5: Page Architecture & Navigation](#section-5-page-architecture--navigation)
- [Section 6: UI Component Breakdown](#section-6-ui-component-breakdown)
- [Section 7: Design System & Custom CSS Engine](#section-7-design-system--custom-css-engine)
- [Section 8: Performance & SEO Optimization Strategy](#section-8-performance--seo-optimization-strategy)
- [Section 9: Configuration Files Explanation](#section-9-configuration-files-explanation)
- [Section 10: Getting Started & Local Setup](#section-10-getting-started--local-setup)
- [Section 11: Build, Linting & Production Deployment](#section-11-build-linting--production-deployment)
- [Section 12: Contributing & Code Standards](#section-12-contributing--code-standards)
- [Section 13: License & Credits](#section-13-license--credits)

---

## Section 1: Project Overview

### Description
**Taxi GO** is a luxury, responsive web application tailored for outstation trips, airport transfers, and local sightseeing services in Udaipur, Rajasthan. The project focuses on providing an immersive, visually captivating user experience through glassmorphic UI cards, liquid mesh background animations, custom typography, and instant online booking workflows.

### Objectives
- Deliver a luxury brand impression for tourists and business travelers.
- Offer zero-friction taxi reservation requests with date/time selectors and vehicle tier selection.
- Achieve near-instant page speed scores using Vite pre-bundling, React route code-splitting, and CSS micro-animations.
- Maintain top-ranking SEO visibility for Udaipur taxi and car rental search queries using dynamic meta tags and structured JSON-LD schemas.

---

## Section 2: Key Features

### Description
Detailed list of user-facing capabilities and visual features available in the web application.

- 🚗 **Interactive Booking Engine**: Full-screen modal overlay supporting pick-up/drop-off input, pickup dates/times, vehicle tier choices (Economy, Sedan, SUV, Luxury), and simulated reservation state machine.
- 🎨 **Tiered Glassmorphism & Mesh Backgrounds**: Hardware-accelerated CSS mesh gradients, animated background glowing orbs, micro-interactions, and 3D card perspective tilt.
- ⚡ **Dynamic Hero Slider**: High-resolution image slider showcasing luxury vehicles with automated transitions, manual control dots, and instant booking call-to-actions.
- 📱 **Floating Quick Action Hub**: Floating WhatsApp and direct call action buttons fixed on mobile and desktop screens for immediate customer communication.
- 🎯 **Vehicle Fleet Modal Specs**: Modal popups displaying detailed seating capacity, luggage capacity, rate per km, and comfort features for each fleet vehicle.
- 🖱️ **Smooth Interactive Custom Cursor**: Desktop cursor follower with fluid dampening effects that react to interactive buttons and links.
- 🔍 **Real-Time Dynamic SEO Header**: Dynamic document title, meta descriptions, canonical URLs, Open Graph, and Twitter Cards injected dynamically per route.
- ⚡ **Route-Based Code-Splitting**: Pages lazy-loaded with React `Suspense` and fallback spinners to ensure ultra-low initial bundle sizes.

---

## Section 3: Technology Stack & Core Dependencies

### Description
Comprehensive documentation of the tech stack, library choices, and runtime tools powering the project.

| Layer | Technology | Version | Purpose & Rationale |
| :--- | :--- | :--- | :--- |
| **Framework** | [React](https://react.dev/) | `^18.2.0` | UI component engine with functional hooks and concurrent features. |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | `^5.0.2` | Type safety, enhanced IDE autocompletion, and robust component props interfaces. |
| **Build Tool** | [Vite](https://vitejs.dev/) | `^4.4.5` | Next-generation frontend tooling with lightning-fast HMR and Rollup bundling. |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | `^3.3.3` | Utility-first CSS framework customized with luxury color palettes and custom utilities. |
| **Routing** | [React Router DOM](https://reactrouter.com/) | `^6.15.0` | Client-side routing with browser history management and route matching. |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | `^10.16.4` | Production-grade motion library for fluid UI transitions and gesture animations. |
| **Iconography** | [Lucide React](https://lucide.dev/) | `^0.263.1` | Clean, customizable SVG icons designed for modern UI interfaces. |
| **Post-CSS** | [PostCSS](https://postcss.org/) & [Autoprefixer](https://github.com/postcss/autoprefixer) | `^8.4.27` | Vendor prefixing and CSS parsing engine. |

---

## Section 4: Project Structure & File Map

### Description
An architectural outline of the project directory tree and source file roles.

```
d:/taxi/
├── public/                     # Static public assets
│   ├── logo.png                # Brand mark & favicon
│   ├── robots.txt              # Search engine crawler instructions
│   └── sitemap.xml             # XML sitemap for SEO indexing
├── src/                        # Application source code
│   ├── components/             # Reusable UI components & modals
│   │   ├── BookingModal.tsx    # 24/7 Ride reservation form modal
│   │   ├── CustomCursor.tsx    # Desktop animated custom cursor
│   │   ├── FloatingButtons.tsx # Fixed WhatsApp & Call quick actions
│   │   ├── Footer.tsx          # Site footer with links, address, copyright
│   │   ├── Header.tsx          # Responsive navigation bar with mobile drawer
│   │   ├── HeroSlider.tsx      # Main landing image carousel banner
│   │   ├── SEO.tsx             # Route-level dynamic head & metadata updater
│   │   └── VehicleDetailsModal.tsx # Detailed modal for fleet specifications
│   ├── pages/                  # Route views (pages)
│   │   ├── About.tsx           # Company story, mission, and fleet standards
│   │   ├── Contact.tsx         # Contact details, map preview, and contact form
│   │   ├── FAQ.tsx             # Interactive filterable accordion FAQ section
│   │   ├── Home.tsx            # Main landing page with fleet & booking CTA
│   │   └── Services.tsx       # Detailed taxi service offerings & pricing
│   ├── App.tsx                 # Core app layout, routes definition & state
│   ├── index.css               # Design system tokens, tailwind layers & custom classes
│   └── main.tsx                # React root entry point
├── .gitignore                  # Git untracked file patterns
├── index.html                  # HTML template with preconnects, SEO & JSON-LD schema
├── package.json                # Project dependencies, scripts, and metadata
├── postcss.config.js           # PostCSS plugin configurations
├── tailwind.config.js          # Extended Tailwind design tokens, fonts, and keyframes
├── tsconfig.json               # TypeScript compiler options
├── tsconfig.node.json          # Vite Node config TypeScript settings
└── vite.config.ts              # Vite bundle configurations & vendor chunk splitting
```

---

## Section 5: Page Architecture & Navigation

### Description
Detailed breakdown of each top-level view within the application router (`react-router-dom`).

- 🏠 **Home Page (`/`)**:
  - **Hero Slider Section**: Interactive image carousel showcasing cabs in Udaipur.
  - **Quick Booking Trigger**: Direct access to open the reservation modal.
  - **Fleet Showcase**: Grid of top vehicles (Sedans, SUVs, Luxury Cars) with pricing details.
  - **Service Highlights**: Airport transfer, outstation, and sightseeing summaries.
  - **Customer Testimonials**: Social proof and rider reviews.

- ℹ️ **About Us Page (`/about`)**:
  - Brand origin story, local Udaipur operating expertise, safety protocols, background-checked chauffeurs, and vehicle hygiene standards.

- 🚖 **Services Page (`/services`)**:
  - Breakdown of specialized taxi offerings: Outstation Cabs, Local Sightseeing Tours, Maharana Pratap Airport (UDR) Transfers, and Event / Wedding Luxury Mobility.

- ❓ **FAQ Page (`/faq`)**:
  - Categorized accordion Q&A covering night charges, toll tax policies, cancellation terms, luggage allowances, and payment methods.

- 📞 **Contact Us Page (`/contact`)**:
  - Phone numbers, email addresses, physical office hub address in Udaipur, direct contact form, interactive location card, and quick WhatsApp connect link.

---

## Section 6: UI Component Breakdown

### Description
Technical description of core functional components powering the UI.

- **`Header.tsx`**: Navigation header featuring brand logo, desktop navigation links, active page highlighting, booking trigger button, and a sliding mobile drawer for smaller viewports.
- **`Footer.tsx`**: Site footer containing company summary, quick link navigation, contact details, social media links, and copyright notices.
- **`BookingModal.tsx`**: Modal interface capturing passenger details (name, phone, pickup, destination, date, time, vehicle class), complete with loading state animations and success confirmation dialogs.
- **`VehicleDetailsModal.tsx`**: Inspection modal displaying vehicle specifications (seating, luggage capacity, rate/km, inclusions, AC/non-AC status).
- **`HeroSlider.tsx`**: Animated full-width banner equipped with slide timers, smooth crossfades, background gradients, and manual slide navigation controls.
- **`FloatingButtons.tsx`**: Fixed position action buttons (Phone Call & WhatsApp) floating at the bottom right corner of the viewport for high conversion rates.
- **`CustomCursor.tsx`**: Subtle smooth custom pointer cursor component disabled on touch/mobile devices for optimized touch events.
- **`SEO.tsx`**: Component utilizing `useLocation` to dynamically rewrite `<title>`, `<meta name="description">`, `<meta name="keywords">`, `<link rel="canonical">`, and social meta tags on route change.

---

## Section 7: Design System & Custom CSS Engine

### Description
Overview of design tokens, color palettes, custom utility classes, and custom keyframe animations in `tailwind.config.js` and `src/index.css`.

### Custom Color Tokens
- **`taxi-yellow` (`#FFD700`)**: Primary signature brand gold accent.
- **`taxi-black` (`#1a1a1a`)**: Deep obsidian dark mode tone.
- **`premium-gold` (`#D4AF37`)**: Secondary metallic gold shade.
- **`premium-silver` (`#C0C0C0`)**: Subtle luxury accent tone.

### Typography
- **Serif Font**: `Playfair Display` (for headlines, section titles, and luxury callouts).
- **Sans-Serif Font**: `Outfit` (for body copy, UI buttons, inputs, and form controls).

### Glassmorphism & Visual Tokens
- `.glass`: Light translucent background with `backdrop-blur-2xl`.
- `.glass-premium`: Darker translucent panel with glass hover elevation effects.
- `.glass-dark`: Ultra-dark glass backdrop with subtle white borders.
- `.btn-premium`: Gold CTA button featuring animated light sweep keyframes on hover.
- Hardware-accelerated BMP static noise grain overlay on `body::before` to reduce CPU overhead to zero.

---

## Section 8: Performance & SEO Optimization Strategy

### Description
Documenting performance optimizations and search engine optimization techniques built into the platform.

1. **Resource Hints**: Preconnect connections to Google Fonts origins (`fonts.googleapis.com`, `fonts.gstatic.com`) and DNS prefetching for image domains (`images.unsplash.com`).
2. **Structured JSON-LD Schema**: Embedded `TaxiService` and `LocalBusiness` JSON-LD schemas in `index.html` enabling Google rich snippet cards.
3. **Route Code-Splitting**: React `lazy()` chunking reduces initial JavaScript payload size for instant First Contentful Paint (FCP).
4. **Optimized Manual Chunks**: Rollup pre-configured vendor chunks (`react-vendor`, `router`, `motion`, `icons`) in `vite.config.ts` to improve long-term browser cache efficiency.
5. **Zero Layout Shifts**: CSS spinners and reserved container dimensions prevent Cumulative Layout Shift (CLS).

---

## Section 9: Configuration Files Explanation

### Description
Role and responsibility of each root configuration file.

- **`vite.config.ts`**: Configures React plugin, specifies build target `es2020`, defines Rollup output manual chunk splitting rules, and sets dependency pre-bundling targets.
- **`tailwind.config.js`**: Extends standard Tailwind theme with custom fonts, colors, keyframes, shadows, and backdrop blurs.
- **`postcss.config.js`**: Configures Tailwind CSS and Autoprefixer PostCSS compilation plugins.
- **`tsconfig.json`**: Sets TypeScript compilation target to ES2020, enables React JSX transformation, and strict type checking modes.
- **`index.html`**: Root HTML document declaring meta viewports, theme color, Google Fonts references, SEO tags, and application mount entry target `<div id="root">`.

---

## Section 10: Getting Started & Local Setup

### Description
Step-by-step guide for developers to set up, run, and test the project on a local development machine.

### Prerequisites
- Node.js (version 18.0.0 or higher recommended)
- npm (version 9.0.0 or higher)

### Installation Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Eshbanoliver/taxi-website.git
   cd taxi-website
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```

4. **Access Application**:
   Open your browser and navigate to `http://localhost:5173`.

---

## Section 11: Build, Linting & Production Deployment

### Description
Commands and workflows for code validation, static analysis, and production build generation.

### Development Commands

- **Run Dev Server**:
  ```bash
  npm run dev
  ```
  Launches Vite HMR development server at `http://localhost:5173`.

- **Type-Check & Build Production Dist**:
  ```bash
  npm run build
  ```
  Runs TypeScript compiler (`tsc`) and compiles optimized static assets into the `dist/` directory.

- **Preview Production Build**:
  ```bash
  npm run preview
  ```
  Serves the built `dist/` folder locally to verify production build behavior before deployment.

- **Run Linter**:
  ```bash
  npm run lint
  ```
  Runs ESLint static analysis across `.ts` and `.tsx` source files with zero-warning threshold.

---

## Section 12: Contributing & Code Standards

### Description
Guidelines for adding new features or submitting pull requests to the project.

- **Code Style**: Format code cleanly and maintain strict TypeScript typing for all props and data models.
- **Component Placement**: Reusable UI elements belong under `src/components/`, while route views belong under `src/pages/`.
- **Git Commit Rules**: Write clear, imperative commit messages (e.g., `feat: add booking modal phone validation`, `fix: header drawer mobile backdrop`).
- **Pull Requests**: Ensure `npm run lint` and `npm run build` pass without errors before opening a pull request.

---

## Section 13: License & Credits

### Description
License information and asset attributions.

- **License**: Private / Proprietary — All rights reserved by Taxi GO Udaipur.
- **Imagery**: Royalty-free vehicle and travel photography provided by [Unsplash](https://unsplash.com/).
- **Typography**: Fonts served via [Google Fonts](https://fonts.google.com/) (`Outfit` and `Playfair Display`).
- **Icons**: SVG icons provided by [Lucide React](https://lucide.dev/).

---
*Maintained with ❤️ by the Taxi GO Engineering Team.*
