import { createFileRoute, Link } from "@tanstack/react-router";
import desktop from "@/assets/hero-desktop.mp4.asset.json";
import mobile from "@/assets/hero-mobile.mp4.asset.json";
import poster from "@/assets/hero-poster.jpg";
import ambience from "@/assets/ambience.jpg";
import { site } from "@/lib/site";
import { CtaBand, DeliveryBlock, Gallery, HoursBlock, ReviewsBlock, SectionHead } from "@/components/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cafe Jeera Harpenden — The Best Indian Restaurant" },
      { name: "description", content: "Quality Indian cuisine, warm hospitality and a memorable dining experience at 36 Station Rd, Harpenden." },
      { property: "og:title", content: "Cafe Jeera Harpenden — The Best Indian Restaurant" },
      { property: "og:description", content: "Quality Indian cuisine, warm hospitality and a memorable dining experience in Harpenden." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        <video className="absolute inset-0 hidden h-full w-full object-cover md:block" autoPlay muted loop playsInline poster={poster} src={desktop.url} />
        <video className="absolute inset-0 h-full w-full object-cover md:hidden" autoPlay muted loop playsInline poster={poster} src={mobile.url} />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center fade-up">
          <p className="eyebrow">Authentic Indian Food</p>
          <h1 className="mt-6 text-7xl tracking-[0.12em] text-cream md:text-[9rem] md:leading-none">CAFE JEERA</h1>
          <p className="mt-4 text-sm uppercase tracking-[0.4em] text-cream/90 md:text-base">The Best Indian Restaurant</p>
          <p className="mt-6 max-w-xl text-cream/80">Quality Indian cuisine, warm hospitality and a memorable dining experience in Harpenden.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/reservation" className="btn-gold">Reserve a Table</Link>
            <Link to="/menu" className="btn-ghost">Explore Our Menu</Link>
            <a href={site.orderUrl} className="btn-ghost">Order Online</a>
          </div>
          <p className="absolute bottom-10 text-[0.65rem] tracking-[0.4em] text-cream/70">QUALITY • FLAVOUR • EXPERIENCE</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 md:grid-cols-2">
        <img src={ambience} alt="Dining room ambience" loading="lazy" width={1200} height={1504} className="aspect-[4/5] w-full object-cover" />
        <div>
          <SectionHead eyebrow="Our Story" title="About Cafe Jeera" />
          <p className="mt-8 font-display text-2xl leading-relaxed text-cream/90">{site.positioning}</p>
          <Link to="/about" className="btn-ghost mt-10">Discover Cafe Jeera</Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <SectionHead eyebrow="Gallery" title="A Taste of Cafe Jeera" />
        <div className="mt-12"><Gallery /></div>
      </section>

      <section className="border-y bg-card px-6 py-28">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHead eyebrow="Recognition" title="Our Credentials" center />
          <p className="mt-8 font-display text-2xl text-cream/90">{site.credentials}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {site.externalLinks.map((l) => <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="btn-ghost">{l.label}</a>)}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-28 md:grid-cols-2">
        <DeliveryBlock />
        <div className="grid gap-6">
          <HoursBlock />
          <div className="border p-10">
            <p className="eyebrow">Find Cafe Jeera</p>
            <p className="mt-4 font-display text-3xl">{site.address}</p>
            <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm text-gold">Get directions →</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <SectionHead eyebrow="Reviews" title="What Our Customers Say" />
        <div className="mt-12"><ReviewsBlock /></div>
      </section>

      <CtaBand />
    </>
  );
}
