import { Link } from "react-router-dom";
import { company } from "../data/company";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__primary">
          <p className="footer__brand">{company.name}</p>
          <address className="footer__address">
            {company.address.line1}
            <br />
            {company.address.line2}
            <br />
            {company.address.line3}
          </address>
          <p className="footer__contact">
            <a href={`tel:${company.phoneTel}`}>{company.phone}</a>
            <span aria-hidden="true"> · </span>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
        </div>

        <div className="footer__links">
          <p className="footer__links-label">Company</p>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">
          © {new Date().getFullYear()} {company.brand}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
