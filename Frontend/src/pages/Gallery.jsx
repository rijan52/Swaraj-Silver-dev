import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { galleryImages } from "../data/gallery";

export default function Gallery() {
  return (
    <main className="min-h-screen bg-[#faf8f5] font-serif text-[#2e2a27]">
      <section
        className="relative flex min-h-[360px] items-end bg-cover bg-center px-5 pb-8 pt-28 md:min-h-[68vh] md:px-20 md:pb-16"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=1800&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <Navbar />

        <div className="relative z-10 max-w-4xl text-white">
          <p className="mb-3 text-[0.68rem] uppercase tracking-[0.24em] text-white/75 md:text-sm md:tracking-[0.35em]">
            Gallery
          </p>
          <h1 className="text-[2rem] leading-tight md:text-7xl">
            Silver Stories in Detail
          </h1>
        </div>
      </section>

      <section className="px-5 py-8 md:px-20 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 md:mb-10">
            <p className="mb-2 text-xs uppercase tracking-[0.24em] text-neutral-500 md:text-sm md:tracking-[0.35em]">
              Campaign Mood
            </p>
            <h2 className="text-2xl md:text-5xl">A Closer Look at Swaraj Silver</h2>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {galleryImages.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`Swaraj Silver gallery ${index + 1}`}
                className={`w-full object-cover ${
                  index % 3 === 0
                    ? "h-64 md:h-[520px] md:row-span-2"
                    : "h-44 md:h-64"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
