import oldShowroom from "../assets/old-showroom.jpeg";

export default function LegacySection() {
  return (
    <section id="legacy" className="bg-[#f7f4ef] px-5 py-8 md:px-20 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-y border-neutral-200 py-6 md:grid-cols-[1fr_0.95fr] md:items-center md:gap-14 md:py-12">
          <div className="md:order-2">
            <p className="mb-2 text-xs uppercase tracking-[0.22em] text-neutral-500 md:mb-3 md:text-sm md:tracking-[0.35em]">
              Heritage
            </p>
            <h2 className="mb-4 text-3xl leading-tight md:mb-6 md:text-5xl">
              A 30+ Year Legacy, Reimagined in Silver
            </h2>
            <p className="text-sm leading-relaxed text-neutral-700 md:text-lg">
              Swaraj Silver carries forward the trust and craftsmanship of
              Swaraj Gahana with a focused silver identity made for modern daily
              wear, meaningful gifting, and celebration.
            </p>

            <div className="mt-6 grid grid-cols-3 border border-neutral-200 bg-white md:mt-8">
              <div className="p-4 md:p-5">
                <p className="text-2xl md:text-3xl">30+</p>
                <p className="mt-1 text-[0.62rem] uppercase tracking-[0.12em] text-neutral-500 md:text-xs md:tracking-[0.18em]">
                  Years
                </p>
              </div>
              <div className="border-x border-neutral-200 p-4 md:p-5">
                <p className="text-2xl md:text-3xl">925</p>
                <p className="mt-1 text-[0.62rem] uppercase tracking-[0.12em] text-neutral-500 md:text-xs md:tracking-[0.18em]">
                  Silver
                </p>
              </div>
              <div className="p-4 md:p-5">
                <p className="text-2xl md:text-3xl">New</p>
                <p className="mt-1 text-[0.62rem] uppercase tracking-[0.12em] text-neutral-500 md:text-xs md:tracking-[0.18em]">
                  Identity
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-3 shadow-sm md:order-1 md:p-4">
            <img
              src={oldShowroom}
              alt="Old Swaraj Gahana showroom"
              className="h-64 w-full object-cover md:h-[460px]"
            />
            <div className="border border-t-0 border-neutral-200 px-4 py-3">
              <p className="text-[0.62rem] uppercase tracking-[0.18em] text-neutral-500">
                Old Showroom
              </p>
              <p className="mt-1 text-sm md:text-base">Swaraj Gahana</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
