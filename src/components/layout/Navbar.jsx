import { useState } from "react";

// ─── Nav link data — exact Figma labels ───────────────────────────────────────
const NAV_LINKS = [
  { label: "Digital marketing", href: "#services"   },
  { label: "Design",            href: "#design"     },
  { label: "Content",           href: "#content"    },
  { label: "Production",        href: "#production" },
  { label: "Technology",        href: "#technology" },
  { label: "Resources",         href: "#resources"  },
];

// ─── Inline chevron-down — keeps the component self-contained ─────────────────
function ChevronDown() {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 flex-shrink-0 opacity-60"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu  = () => setIsMenuOpen(false);

  return (
    <header 
      className="fixed inset-x-0 top-0 z-50 flex w-full justify-center bg-transparent backdrop-blur-sm"
      style={{ paddingTop: '24px' }}
    >
      <div className="flex h-[88px] w-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-8 lg:px-16">

        
        <a
          href="#home"
          aria-label="BrandStory — go to homepage"
          className="flex-shrink-0 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
          onClick={closeMenu}
        >
          <img
            src="/images/logos/logo.svg"
            alt="BrandStory"
            width={160}
            height={34}
            className="h-10 w-auto"
          />
        </a>

        
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul
            className="flex items-center gap-1 rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur-md"
            style={{ padding: '8px 18px' }}
            role="list"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="flex items-center gap-2.5 rounded-full text-[14px] font-normal text-white/85 transition-colors duration-150 hover:bg-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-1 focus-visible:ring-offset-transparent"
                  style={{ padding: '8px 20px' }}
                >
                  {label}
                  <ChevronDown />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        
        <div className="hidden lg:block flex-shrink-0">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-white text-[13px] font-bold uppercase tracking-[0.12em] text-[#863bff] transition-colors duration-150 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
            style={{ padding: '15px 40px' }}
          >
            Get Quote
          </a>
        </div>

        
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
          className="inline-flex items-center justify-center rounded-md p-2 text-white/70 transition-colors duration-150 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 lg:hidden"
        >
          <svg
            aria-hidden="true"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.75}
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      
      <div
        id="mobile-menu"
        role="region"
        aria-label="Mobile navigation"
        className={[
          "overflow-hidden border-t border-white/10 bg-[#09090b] transition-all duration-300 ease-in-out lg:hidden",
          isMenuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav aria-label="Mobile navigation links">
          <ul className="flex flex-col px-4 pb-5 pt-3" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className="flex items-center justify-between py-3 text-base font-medium text-white/70 transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
                >
                  {label}
                  <ChevronDown />
                </a>
              </li>
            ))}

            
            <li className="mt-4">
              <a
                href="#contact"
                onClick={closeMenu}
                className="block w-full rounded-full bg-white px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-[#863bff] transition-colors duration-150 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Get Quote
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}