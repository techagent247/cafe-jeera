import { createFileRoute, Link } from "@tanstack/react-router";
import img from "@/assets/ambience.jpg";
import { site, menu } from "@/lib/site";
import { PageHero } from "@/components/SiteChrome";
import { CtaBand, DeliveryBlock, EnquiryForm, Gallery, HoursBlock, ReviewsBlock } from "@/components/Sections";

void Link; void menu; void CtaBand; void DeliveryBlock; void EnquiryForm; void Gallery; void HoursBlock; void ReviewsBlock; void site;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Cafe Jeera — Cafe Jeera Harpenden" },
      { name: "description", content: "Our story and approach to quality Indian dining in Harpenden." },
      { property: "og:title", content: "About Cafe Jeera — Cafe Jeera Harpenden" },
      { property: "og:description", content: "Our story and approach to quality Indian dining in Harpenden." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="About" title="About Cafe Jeera" image={img} />
      <section className="mx-auto max-w-3xl px-6 py-28 text-center"><p className="font-display text-3xl leading-relaxed">{site.positioning}</p><p className="mt-8 text-muted-foreground">{site.credentials}</p><div className="mt-10 flex justify-center gap-4"><Link to="/menu" className="btn-gold">Explore Our Menu</Link><Link to="/reservation" className="btn-ghost">Reserve a Table</Link></div></section><CtaBand />
    </>
  );
}
