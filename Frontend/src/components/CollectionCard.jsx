export default function CollectionCard({ item }) {
  return (
    <article className="group overflow-hidden border border-neutral-200 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden bg-neutral-100">
        <img
          src={item.image}
          alt={item.title}
          className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[380px]"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1.5 text-[0.65rem] uppercase tracking-[0.18em] text-[#2e2a27] shadow-sm">
          Swaraj Silver
        </span>
      </div>

      <div className="p-5 md:p-7">
        <h3 className="mb-2 text-2xl leading-tight">{item.title}</h3>
        <p className="mb-5 text-sm leading-relaxed text-neutral-600 md:text-base">
          {item.description}
        </p>
        <a
          href="/collections"
          className="inline-flex items-center justify-between gap-4 rounded-full border border-[#2e2a27] px-5 py-3 text-xs uppercase tracking-[0.16em] transition hover:bg-[#2e2a27] hover:text-white"
        >
          <span>View Collection</span>
          <span aria-hidden="true">+</span>
        </a>
      </div>
    </article>
  );
}
