import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/gallery", label: "Gallery" },
    { href: "/collections", label: "Collections" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="absolute left-0 top-0 z-30 w-full px-5 py-5 md:px-16 md:py-6">
      <nav className="leading-none text-white">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl tracking-wide">
            Swaraj Silver
          </a>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="fixed right-5 top-5 z-50 flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-full border border-white/25 bg-[#1e1a18]/75 shadow-lg shadow-black/10 backdrop-blur-md transition hover:bg-[#1e1a18]/90 md:static md:hidden"
          >
            <span
              className={`h-px w-5 origin-center bg-white transition duration-300 ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-white transition duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-5 origin-center bg-white transition duration-300 ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>

          <div className="hidden items-center gap-10 text-sm uppercase tracking-[0.25em] md:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="hover:opacity-70">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {isOpen && (
        <div className="fixed left-5 right-5 top-20 z-40 md:hidden">
          <div className="mt-4 overflow-hidden rounded-3xl border border-white/15 bg-[#1e1a18]/90 p-3 shadow-2xl shadow-black/25 backdrop-blur-xl">
            <div className="border-b border-white/10 px-4 py-3">
              <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                Menu
              </p>
            </div>

            <div className="grid gap-1 py-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between rounded-2xl px-4 py-4 text-sm uppercase tracking-[0.18em] text-white/85 transition hover:bg-white/10 hover:text-white"
                >
                  <span>{link.label}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-white/25 transition group-hover:bg-white" />
                </a>
              ))}
            </div>

            <a
              href="/collections"
              className="mt-2 block rounded-full bg-white px-5 py-3 text-center text-xs uppercase tracking-[0.18em] text-[#1e1a18] transition hover:bg-neutral-200"
            >
              Explore Catalog
            </a>
          </div>
        </div>
        )}
      </nav>
    </header>
  );
}
