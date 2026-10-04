import { createFileRoute, Link } from "@tanstack/react-router";
import img from "@/assets/hero-poster.jpg";
import { site, menu } from "@/lib/site";
import { PageHero } from "@/components/SiteChrome";
import { CtaBand, DeliveryBlock, EnquiryForm, Gallery, HoursBlock, ReviewsBlock } from "@/components/Sections";

void Link; void menu; void CtaBand; void DeliveryBlock; void EnquiryForm; void Gallery; void HoursBlock; void ReviewsBlock; void site;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Cafe Jeera Harpenden" },
      { name: "description", content: "Contact Cafe Jeera: 36 Station Rd, Harpenden AL5 4ST. Call 01582 766954." },
      { property: "og:title", content: "Contact — Cafe Jeera Harpenden" },
      { property: "og:description", content: "Contact Cafe Jeera: 36 Station Rd, Harpenden AL5 4ST. Call 01582 766954." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Cafe Jeera Harpenden" image={img} />
      <section className="mx-auto grid max-w-6xl gap-16 px-6 py-28 md:grid-cols-[1fr_2fr]"><div className="space-y-6"><div><p className="eyebrow">Address</p><p className="mt-2 font-display text-2xl">{site.address}</p><a href={site.mapsUrl} target="_blank" rel="noreferrer" className="text-sm text-gold">Get directions →</a></div><div><p className="eyebrow">Phone</p><a href={site.phoneHref} className="mt-2 block font-display text-2xl">{site.phone}</a></div><div><p className="eyebrow">Email</p><a href={`mailto:${site.email}`} className="mt-2 block break-all">{site.email}</a></div><HoursBlock /></div><div><EnquiryForm kind="contact" /><iframe title="Map" className="mt-8 h-72 w-full border-0 grayscale" loading="lazy" src="https://www.google.com/maps?q=36+Station+Rd+Harpenden+AL5+4ST&output=embed" /></div></section>
    </>
  );
}
