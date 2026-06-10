export default function StorySection() {
  return (
    <section id="story" className="bg-[#eee6db] px-5 py-7 md:px-20 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-5 md:grid-cols-2 md:gap-14">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1200&auto=format&fit=crop"
          alt="Swaraj Silver jewellery craftsmanship"
          className="h-[260px] w-full rounded-2xl object-cover shadow-xl md:h-[620px] md:rounded-[2rem] md:shadow-2xl"
        />

        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-neutral-500 md:mb-4 md:text-sm md:tracking-[0.35em]">
            Our Story
          </p>

          <h2 className="mb-3 text-2xl leading-tight md:mb-6 md:text-5xl">
            Crafted for Everyday Luxury
          </h2>

          <p className="mb-3 text-sm leading-relaxed text-neutral-700 md:mb-5 md:text-lg">
            Swaraj Silver celebrates silver jewellery with a softer, younger,
            and more contemporary expression while keeping craftsmanship at the
            heart of every piece.
          </p>

          <p className="mb-5 text-sm leading-relaxed text-neutral-700 md:mb-8 md:text-lg">
            From delicate everyday jewellery to statement occasion pieces, each
            design is created to feel elegant, meaningful, and timeless.
          </p>

          <a
            href="/contact"
            className="inline-block rounded-full border border-black px-7 py-4 text-xs uppercase tracking-[0.18em] transition hover:bg-black hover:text-white md:px-9 md:text-sm md:tracking-[0.25em]"
          >
            Connect With Us
          </a>
        </div>
      </div>
    </section>
  );
}
