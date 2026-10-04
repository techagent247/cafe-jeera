import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { site } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/reservation", label: "Reservation" },
  { to: "/reviews", label: "Reviews" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? "bg-charcoal/95 shadow-lg backdrop-blur" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="leading-none text-cream">
          <span className="block font-display text-2xl tracking-[0.18em]">CAFE JEERA</span>
          <span className="eyebrow !text-[0.6rem]">Harpenden</span>
        </Link>
        <nav className="hidden gap-7 lg:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-xs uppercase tracking-[0.2em] text-cream/80 hover:text-gold" activeProps={{ className: "!text-gold" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={site.orderUrl} className="btn-ghost !px-4 !py-2.5">Order Online</a>
          <Link to="/reservation" className="btn-gold !px-4 !py-2.5">Reserve a Table</Link>
        </div>
        <button className="text-cream lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 px-6 pb-6 lg:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="font-display text-2xl text-cream">{n.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t bg-charcoal/95 text-center text-[0.65rem] uppercase tracking-[0.18em] text-cream backdrop-blur lg:hidden">
      <a href={site.phoneHref} className="flex items-center justify-center gap-1 py-4"><Phone className="h-3 w-3" />Call</a>
      <Link to="/reservation" className="bg-gold py-4 text-primary-foreground">Reserve</Link>
      <a href={site.orderUrl} className="py-4">Order</a>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t bg-charcoal px-6 pb-28 pt-20 lg:pb-12">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-4xl tracking-[0.15em]">CAFE JEERA</p>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">Quality Indian cuisine, warm hospitality and a memorable dining experience in Harpenden.</p>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="eyebrow mb-3">Visit</p>
          <p>{site.address}</p>
          <a href={site.phoneHref} className="block hover:text-gold">{site.phone}</a>
          <a href={`mailto:${site.email}`} className="block break-all hover:text-gold">{site.email}</a>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="eyebrow mb-3">Explore</p>
          {nav.slice(1).map((n) => <Link key={n.to} to={n.to} className="block hover:text-gold">{n.label}</Link>)}
          <a href={site.orderUrl} className="block hover:text-gold">Order Online</a>
        </div>
      </div>
      <p className="mx-auto mt-16 max-w-7xl text-xs text-muted-foreground">© {new Date().getFullYear()} {site.name}</p>
    </footer>
  );
}

export function PageHero({ eyebrow, title, image }: { eyebrow: string; title: string; image: string }) {
  return (
    <section className="relative flex h-[60vh] min-h-[420px] items-end overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 fade-up">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 text-6xl text-cream md:text-8xl">{title}</h1>
      </div>
    </section>
  );
}
