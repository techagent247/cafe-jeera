import { Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { site, reviews } from "@/lib/site";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import poster from "@/assets/hero-poster.jpg";
import ambience from "@/assets/ambience.jpg";

export const galleryImages = [
  { src: g1, alt: "Sizzling tandoori dish" },
  { src: ambience, alt: "Candlelit dining room" },
  { src: g2, alt: "Biryani in a brass pot" },
  { src: g3, alt: "Whole Indian spices" },
  { src: poster, alt: "Indian feast spread" },
];

export function SectionHead({ eyebrow, title, center }: { eyebrow: string; title: string; center?: boolean }) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-5xl md:text-6xl">{title}</h2>
    </div>
  );
}

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <>
      <div className="columns-2 gap-4 md:columns-3 [&>*]:mb-4">
        {galleryImages.map((g) => (
          <button key={g.alt} onClick={() => setOpen(g.src)} className="group block w-full overflow-hidden">
            <img src={g.src} alt={g.alt} loading="lazy" className="w-full transition-transform duration-700 group-hover:scale-105" />
          </button>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">Illustrative imagery — restaurant photography coming soon.</p>
      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/95 p-6" onClick={() => setOpen(null)}>
          <img src={open} alt="" className="max-h-full max-w-full" />
        </div>
      )}
    </>
  );
}

export function DeliveryBlock() {
  return (
    <div className="border p-10 text-center md:p-16">
      <p className="eyebrow">Delivery</p>
      <p className="mt-4 font-display text-7xl text-gold">{site.delivery.charge} Delivery</p>
      <p className="mt-2 text-lg text-muted-foreground">{site.delivery.radius}</p>
      <a href={site.orderUrl} className="btn-gold mt-8">Order Now</a>
    </div>
  );
}

export function HoursBlock() {
  return (
    <div className="border p-10">
      <p className="eyebrow">Opening Hours</p>
      <p className="mt-4 font-display text-4xl">{site.displayedHours}</p>
      <p className="mt-3 text-sm text-muted-foreground">Hours can vary by day. Please call {site.phone} to confirm today's opening times.</p>
    </div>
  );
}

export function ReviewsBlock() {
  return reviews.length ? (
    <div className="grid gap-6 md:grid-cols-3">
      {reviews.map((r) => (
        <figure key={r.name} className="border bg-card p-8"><blockquote className="font-display text-xl">“{r.text}”</blockquote><figcaption className="mt-4 eyebrow">{r.name}</figcaption></figure>
      ))}
    </div>
  ) : (
    <div className="border p-10 text-center">
      <p className="text-muted-foreground">Read what guests say about us on:</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {site.externalLinks.map((l) => <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="btn-ghost">{l.label}</a>)}
      </div>
    </div>
  );
}

export function EnquiryForm({ kind }: { kind: "reservation" | "contact" }) {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true); };
  if (sent)
    return (
      <div className="border p-10 text-center">
        <p className="font-display text-3xl">Thank you.</p>
        <p className="mt-3 text-muted-foreground">
          {kind === "reservation" ? "Your reservation request has been received. The restaurant will confirm availability." : "Your message has been received. The team will be in touch."}
        </p>
      </div>
    );
  return (
    <form onSubmit={submit} className="grid gap-4 md:grid-cols-2">
      <input required className="field" placeholder="Name" />
      <input required type="email" className="field" placeholder="Email" />
      <input required type="tel" className="field" placeholder="Phone" />
      {kind === "reservation" ? (
        <>
          <input required min={1} type="number" className="field" placeholder="Number of guests" />
          <input required type="date" className="field" />
          <input required type="time" className="field" />
          <textarea className="field md:col-span-2" rows={4} placeholder="Special requests" />
        </>
      ) : (
        <>
          <input className="field" placeholder="Subject" />
          <textarea required className="field md:col-span-2" rows={5} placeholder="Message" />
        </>
      )}
      <button className="btn-gold md:col-span-2">{kind === "reservation" ? "Request a Reservation" : "Send Message"}</button>
    </form>
  );
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden px-6 py-28 text-center">
      <img src={poster} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="relative">
        <SectionHead eyebrow="Enjoy Cafe Jeera at home" title="Order Online" center />
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href={site.orderUrl} className="btn-gold">Order Now</a>
          <Link to="/reservation" className="btn-ghost">Reserve a Table</Link>
        </div>
      </div>
    </section>
  );
}
