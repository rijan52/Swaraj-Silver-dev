import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const values = [
  "Modern silver design",
  "30+ years of trust",
  "Customized design",
  "Everyday elegance",
  "Meaningful gifting",
];

export default function About() {
  return (
    <main className="min-h-screen bg-[#faf8f5] font-serif text-[#2e2a27]">
      <section
        className="relative flex min-h-[380px] items-end bg-cover bg-center px-5 pb-8 pt-28 md:min-h-[70vh] md:px-20 md:pb-16"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1800&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <Navbar />

        <div className="relative z-10 max-w-4xl text-white">
          <p className="mb-3 text-[0.68rem] uppercase tracking-[0.24em] text-white/75 md:text-sm md:tracking-[0.35em]">
            About Swaraj Silver
          </p>
          <h1 className="text-[2rem] leading-tight md:text-7xl">
            Silver Jewellery Rooted in Legacy
          </h1>
        </div>
      </section>

      <section className="px-5 py-8 md:px-20 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.24em] text-neutral-500 md:mb-4 md:text-sm md:tracking-[0.35em]">
              Our Story
            </p>
            <h2 className="text-2xl leading-tight md:text-5xl">
              A focused silver identity from the trusted house of Swaraj Gahana.
            </h2>
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-neutral-700 md:text-lg">
            <p>
              Swaraj Silver celebrates silver jewellery with a modern, wearable,
              and refined expression while carrying forward the craftsmanship
              and trust built by Swaraj Gahana over 30+ years.
            </p>
            <p>
              From delicate everyday pieces to statement occasion jewellery,
              each design is selected or customized to feel elegant, meaningful,
              and easy to style.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-8 md:px-20 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 md:grid-cols-5 md:gap-5">
          {values.map((value, index) => (
            <div key={value} className="border border-neutral-200 bg-[#faf8f5] p-5 md:p-7">
              <p className="mb-5 text-xs uppercase tracking-[0.18em] text-neutral-400">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="text-xl leading-snug md:text-2xl">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-8 md:px-20 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-6 border-y border-neutral-200 py-7 md:grid-cols-[1fr_auto] md:py-12">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.24em] text-neutral-500">
              Discover
            </p>
            <h2 className="text-2xl md:text-5xl">Explore the Swaraj Silver catalog.</h2>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="/collections"
              className="bg-[#2e2a27] px-7 py-3 text-center text-xs uppercase tracking-[0.18em] text-white transition hover:bg-black"
            >
              View Collections
            </a>
            <a
              href="/contact"
              className="border border-[#2e2a27] px-7 py-3 text-center text-xs uppercase tracking-[0.18em] transition hover:bg-[#2e2a27] hover:text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
