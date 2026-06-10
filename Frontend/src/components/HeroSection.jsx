import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center px-5 pb-9 pt-28 text-center md:min-h-screen md:px-6 md:pt-24"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1800&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-black/45" />
      <Navbar />

      <div className="relative z-10 max-w-4xl text-white">
        {/* <p className="mx-auto mb-3 max-w-xs text-[0.68rem] uppercase tracking-[0.22em] text-white/80 md:mb-5 md:max-w-none md:text-sm md:tracking-[0.45em]">
          From the House of Swaraj Gahana
        </p> */}

        <h2 className="mb-4 text-3xl leading-tight md:mb-6 md:text-7xl">
           Modern Silver for Timeless Elegance
        </h2>

        <p className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-white/85 md:mb-9 md:text-xl">
          Swaraj Silver is a modern silver jewellery brand born from the trusted
          heritage of Swaraj Gahana.
        </p>

        <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center md:gap-4">
          <a
            href="/collections"
            className="rounded-full bg-white px-7 py-4 text-center text-xs uppercase tracking-[0.18em] text-black shadow-xl transition hover:bg-neutral-200 md:px-9 md:text-sm md:tracking-[0.25em]"
          >
            Explore Collection
          </a>

          <a
            href="#legacy"
            className="rounded-full border border-white px-7 py-4 text-center text-xs uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black md:px-9 md:text-sm md:tracking-[0.25em]"
          >
            Our Legacy
          </a>
        </div>
      </div>
    </section>
  );
}
