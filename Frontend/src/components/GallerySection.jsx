import { galleryImages } from "../data/gallery";

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-[#faf8f5] px-5 py-7 md:px-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 flex flex-col justify-between gap-3 md:mb-12 md:flex-row md:items-end md:gap-6">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-neutral-500 md:mb-3 md:text-sm md:tracking-[0.35em]">
              Campaign Mood
            </p>
            <h2 className="text-2xl md:text-5xl">Silver Stories</h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-neutral-600 md:text-lg">
            Editorial visuals, soft luxury, and modern silver styling for the
            new chapter of Swaraj.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {galleryImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`Swaraj Silver campaign ${index + 1}`}
              className="h-44 w-full object-cover transition duration-500 hover:scale-[1.02] md:h-72"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
