// Single source of truth for verified Cafe Jeera content. Add menu items, reviews,
// credentials and weekly hours here only when supplied by the restaurant.
export const site = {
  name: "Cafe Jeera Harpenden",
  address: "36 Station Rd, Harpenden AL5 4ST",
  phone: "01582 766954",
  phoneHref: "tel:01582766954",
  email: "cafejeeraenewsletter@gmail.com",
  orderUrl: "https://www.cafejeeraharpenden.co.uk/order-online",
  positioning:
    "We have worked hard to build an excellent reputation for supplying the highest quality service whilst keeping our prices at a competitive level.",
  credentials:
    "Over the years we have earned numerous awards and recognitions that earned us the title for being The Best Restaurant.",
  delivery: { charge: "£3", radius: "Up to a 4 mile radius" },
  displayedHours: "6:00 PM – 11:00 PM",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=36+Station+Rd+Harpenden+AL5+4ST",
  externalLinks: [
    { label: "Facebook", href: "https://www.facebook.com/search/top?q=cafe%20jeera%20harpenden" },
    { label: "TripAdvisor", href: "https://www.tripadvisor.co.uk/Search?q=cafe%20jeera%20harpenden" },
    { label: "Yelp", href: "https://www.yelp.co.uk/search?find_desc=cafe+jeera&find_loc=Harpenden" },
  ],
};

export type MenuItem = { name: string; description?: string; price?: string; category: string };
export const menu: MenuItem[] = [];
export type Review = { name: string; text: string; rating?: number; source?: string };
export const reviews: Review[] = [];
