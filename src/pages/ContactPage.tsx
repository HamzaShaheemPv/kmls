import { Link } from "react-router-dom";
import { PageShell } from "../components/PageShell";
import { company } from "../data/company";

export function ContactPage() {
  return (
    <PageShell
      label="Contact Us"
      title="Get in touch"
      lede="Questions about our products, partnerships, or company information — we are here to help."
    >
      <section className="section reveal" aria-labelledby="contact-details">
        <h2 className="content-heading" id="contact-details">
          Reach Kalimates
        </h2>
        <p className="prose">
          You can contact {company.name} using the details below. We aim to
          respond to enquiries as promptly as possible during business hours.
        </p>

        <div className="contact-grid">
          <article className="contact-card">
            <h3 className="contact-card__label">Phone</h3>
            <p className="contact-card__value">
              <a href={`tel:${company.phoneTel}`}>{company.phone}</a>
            </p>
          </article>

          <article className="contact-card">
            <h3 className="contact-card__label">Email</h3>
            <p className="contact-card__value">
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
          </article>

          <article className="contact-card contact-card--wide">
            <h3 className="contact-card__label">Registered office</h3>
            <address className="contact-card__value contact-card__address">
              {company.name}
              <br />
              {company.address.line1}
              <br />
              {company.address.line2}
              <br />
              {company.address.line3}
            </address>
          </article>
        </div>
      </section>

      <section
        className="section section--tight reveal"
        aria-labelledby="contact-legal"
      >
        <h2 className="content-heading" id="contact-legal">
          Legal &amp; privacy
        </h2>
        <p className="prose">
          For privacy-related requests, please email{" "}
          <a href={`mailto:${company.email}`}>{company.email}</a> with the
          subject line &ldquo;Privacy Request&rdquo;. You can also review our{" "}
          <Link className="text-link" to="/privacy">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link className="text-link" to="/terms">
            Terms of Service
          </Link>
          .
        </p>
      </section>
    </PageShell>
  );
}
