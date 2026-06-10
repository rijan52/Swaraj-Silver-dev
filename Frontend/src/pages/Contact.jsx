import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const contactDetails = [
  {
    label: "Visit",
    value: "Swaraj Gahana showroom, Kathmandu",
  },
  {
    label: "Call",
    value: "+977 9800000000",
    href: "tel:+9779800000000",
  },
  {
    label: "Email",
    value: "hello@swarajsilver.com",
    href: "mailto:hello@swarajsilver.com",
  },
];

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#faf8f5] font-serif text-[#2e2a27]">
      <section
        className="relative bg-cover bg-center px-5 md:px-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1800&auto=format&fit=crop')",
          minHeight: "340px",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <Navbar />

        <div className="relative z-10 flex min-h-[340px] items-end pb-7 pt-28 md:min-h-[520px] md:pb-20 md:pt-40">
          <div className="max-w-3xl text-white">
            <p className="mb-2 max-w-xs text-[0.65rem] uppercase tracking-[0.2em] text-white/75 md:mb-5 md:max-w-none md:text-sm md:tracking-[0.35em]">
              Contact Swaraj Silver
            </p>
            <h1 className="mb-3 max-w-3xl text-[1.75rem] leading-tight md:mb-6 md:text-6xl">
              Let Us Help You Find the Right Silver Piece
            </h1>
            {/* <p className="max-w-2xl text-sm leading-relaxed text-white/85 md:text-xl">
              Send an enquiry for collections, gifting, bridal silver, or
              showroom visits.
            </p> */}
          </div>
        </div>
      </section>

      <section className="px-5 py-6 md:px-20 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-12">
          <div className="max-w-2xl">
            <p className="mb-2 text-[0.68rem] uppercase tracking-[0.24em] text-neutral-500 md:mb-4 md:text-sm md:tracking-[0.35em]">
              Get in Touch
            </p>
            <h2 className="mb-3 max-w-md text-2xl leading-tight tracking-tight md:mb-6 md:text-5xl lg:max-w-lg">
              Visit, Call, or Send an Enquiry
            </h2>
            <p className="mb-5 max-w-md text-sm leading-relaxed text-neutral-600 md:mb-10 md:text-lg">
              Our team can help with collections, gifting, bridal silver, and
              customized silver designs.
            </p>

            <div className="grid overflow-hidden border border-neutral-200 bg-white">
              {contactDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="border-b border-neutral-200 p-4 last:border-b-0 md:p-5"
                >
                  <div>
                    <p className="mb-1 text-[0.65rem] uppercase tracking-[0.18em] text-neutral-500 md:text-xs">
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="text-sm leading-relaxed transition hover:text-black md:text-lg"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-sm leading-relaxed md:text-lg">{detail.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="border border-neutral-200 bg-white p-3.5 shadow-sm md:p-8 lg:p-10">
            <div className="mb-5 border-b border-neutral-200 pb-4">
              <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                Enquiry Form
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2 md:gap-5">
              <label className="block">
                <span className="mb-1.5 block text-[0.68rem] uppercase tracking-[0.14em] text-neutral-500 md:mb-2 md:text-sm md:tracking-[0.2em]">
                  Name
                </span>
                <input
                  type="text"
                  className="h-10 w-full border border-neutral-200 px-3 text-sm outline-none transition focus:border-neutral-700 md:h-14 md:px-5 md:text-lg"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-[0.68rem] uppercase tracking-[0.14em] text-neutral-500 md:mb-2 md:text-sm md:tracking-[0.2em]">
                  Phone
                </span>
                <input
                  type="tel"
                  className="h-10 w-full border border-neutral-200 px-3 text-sm outline-none transition focus:border-neutral-700 md:h-14 md:px-5 md:text-lg"
                />
              </label>
            </div>

            <label className="mt-3 block md:mt-5">
              <span className="mb-1.5 block text-[0.68rem] uppercase tracking-[0.14em] text-neutral-500 md:mb-2 md:text-sm md:tracking-[0.2em]">
                Email
              </span>
              <input
                type="email"
                className="h-10 w-full border border-neutral-200 px-3 text-sm outline-none transition focus:border-neutral-700 md:h-14 md:px-5 md:text-lg"
              />
            </label>

            <label className="mt-3 block md:mt-5">
              <span className="mb-1.5 block text-[0.68rem] uppercase tracking-[0.14em] text-neutral-500 md:mb-2 md:text-sm md:tracking-[0.2em]">
                Interested In
              </span>
              <select className="h-10 w-full border border-neutral-200 bg-white px-3 text-sm outline-none transition focus:border-neutral-700 md:h-14 md:px-5 md:text-lg">
                <option>Rings</option>
                <option>Earrings</option>
                <option>Bracelets</option>
                <option>Bridal Silver</option>
                <option>Customized Design</option>
                <option>Custom Enquiry</option>
              </select>
            </label>

            <label className="mt-3 block md:mt-5">
              <span className="mb-1.5 block text-[0.68rem] uppercase tracking-[0.14em] text-neutral-500 md:mb-2 md:text-sm md:tracking-[0.2em]">
                Message
              </span>
              <textarea
                rows="3"
                className="w-full resize-none border border-neutral-200 px-3 py-3 text-sm outline-none transition focus:border-neutral-700 md:px-5 md:py-4 md:text-lg"
              />
            </label>

            <button
              type="button"
              className="mt-4 w-full bg-[#2e2a27] px-7 py-3 text-xs uppercase tracking-[0.16em] text-white transition hover:bg-black md:mt-8 md:px-9 md:py-4 md:text-sm md:tracking-[0.25em]"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
