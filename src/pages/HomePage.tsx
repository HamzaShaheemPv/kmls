import { Link } from "react-router-dom";
import { useEffect } from "react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNav } from "../components/SiteNav";
import { company } from "../data/company";
import { useReveal } from "../hooks/useReveal";

export function HomePage() {
  const rootRef = useReveal();

  useEffect(() => {
    if (window.location.hash === "#products") {
      document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="site" ref={rootRef}>
      <header className="hero" id="top">
        <div className="hero__media" aria-hidden="true">
          <div className="hero__shade" />
        </div>

        <SiteNav />

        <div className="hero__content">
          <h1 className="hero__brand">Kalimates</h1>
          <p className="hero__headline">
            Ideas, shaped into applications that simplify life.
          </p>
          <p className="hero__lede">
            Innovation-driven solutions built with creativity, technology, and
            purpose — designed around people.
          </p>
          <div className="hero__actions">
            <Link className="btn btn--primary" to="/about">
              About Us
            </Link>
            <a className="btn btn--ghost" href="#products">
              Our products
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="about-band" id="about" aria-labelledby="about-title">
          <div className="section reveal">
            <p className="section__label">About</p>
            <h2 className="section__title" id="about-title">
              Meaningful technology for everyday living
            </h2>
            <p className="section__body">
              {company.name} is an innovation-driven company focused on
              transforming ideas and emerging concepts into smart, practical
              applications that simplify everyday life. We combine creativity,
              technology, and purpose to build solutions that are meaningful,
              convenient, and designed around people.
            </p>
            <p className="section__cta">
              <Link className="text-link" to="/about">
                Read more about us
              </Link>
            </p>
          </div>
        </section>

        <section id="products" aria-labelledby="products-title">
          <div className="section reveal">
            <p className="section__label">Products &amp; Apps</p>
            <h2 className="section__title" id="products-title">
              Built to make life simpler
            </h2>
            <p className="section__body">
              Kalimates designs and develops applications that put convenience
              and clarity first — including Picknick, our app for discovering
              picnic spots.
            </p>
            <div className="products">
              {company.products.map((product) => (
                <article className="product" key={product.name}>
                  <p className="product__focus">{product.focus}</p>
                  <h3 className="product__name">{product.name}</h3>
                  <p className="product__summary">{product.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="vision" aria-labelledby="vision-title">
          <div className="section vision reveal">
            <div>
              <p className="section__label">Our Vision</p>
              <h2 className="section__title" id="vision-title">
                Simpler. Smarter. More convenient.
              </h2>
            </div>
            <blockquote className="vision__quote">
              <span className="vision__mark" aria-hidden="true" />
              To transform innovative ideas into impactful applications that
              make life simpler, smarter, and more convenient.
            </blockquote>
          </div>
        </section>

        <section
          className="leadership-band"
          id="leadership"
          aria-labelledby="leadership-title"
        >
          <div className="section reveal">
            <p className="section__label">Leadership</p>
            <h2 className="section__title" id="leadership-title">
              Guided by purpose and practical vision
            </h2>
            <div className="leaders">
              {company.leadership.map((person) => (
                <article className="leader" key={person.name}>
                  <h3 className="leader__name">{person.name}</h3>
                  <p className="leader__role">{person.role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-band" aria-labelledby="home-contact-title">
          <div className="section reveal">
            <p className="section__label">Contact</p>
            <h2 className="section__title" id="home-contact-title">
              We&apos;d love to hear from you
            </h2>
            <p className="section__body">
              Reach {company.name} by phone, email, or visit our registered
              office in Kottakkal, Kerala.
            </p>
            <div className="contact-strip">
              <a className="btn btn--primary" href={`tel:${company.phoneTel}`}>
                Call {company.phone}
              </a>
              <Link className="btn btn--outline" to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
