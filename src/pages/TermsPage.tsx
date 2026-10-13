import { Link } from "react-router-dom";
import { PageShell } from "../components/PageShell";
import { company } from "../data/company";

export function TermsPage() {
  return (
    <PageShell
      label="Legal"
      title="Terms of Service"
      lede="The terms that govern your use of Kalimates websites, applications, and related digital services."
      narrow
    >
      <article className="section legal reveal">
        <p className="legal__updated">Last updated: 13 October 2026</p>

        <section className="legal__block">
          <h2>1. Agreement</h2>
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) form a binding agreement
            between you and {company.name} (&ldquo;Kalimates&rdquo;,
            &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) regarding
            your access to and use of our website at{" "}
            <a href={company.website}>{company.website}</a>, our Picknick app,
            and any other applications or digital services we operate (the
            &ldquo;Services&rdquo;).
          </p>
          <p>
            By accessing or using the Services, you accept these Terms. If you
            do not agree, do not use the Services.
          </p>
        </section>

        <section className="legal__block">
          <h2>2. Eligibility</h2>
          <p>
            You must be legally able to enter a binding contract in your
            jurisdiction to use the Services. If you use the Services on behalf
            of an organisation, you represent that you have authority to bind
            that organisation to these Terms.
          </p>
        </section>

        <section className="legal__block">
          <h2>3. Use of the Services</h2>
          <p>You agree to use the Services only for lawful purposes. You must not:</p>
          <ul>
            <li>Interfere with or disrupt the Services or related infrastructure</li>
            <li>Attempt unauthorised access to accounts, systems, or data</li>
            <li>Reverse engineer or copy the Services except as allowed by law</li>
            <li>Use the Services to distribute malware or harmful content</li>
            <li>Misrepresent your identity or affiliation with Kalimates</li>
          </ul>
        </section>

        <section className="legal__block">
          <h2>4. Accounts</h2>
          <p>
            Some Services may require an account. You are responsible for
            safeguarding your credentials and for activity under your account.
            Notify us promptly at{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a> if you
            suspect unauthorised use.
          </p>
        </section>

        <section className="legal__block">
          <h2>5. Intellectual property</h2>
          <p>
            The Services, including software, branding, text, graphics, and
            other content, are owned by {company.name} or its licensors and are
            protected by applicable intellectual property laws. These Terms do
            not transfer ownership of any intellectual property to you.
          </p>
          <p>
            You may not use Kalimates names, logos, or marks without our prior
            written permission.
          </p>
        </section>

        <section className="legal__block">
          <h2>6. Third-party services</h2>
          <p>
            The Services may link to or integrate with third-party websites or
            platforms. We are not responsible for third-party content, policies,
            or practices. Your use of third-party services is governed by their
            own terms.
          </p>
        </section>

        <section className="legal__block">
          <h2>7. Disclaimers</h2>
          <p>
            The Services are provided on an &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo; basis. To the fullest extent permitted by law, we
            disclaim warranties of merchantability, fitness for a particular
            purpose, and non-infringement. We do not guarantee that the Services
            will be uninterrupted, error-free, or free of harmful components.
          </p>
        </section>

        <section className="legal__block">
          <h2>8. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, {company.name} and its
            directors, officers, and employees shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages,
            or any loss of profits, data, or goodwill, arising from your use of
            the Services.
          </p>
          <p>
            Our total liability for any claim arising out of these Terms or the
            Services shall not exceed the amount you paid us (if any) for the
            Services in the twelve months preceding the claim.
          </p>
        </section>

        <section className="legal__block">
          <h2>9. Termination</h2>
          <p>
            We may suspend or terminate access to the Services if you violate
            these Terms or if we discontinue a Service. You may stop using the
            Services at any time. Provisions that by their nature should survive
            termination will remain in effect.
          </p>
        </section>

        <section className="legal__block">
          <h2>10. Governing law</h2>
          <p>
            These Terms are governed by the laws of India. Courts in Kerala,
            India shall have exclusive jurisdiction over disputes arising from
            these Terms, subject to any mandatory consumer protections that
            apply to you.
          </p>
        </section>

        <section className="legal__block">
          <h2>11. Changes</h2>
          <p>
            We may update these Terms periodically. The &ldquo;Last
            updated&rdquo; date indicates the latest revision. Continued use
            after changes constitutes acceptance of the revised Terms.
          </p>
        </section>

        <section className="legal__block">
          <h2>12. Contact</h2>
          <p>
            {company.name}
            <br />
            {company.address.full}
            <br />
            Phone:{" "}
            <a href={`tel:${company.phoneTel}`}>{company.phone}</a>
            <br />
            Email:{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
          <p>
            Related pages:{" "}
            <Link className="text-link" to="/privacy">
              Privacy Policy
            </Link>
            {" · "}
            <Link className="text-link" to="/contact">
              Contact Us
            </Link>
            {" · "}
            <Link className="text-link" to="/about">
              About Us
            </Link>
          </p>
        </section>
      </article>
    </PageShell>
  );
}
