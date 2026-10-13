import { Link } from "react-router-dom";
import { PageShell } from "../components/PageShell";
import { company } from "../data/company";

export function AboutPage() {
  return (
    <PageShell
      label="About Us"
      title="Ideas shaped into applications"
      lede="Kalimates Private Limited transforms emerging concepts into smart, practical tools designed around people."
    >
      <section className="section reveal" aria-labelledby="about-story">
        <h2 className="content-heading" id="about-story">
          Who we are
        </h2>
        <p className="prose">
          {company.name} is an innovation-driven company based in Kerala, India.
          We focus on turning ideas into digital applications that simplify
          everyday life — combining creativity, technology, and purpose in every
          product we build.
        </p>
        <p className="prose">
          Our work is guided by a simple belief: technology should feel
          meaningful and convenient. Whether we are shaping a new consumer
          experience or refining an existing concept, we design with people at
          the centre.
        </p>
      </section>

      <section
        className="section section--tight reveal"
        aria-labelledby="about-products"
      >
        <h2 className="content-heading" id="about-products">
          What we build
        </h2>
        <p className="prose">
          Kalimates develops applications that make life simpler, smarter, and
          more convenient. Our flagship app, Picknick, helps people discover
          picnic spots for outdoor gatherings and day trips.
        </p>
        <div className="products products--compact">
          {company.products.map((product) => (
            <article className="product" key={product.name}>
              <p className="product__focus">{product.focus}</p>
              <h3 className="product__name">{product.name}</h3>
              <p className="product__summary">{product.summary}</p>
            </article>
          ))}
        </div>
        <p className="section__cta">
          <Link className="text-link" to="/#products">
            View products on the home page
          </Link>
        </p>
      </section>

      <section
        className="section section--tight reveal"
        aria-labelledby="about-vision"
      >
        <h2 className="content-heading" id="about-vision">
          Our vision
        </h2>
        <p className="prose prose--lead">
          To transform innovative ideas into impactful applications that make
          life simpler, smarter, and more convenient.
        </p>
      </section>

      <section
        className="section section--tight reveal"
        aria-labelledby="about-team"
      >
        <h2 className="content-heading" id="about-team">
          Leadership
        </h2>
        <div className="leaders leaders--light">
          {company.leadership.map((person) => (
            <article className="leader leader--light" key={person.name}>
              <h3 className="leader__name">{person.name}</h3>
              <p className="leader__role">{person.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="section section--tight reveal"
        aria-labelledby="about-corp"
      >
        <h2 className="content-heading" id="about-corp">
          Corporate details
        </h2>
        <dl className="detail-list">
          <div>
            <dt>Registered name</dt>
            <dd>{company.name}</dd>
          </div>
          <div>
            <dt>Registered address</dt>
            <dd>{company.address.full}</dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd>
              <a href={`tel:${company.phoneTel}`}>{company.phone}</a>
            </dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </dd>
          </div>
        </dl>
        <p className="section__cta">
          <Link className="btn btn--primary" to="/contact">
            Contact Us
          </Link>
        </p>
      </section>
    </PageShell>
  );
}
