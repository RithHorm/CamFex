export interface NavLink {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href?: string;
  dropdown?: NavLink[];
}

/** Primary navigation — six items, per build plan §5.1. Do not add a seventh. */
export const primaryNav: NavItem[] = [
  {
    label: "The Show",
    dropdown: [
      { label: "About CamFEX", href: "/the-show" },
      { label: "Why Cambodia", href: "/why-cambodia" },
      { label: "Venue & Travel", href: "/venue" },
      { label: "News", href: "/news" },
    ],
  },
  {
    label: "Six Shows",
    dropdown: [
      { label: "Rice & Grains", href: "/shows/rice-grains" },
      { label: "Fresh", href: "/shows/fresh" },
      { label: "Processed & Packaged", href: "/shows/processed-packaged" },
      { label: "Drinks", href: "/shows/drinks" },
      { label: "Protein", href: "/shows/protein" },
      { label: "Tech & Packaging", href: "/shows/tech-packaging" },
    ],
  },
  { label: "Programmes", href: "/programmes" },
  {
    label: "Exhibit",
    dropdown: [
      { label: "Why exhibit", href: "/exhibit" },
      { label: "Space & pricing", href: "/exhibit/pricing" },
      { label: "Book a stand", href: "/exhibit/book" },
      { label: "Sponsorship", href: "/sponsor" },
      { label: "Exhibitor portal", href: "/portal" },
    ],
  },
  {
    label: "Visit",
    dropdown: [
      { label: "Trade visitor", href: "/visit" },
      { label: "Hosted Buyer Programme", href: "/visit/hosted-buyer" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const persistentCtas = {
  primary: { label: "Book a stand", href: "/exhibit/book" },
  secondary: { label: "Register to visit", href: "/visit" },
};

/** Footer columns, per build plan §5.4. */
export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "The show",
    links: [
      { label: "About CamFEX", href: "/the-show" },
      { label: "Why Cambodia", href: "/why-cambodia" },
      { label: "Six Shows", href: "/shows" },
      { label: "Programmes", href: "/programmes" },
      { label: "Venue & Travel", href: "/venue" },
      { label: "News", href: "/news" },
      { label: "CamFEX Connect", href: "/connect" },
    ],
  },
  {
    title: "Exhibit",
    links: [
      { label: "Why exhibit", href: "/exhibit" },
      { label: "Space & pricing", href: "/exhibit/pricing" },
      { label: "Book a stand", href: "/exhibit/book" },
      { label: "Sponsorship", href: "/sponsor" },
      { label: "Exhibitor portal", href: "/portal" },
      { label: "Exhibitor terms", href: "/legal/exhibitor-terms" },
    ],
  },
  {
    title: "Visit",
    links: [
      { label: "Trade visitor", href: "/visit" },
      { label: "Hosted Buyer Programme", href: "/visit/hosted-buyer" },
      { label: "Press & media", href: "/press" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const footerLegalLinks: NavLink[] = [
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Cookies", href: "/legal/cookies" },
  { label: "Terms", href: "/legal/exhibitor-terms" },
];
