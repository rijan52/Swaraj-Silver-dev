import CollectionCard from "./CollectionCard";
import { collections } from "../data/collection";

export default function CollectionsSection() {
  return (
    <section id="collections" className="bg-[#faf8f5] px-5 py-7 md:px-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 text-center md:mb-16">
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-neutral-500 md:mb-4 md:text-sm md:tracking-[0.35em]">
            Collections
          </p>
          <h2 className="text-2xl md:text-5xl">Signature Silver Pieces</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-10">
          {collections.map((item) => (
            <CollectionCard key={item.title} item={item} />
          ))}
        </div>

        <div className="mt-7 text-center md:mt-14">
          <a
            href="/collections"
            className="inline-block rounded-full bg-[#2e2a27] px-7 py-4 text-xs uppercase tracking-[0.18em] text-white transition hover:bg-black md:px-9 md:text-sm md:tracking-[0.25em]"
          >
            See All Collections
          </a>
        </div>
      </div>
    </section>
  );
}
