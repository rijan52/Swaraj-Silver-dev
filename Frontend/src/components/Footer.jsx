export default function Footer() {
  return (
    <footer id="contact" className="bg-[#171310] px-5 py-9 text-white md:px-20 md:py-14">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <div>
          
          <h3 className="mb-3 text-3xl leading-none md:text-5xl">
            Swaraj Silver
          </h3>
          <p className="max-w-xl text-sm leading-relaxed text-white/55 md:text-base">
            A modern silver jewellery brand shaped by legacy, craft, and
            customized design.
          </p>
        </div>

        <div className="grid gap-4 text-sm text-white/60 sm:grid-cols-2 md:text-right">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/35">
              Contact
            </p>
            <a href="/contact" className="transition hover:text-white">
              Enquire with us
            </a>
          </div>
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/35">
              Catalog
            </p>
            <a href="/collections" className="transition hover:text-white">
              View collections
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-5 text-xs uppercase tracking-[0.16em] text-white/35 md:mt-10 md:flex-row md:items-center md:justify-between">
        <p>Copyright 2026 Swaraj Silver</p>
      </div>
    </footer>
  );
}
