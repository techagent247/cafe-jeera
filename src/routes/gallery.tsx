import { createFileRoute, Link } from "@tanstack/react-router";
import img from "@/assets/g3.jpg";
import { site, menu } from "@/lib/site";
import { PageHero } from "@/components/SiteChrome";
import { CtaBand, DeliveryBlock, EnquiryForm, Gallery, HoursBlock, ReviewsBlock } from "@/components/Sections";

void Link; void menu; void CtaBand; void DeliveryBlock; void EnquiryForm; void Gallery; void HoursBlock; void ReviewsBlock; void site;

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "A Taste of Cafe Jeera — Cafe Jeera Harpenden" },
      { name: "description", content: "Food and dining imagery from Cafe Jeera Harpenden." },
      { property: "og:title", content: "A Taste of Cafe Jeera — Cafe Jeera Harpenden" },
      { property: "og:description", content: "Food and dining imagery from Cafe Jeera Harpenden." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="A Taste of Cafe Jeera" image={img} />
      <section className="mx-auto max-w-7xl px-6 py-28"><Gallery /></section>
    </>
  );
}
