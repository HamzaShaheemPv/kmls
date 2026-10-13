import { Link, NavLink } from "react-router-dom";

type SiteNavProps = {
  variant?: "hero" | "page";
};

const links = [
  { to: "/about", label: "About" },
  { to: "/#products", label: "Products", hash: true },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav({ variant = "hero" }: SiteNavProps) {
  return (
    <nav
      className={`nav ${variant === "page" ? "nav--page" : ""}`}
      aria-label="Primary"
    >
      <Link className="nav__brand" to="/">
        Kalimates
      </Link>
      <ul className="nav__links">
        {links.map((link) => (
          <li key={link.to}>
            {"hash" in link && link.hash ? (
              <a href={link.to}>{link.label}</a>
            ) : (
              <NavLink
                to={link.to}
                className={({ isActive }) => (isActive ? "is-active" : undefined)}
              >
                {link.label}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
