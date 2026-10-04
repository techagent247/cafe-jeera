import { createFileRoute, Link } from "@tanstack/react-router";
import img from "@/assets/g1.jpg";
import { site, menu } from "@/lib/site";
import { PageHero } from "@/components/SiteChrome";
import { CtaBand, DeliveryBlock, EnquiryForm, Gallery, HoursBlock, ReviewsBlock } from "@/components/Sections";

void Link; void menu; void CtaBand; void DeliveryBlock; void EnquiryForm; void Gallery; void HoursBlock; void ReviewsBlock; void site;

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "What Our Customers Say — Cafe Jeera Harpenden" },
      { name: "description", content: "Guest reviews of Cafe Jeera Harpenden." },
      { property: "og:title", content: "What Our Customers Say — Cafe Jeera Harpenden" },
      { property: "og:description", content: "Guest reviews of Cafe Jeera Harpenden." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Reviews" title="What Our Customers Say" image={img} />
      <section className="mx-auto max-w-5xl px-6 py-28"><ReviewsBlock /></section><CtaBand />
    </>
  );
}
