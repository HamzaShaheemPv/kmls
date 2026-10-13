import { Link } from "react-router-dom";
import { PageShell } from "../components/PageShell";
import { company } from "../data/company";

export function PrivacyPage() {
  return (
    <PageShell
      label="Legal"
      title="Privacy Policy"
      lede="How Kalimates Private Limited collects, uses, and protects information when you use our websites and applications."
      narrow
    >
      <article className="section legal reveal">
        <p className="legal__updated">Last updated: 13 October 2026</p>

        <section className="legal__block">
          <h2>1. Introduction</h2>
          <p>
            This Privacy Policy explains how {company.name} (&ldquo;Kalimates&rdquo;,
            &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) handles
            personal information in connection with our website at{" "}
            <a href={company.website}>{company.website}</a>, our Picknick app
            (for discovering picnic spots), and other applications or digital
            services we provide (collectively, the &ldquo;Services&rdquo;).
          </p>
          <p>
            By using our Services, you agree to the practices described in this
            policy. If you do not agree, please do not use the Services.
          </p>
        </section>

        <section className="legal__block">
          <h2>2. Information we collect</h2>
          <p>Depending on how you interact with us, we may collect:</p>
          <ul>
            <li>
              <strong>Contact details</strong> you provide, such as name, email
              address, and phone number when you reach out to us.
            </li>
            <li>
              <strong>Account or profile information</strong> if an application
              requires registration.
            </li>
            <li>
              <strong>Usage and device data</strong>, such as app interactions,
              approximate location (if enabled), device type, operating system,
              and diagnostic logs.
            </li>
            <li>
              <strong>Content you submit</strong> within an application or via
              support channels.
            </li>
          </ul>
        </section>

        <section className="legal__block">
          <h2>3. How we use information</h2>
          <p>We use information to:</p>
          <ul>
            <li>Provide, maintain, and improve the Services</li>
            <li>Respond to enquiries and provide customer support</li>
            <li>Send important notices about updates or security</li>
            <li>Analyse performance and fix bugs</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>
            We do not sell your personal information to third parties.
          </p>
        </section>

        <section className="legal__block">
          <h2>4. Sharing of information</h2>
          <p>We may share information with:</p>
          <ul>
            <li>
              Service providers who help us host, analyse, or support the
              Services, under appropriate confidentiality terms
            </li>
            <li>
              Authorities when required by law or to protect rights, safety, or
              security
            </li>
            <li>
              Successor entities in connection with a merger, acquisition, or
              corporate restructuring
            </li>
          </ul>
        </section>

        <section className="legal__block">
          <h2>5. Data retention &amp; security</h2>
          <p>
            We retain information only as long as needed for the purposes
            described above, or as required by law. We apply reasonable
            technical and organisational measures to protect personal data;
            however, no method of transmission or storage is completely secure.
          </p>
        </section>

        <section className="legal__block">
          <h2>6. Your choices</h2>
          <p>
            Depending on applicable law, you may request access to, correction
            of, or deletion of personal information we hold about you. You may
            also withdraw consent where processing is based on consent, or
            disable certain device permissions in your settings.
          </p>
          <p>
            To make a privacy request, email{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a> or write to
            us at the address below.
          </p>
        </section>

        <section className="legal__block">
          <h2>7. Children</h2>
          <p>
            Our Services are not directed to children under 13 (or the
            equivalent minimum age in your jurisdiction). We do not knowingly
            collect personal information from children. If you believe a child
            has provided us information, please contact us so we can delete it.
          </p>
        </section>

        <section className="legal__block">
          <h2>8. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The
            &ldquo;Last updated&rdquo; date at the top will reflect the latest
            revision. Continued use of the Services after changes means you
            accept the updated policy.
          </p>
        </section>

        <section className="legal__block">
          <h2>9. Contact</h2>
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
            See also our{" "}
            <Link className="text-link" to="/terms">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link className="text-link" to="/contact">
              Contact Us
            </Link>{" "}
            page.
          </p>
        </section>
      </article>
    </PageShell>
  );
}
