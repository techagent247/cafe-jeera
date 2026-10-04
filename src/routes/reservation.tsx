import { createFileRoute, Link } from "@tanstack/react-router";
import img from "@/assets/ambience.jpg";
import { site, menu } from "@/lib/site";
import { PageHero } from "@/components/SiteChrome";
import { CtaBand, DeliveryBlock, EnquiryForm, Gallery, HoursBlock, ReviewsBlock } from "@/components/Sections";

void Link; void menu; void CtaBand; void DeliveryBlock; void EnquiryForm; void Gallery; void HoursBlock; void ReviewsBlock; void site;

export const Route = createFileRoute("/reservation")({
  head: () => ({
    meta: [
      { title: "Reserve Your Table — Cafe Jeera Harpenden" },
      { name: "description", content: "Request a table at Cafe Jeera, 36 Station Rd, Harpenden." },
      { property: "og:title", content: "Reserve Your Table — Cafe Jeera Harpenden" },
      { property: "og:description", content: "Request a table at Cafe Jeera, 36 Station Rd, Harpenden." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Reserve" title="Reserve Your Table" image={img} />
      <section className="mx-auto grid max-w-6xl gap-16 px-6 py-28 md:grid-cols-[1fr_2fr]"><div><p className="eyebrow">Book</p><p className="mt-4 font-display text-3xl">Prefer to call?</p><a href={site.phoneHref} className="mt-2 block text-gold">{site.phone}</a><div className="mt-8"><HoursBlock /></div></div><EnquiryForm kind="reservation" /></section>
    </>
  );
}
