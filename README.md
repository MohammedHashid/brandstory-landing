# Junior Associate – Web Developer Assessment (BrandStory Landing Page)

Welcome to my submission for the Junior Associate Web Developer assessment! This project is a pixel-perfect, fully responsive React.js landing page converted directly from the provided Figma design.

## Live Deployment
Live URL: [Deploying to Vercel...] (Please check my Vercel link)

## Project Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/brandstory-landing.git
   cd brandstory-landing
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Technologies Used
- **Framework:** React.js (via Vite for lightning-fast HMR and building)
- **Styling:** Tailwind CSS v4 & custom CSS (CSS Variables)
- **Typography:** HK Grotesk (Global font)
- **Icons & Graphics:** SVG and provided assets
- **Data Fetching:** Fetch API (React `useEffect`)

## Folder Structure

```text
brandstory-landing/
├── public/
│   ├── api/                 # Mock API endpoints (faq.json)
│   ├── images/              # Optimized static image assets
│   └── favicon.svg          # Site favicon
├── src/
│   ├── components/          
│   │   ├── layout/          # Global layout components (Navbar, Footer)
│   │   ├── sections/        # Main landing page sections (Hero, About, FAQ, etc.)
│   │   └── ui/              # Reusable UI elements (ServiceCards)
│   ├── App.jsx              # Main application root aggregating sections
│   ├── index.css            # Global CSS, theme variables, custom fonts
│   └── main.jsx             # React DOM entry point
├── index.html               # Main HTML entry with SEO metadata
├── tailwind.config.js       # Tailwind configuration
└── package.json             # Dependencies and scripts
```

## Implementation Highlights & Assumptions Made

- **API Integration:** To fulfill the requirement for basic API integration, I decoupled the FAQ section data. Instead of hardcoding it, the `FAQ.jsx` component uses React's `useEffect` and `useState` hooks to asynchronously fetch the data from a local mock endpoint (`/api/faq.json`) via the native Fetch API. It also includes a loading state spinner while resolving.
- **Component Reusability:** I broke down repeated elements (like the intricate Service Cards) into highly reusable UI components (`<ServiceCard />`), passing data via props to keep the main sections incredibly clean and DRY.
- **Responsive Strategy:** I utilized a strict "mobile-first" approach using Tailwind CSS breakpoints. Complex horizontal layouts (like the Footer and About Us section) elegantly stack into vertical columns on mobile devices, ensuring perfect usability across all screen sizes.
- **Micro-Interactions:** Added extremely smooth hover states, group-hover animations (like sliding chevrons in buttons), and smooth transition delays to make the UI feel alive and premium, honoring the spirit of the original design.
- **Tailwind v4 Compatibility:** Handled Tailwind v4 configuration safely, utilizing inline spacing utilities and global standard CSS where the bleeding-edge v4 compiler was too restrictive, prioritizing the exact visual fidelity of the Figma file above all else.
- **Accessibility & SEO:** Added proper `<meta>` description/keyword tags, semantic HTML tags (`<section>`, `<main>`, `<nav>`), and SVG `aria-hidden` attributes to ensure a robust foundation.

Thank you for reviewing my assessment! I look forward to your feedback.
