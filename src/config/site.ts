/**
 * Site information architecture (nav + footer).
 * Header scroll targets use `sectionId` on the home page.
 */

export type NavItem = {
  label: string;
  /** DOM id of the target section */
  sectionId: string;
};

/**
 * Same sections & copy as before — nav labels follow a clear story flow
 * (home → why → who → programs → philosophy → people → contact).
 */
export const PRIMARY_NAV: NavItem[] = [
  { label: "Home", sectionId: "hero" },
  { label: "Why it matters", sectionId: "problem" },
  { label: "About", sectionId: "about" },
  { label: "Programs", sectionId: "our-work" },
  { label: "Philosophy", sectionId: "philosophy" },
  { label: "Team", sectionId: "team" },
  { label: "Contact", sectionId: "contact" },
];

export type FooterColumn = {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
};

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Connect",
    links: [
      { label: "Contact the foundation", href: "#contact" },
      { label: "Email us", href: "mailto:contact@swarnaayu.com" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];
