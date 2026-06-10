export default function LegacySection() {
  return (
    <section id="legacy" className="bg-[#f7f4ef] px-5 py-6 md:px-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 border-y border-neutral-200 py-5 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:py-14">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.22em] text-neutral-500 md:mb-3 md:text-sm md:tracking-[0.35em]">
              Heritage
            </p>
            <h2 className="text-2xl leading-tight md:text-5xl">
              A 30+ Year Legacy, Reimagined in Silver
            </h2>
          </div>

          <div>
            <p className="text-sm leading-relaxed text-neutral-700 md:text-lg">
              Swaraj Silver carries forward the trust and craftsmanship of
              Swaraj Gahana with a focused silver identity made for modern daily
              wear, meaningful gifting, and celebration.
            </p>

            <div className="mt-5 grid grid-cols-3 border border-neutral-200 bg-white md:mt-7">
              <div className="p-3 md:p-6">
                <p className="text-2xl md:text-4xl">30+</p>
                <p className="mt-1 text-[0.62rem] uppercase tracking-[0.12em] text-neutral-500 md:text-xs md:tracking-[0.18em]">
                  Years
                </p>
              </div>
              <div className="border-x border-neutral-200 p-3 md:p-6">
                <p className="text-2xl md:text-4xl">925</p>
                <p className="mt-1 text-[0.62rem] uppercase tracking-[0.12em] text-neutral-500 md:text-xs md:tracking-[0.18em]">
                  Silver
                </p>
              </div>
              <div className="p-3 md:p-6">
                <p className="text-2xl md:text-4xl">New</p>
                <p className="mt-1 text-[0.62rem] uppercase tracking-[0.12em] text-neutral-500 md:text-xs md:tracking-[0.18em]">
                  Identity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
