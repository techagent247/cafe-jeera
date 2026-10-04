import { createFileRoute, Link } from "@tanstack/react-router";
import img from "@/assets/g2.jpg";
import { site, menu } from "@/lib/site";
import { PageHero } from "@/components/SiteChrome";
import { CtaBand, DeliveryBlock, EnquiryForm, Gallery, HoursBlock, ReviewsBlock } from "@/components/Sections";

void Link; void menu; void CtaBand; void DeliveryBlock; void EnquiryForm; void Gallery; void HoursBlock; void ReviewsBlock; void site;

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Cafe Jeera Harpenden" },
      { name: "description", content: "Explore the Indian menu at Cafe Jeera Harpenden and order online." },
      { property: "og:title", content: "Menu — Cafe Jeera Harpenden" },
      { property: "og:description", content: "Explore the Indian menu at Cafe Jeera Harpenden and order online." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Our Menu" title="Menu" image={img} />
      <section className="mx-auto max-w-5xl px-6 py-28">{menu.length ? (<div className="grid gap-8 md:grid-cols-2">{menu.map((m) => (<div key={m.name} className="border-b pb-4"><div className="flex justify-between font-display text-2xl"><span>{m.name}</span><span className="text-gold">{m.price}</span></div><p className="text-sm text-muted-foreground">{m.description}</p></div>))}</div>) : (<div className="border p-16 text-center"><p className="eyebrow">Explore our menu</p><p className="mt-4 font-display text-5xl">Menu Coming Soon</p><p className="mt-4 text-muted-foreground">In the meantime, browse our full menu and order online.</p><a href={site.orderUrl} className="btn-gold mt-8">Order Online</a></div>)}</section><section className="mx-auto max-w-5xl px-6 pb-28"><DeliveryBlock /></section>
    </>
  );
}
