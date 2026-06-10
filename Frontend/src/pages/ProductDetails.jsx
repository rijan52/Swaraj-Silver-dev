import Footer from "../components/Footer";
import { catalogProducts } from "../data/collection";

const productTags = ["Daily", "Gift"];

function ProductHeader() {
  return (
    <header className="px-5 py-5 md:px-20 md:py-7">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="/" className="text-2xl tracking-wide text-[#1e1a18]">
          Swaraj Silver
        </a>

        <div className="hidden items-center gap-10 text-sm uppercase tracking-[0.25em] text-[#1e1a18] md:flex">
          <a href="/#legacy" className="transition hover:opacity-60">Legacy</a>
          <a href="/collections" className="transition hover:opacity-60">Collections</a>
          <a href="/#story" className="transition hover:opacity-60">About</a>
          <a href="/contact" className="transition hover:opacity-60">Contact</a>
        </div>

        <a
          href="/collections"
          className="text-xs uppercase tracking-[0.18em] text-neutral-500 transition hover:text-[#1e1a18] md:hidden"
        >
          Back
        </a>
      </nav>
    </header>
  );
}

export default function ProductDetails() {
  const id = Number(window.location.pathname.split("/").pop());
  const product = catalogProducts.find((item) => item.id === id);

  if (!product) {
    return (
      <main className="min-h-screen bg-[#fbfaf7] font-serif text-[#1e1a18]">
        <ProductHeader />
        <section className="px-5 py-12 md:px-20">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-3xl md:text-5xl">Product not found</h1>
            <a href="/collections" className="mt-6 inline-block border-b border-black pb-1">
              Back to collections
            </a>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fbfaf7] font-serif text-[#1e1a18]">
      <ProductHeader />

      <section className="px-4 pb-8 pt-4 md:px-20 md:pb-16 md:pt-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-6 md:grid-cols-[1.08fr_0.92fr] md:gap-12">
          <div className="order-2 md:order-2">
            <div className="bg-transparent p-0 md:p-0">
              <a
                href="/collections"
                className="mb-5 hidden text-xs uppercase tracking-[0.2em] text-neutral-500 transition hover:text-[#1e1a18] md:inline-block"
              >
                Back to catalog
              </a>

              <p className="mb-2 text-xs uppercase tracking-[0.22em] text-neutral-500">
                {product.category}
              </p>

              <h1 className="mb-2 text-3xl leading-tight tracking-tight md:text-5xl">
                {product.name}
              </h1>

              <p className="mb-2 text-2xl leading-none tracking-tight md:text-4xl">
                {product.price}
              </p>

              <p className="mb-3 text-xs uppercase tracking-[0.18em] text-neutral-500">
                Weight: {product.weight}
              </p>

              <p className="mb-4 max-w-xl text-sm leading-relaxed text-neutral-600 md:text-base">
                {product.details}
              </p>

              <div className="mb-4 grid grid-cols-3 border border-neutral-200">
                {[
                  ["Material", product.material],
                  ["Finish", product.finish],
                  ["Occasion", product.occasion],
                ].map(([label, value], index) => (
                  <div
                    key={label}
                    className={`p-3 md:p-4 ${index === 1 ? "border-x border-neutral-200" : ""}`}
                  >
                    <p className="mb-1 text-[0.58rem] uppercase tracking-[0.14em] text-neutral-500 md:text-xs">
                      {label}
                    </p>
                    <p className="text-xs leading-snug text-neutral-800 md:text-base">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <p className="mb-3 text-xs uppercase tracking-[0.18em] text-neutral-500">
                  Tags
                </p>
                <div className="flex flex-wrap gap-2">
                  {productTags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-xs text-neutral-700"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="/contact"
                className="inline-block w-full bg-[#1e1a18] px-4 py-3 text-center text-xs uppercase tracking-[0.12em] text-white transition hover:bg-black md:w-auto md:px-6"
              >
                Enquire About This Product
              </a>
            </div>
          </div>

          <div className="order-1 md:order-1">
            <img
              src={product.image}
              alt={product.name}
              className="aspect-square w-full object-cover md:aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
