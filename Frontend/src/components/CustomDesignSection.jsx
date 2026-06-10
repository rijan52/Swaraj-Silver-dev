const steps = [
  "Send us a reference picture",
  "Share size, weight, or budget",
  "We prepare your custom silver piece",
];

export default function CustomDesignSection() {
  return (
    <section className="bg-white px-5 py-8 md:px-20 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-7 border-y border-neutral-200 py-7 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-14 md:py-14">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.24em] text-neutral-500 md:mb-4 md:text-sm md:tracking-[0.35em]">
            Customized Design
          </p>
          <h2 className="mb-3 text-2xl leading-tight md:mb-6 md:text-5xl">
            Have a Design in Mind? Send Us a Picture.
          </h2>
          <p className="text-sm leading-relaxed text-neutral-600 md:text-lg">
            Share a reference photo, inspiration, or product idea with us. Our
            team will guide you on design, silver weight, finishing, and make it
            ready for you.
          </p>
        </div>

        <div>
          <div className="grid gap-3">
            {steps.map((step, index) => (
              <div
                key={step}
                className="grid grid-cols-[44px_1fr] items-center border border-neutral-200 bg-[#faf8f5] p-4 md:grid-cols-[56px_1fr] md:p-5"
              >
                <span className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-base leading-snug md:text-xl">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href="/contact"
              className="bg-[#2e2a27] px-7 py-3.5 text-center text-xs uppercase tracking-[0.18em] text-white transition hover:bg-black"
            >
              Send Your Design
            </a>
            <a
              href="/collections"
              className="border border-[#2e2a27] px-7 py-3.5 text-center text-xs uppercase tracking-[0.18em] transition hover:bg-[#2e2a27] hover:text-white"
            >
              Browse Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
