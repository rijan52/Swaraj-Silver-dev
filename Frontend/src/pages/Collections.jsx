import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { catalogProducts } from "../data/collection";

const categories = [
  {
    name: "All",
  },
  {
    name: "Rings",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Earrings",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Bracelets",
    image:
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=900&auto=format&fit=crop",
  },
];

export default function Collections() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showCustomDesign, setShowCustomDesign] = useState(false);

  const filteredProducts = useMemo(
    () =>
      selectedCategory === "All"
        ? catalogProducts
        : catalogProducts.filter(
            (product) => product.category === selectedCategory,
          ),
    [selectedCategory],
  );

  function chooseCategory(categoryName) {
    setSelectedCategory(categoryName);

    window.setTimeout(() => {
      document.getElementById("collections")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  }

  return (
    <main className="min-h-screen bg-[#faf8f5] font-serif text-[#2e2a27]">
      <section
        className="relative flex min-h-[390px] items-end bg-cover bg-center px-5 pb-8 pt-28 md:min-h-[78vh] md:px-20 md:pb-16 md:pt-28"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1800&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <Navbar />

        <div className="relative z-10 max-w-4xl text-white">
          <p className="mb-3 max-w-xs text-[0.68rem] uppercase tracking-[0.22em] text-white/75 md:mb-5 md:max-w-none md:text-sm md:tracking-[0.45em]">
            Swaraj Silver Collections
          </p>
          <h1 className="mb-3 text-[2rem] leading-tight md:mb-6 md:text-7xl">
            Crafted Silver for Every Occasion
          </h1>
        </div>
      </section>

      <section id="collections" className="px-5 py-7 md:px-20 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 flex flex-col justify-between gap-3 md:mb-12 md:flex-row md:items-end md:gap-6">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.25em] text-neutral-500 md:mb-4 md:text-sm md:tracking-[0.35em]">
                Catalog
              </p>
              <h2 className="text-2xl md:text-5xl">{selectedCategory}</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-neutral-600 md:text-lg">
              Select a category to browse matching silver jewellery, then open
              a product to view details or enquire about customized designs.
            </p>
          </div>

          <div className="mb-5 flex gap-3 overflow-x-auto pb-2 md:mb-12 md:flex-wrap md:overflow-visible md:pb-0">
            {categories.map((category) => (
              <button
                key={category.name}
                type="button"
                onClick={() => chooseCategory(category.name)}
                className={`shrink-0 rounded-full border px-5 py-3 text-xs uppercase tracking-[0.16em] transition md:px-6 md:text-sm md:tracking-[0.2em] ${
                  selectedCategory === category.name
                    ? "border-[#2e2a27] bg-[#2e2a27] text-white"
                    : "border-neutral-300 bg-white text-[#2e2a27] hover:border-[#2e2a27]"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="mb-7 md:mb-12">
            <button
              type="button"
              onClick={() => setShowCustomDesign((isShown) => !isShown)}
              className="group flex w-full items-center justify-between gap-4 border border-neutral-200 bg-white px-4 py-3 text-left transition hover:border-[#2e2a27] md:px-5 md:py-4"
            >
              <span>
                <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-neutral-500">
                  Customized Design
                </span>
                <span className="mt-1 block text-base leading-tight md:text-xl">
                  Send a picture and make your own silver piece
                </span>
              </span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2e2a27] text-sm text-white transition group-hover:bg-black">
                {showCustomDesign ? "-" : "+"}
              </span>
            </button>

            {showCustomDesign && (
              <div className="mt-4 grid gap-4 border border-neutral-200 bg-white p-5 md:grid-cols-[1fr_auto] md:items-center md:p-7">
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.22em] text-neutral-500">
                    Customized Design
                  </p>
                  <h3 className="mb-2 text-2xl leading-tight md:text-4xl">
                    Send a picture. We make it ready in silver.
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600 md:text-base">
                    Share a reference photo or design idea and our team will
                    guide you with weight, finish, and making details.
                  </p>
                </div>

                <a
                  href="/contact"
                  className="bg-[#2e2a27] px-7 py-3 text-center text-xs uppercase tracking-[0.18em] text-white transition hover:bg-black"
                >
                  Start Custom Design
                </a>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-8">
            {filteredProducts.map((item) => (
              <a
                key={item.id}
                href={`/collections/${item.id}`}
                className="group overflow-hidden bg-transparent transition duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-3 text-center sm:p-4 md:p-6">
                    <h3 className="mb-1 truncate text-[13px] uppercase leading-tight tracking-[0.04em] text-[#111] md:text-xl">{item.name}
                  </h3>
                  <p className="text-sm text-[#111] md:text-[10]">
                    {item.price}
                  </p>
                  <span className="mt-3 inline-block text-[0.62rem] uppercase tracking-[0.16em] text-neutral-400 transition group-hover:text-[#2e2a27] md:text-xs">
                    View Details
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-8 md:px-20 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-12">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.24em] text-neutral-500 md:mb-4 md:text-sm md:tracking-[0.35em]">
              Promise
            </p>
            <h2 className="mb-3 text-2xl leading-tight md:mb-6 md:text-5xl">
              The Swaraj Silver Standard
            </h2>
            <p className="text-sm leading-relaxed text-neutral-600 md:text-lg">
              Every piece is chosen with a focus on wearable design, reliable
              silver quality, and styling that feels elegant across everyday and
              occasion wear.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:gap-4">
            {[
              "925 silver focused pieces",
              "Styling help for every occasion",
              "Gift-ready product guidance",
              "Customized design support",
              "Care support after purchase",
            ].map((detail, index) => (
              <div
                key={detail}
                className="group border border-neutral-200 bg-[#fbfaf7] p-4 transition hover:border-[#2e2a27] hover:bg-white md:p-6"
              >
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#2e2a27] text-xs text-white md:h-9 md:w-9">
                  {index + 1}
                </div>
                <p className="text-base leading-snug md:text-xl">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
