import { useState } from "react";

const LINKS = [
  { label: "OUR STORY", href: "#story" },
  { label: "SPECIALIZATIONS", href: "#specializations" },
  { label: "PROJECTS", href: "#projects" },
  { label: "COMMUNITY", href: "#community" },
  { label: "CONTACT", href: "#contact" },
];

function BrandMark() {
  return (
    <svg width="36" height="36" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <polygon points="22,4 40,36 4,36" fill="#c8102e" />
      <polygon points="22,13 32,34 12,34" fill="#ffffff" />
      <polygon points="22,19 28,32 16,32" fill="#c8102e" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-white shadow-[0_2px_12px_rgba(15,23,42,0.10)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-8 px-5 sm:px-8 lg:px-12">

        {/* Logo */}
        <a
          href="#top"
          className="flex flex-shrink-0 items-center gap-3 bg-white px-4 py-3 no-underline shadow-sm"
        >
          <BrandMark />
          <div className="flex flex-col leading-none">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">
              Geometrics
            </span>
            <span className="mt-1 text-[9px] uppercase tracking-wide text-gray-500">
              Space Structures Pvt. Ltd.
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden flex-1 items-center justify-end gap-8 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium tracking-widest text-gray-900 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}

          {/* Search icon */}
          <button
            type="button"
            aria-label="Search"
            className="flex items-center text-gray-900 transition-colors hover:text-brand"
          >
            <SearchIcon />
          </button>

        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="ml-auto inline-flex h-10 w-10 items-center justify-center text-gray-900 transition-colors lg:hidden"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen ? (
        <div className="mx-5 bg-white shadow-xl lg:hidden">
          <div className="flex flex-col p-3">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-3 text-xs font-medium tracking-widest text-gray-800 hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
