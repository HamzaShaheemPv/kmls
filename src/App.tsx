import { useEffect, useRef } from "react";
import "./App.css";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80";

function useReveal() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const nodes = root.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return rootRef;
}

export default function App() {
  const rootRef = useReveal();

  return (
    <div className="site" ref={rootRef}>
      <header className="hero" id="top">
        <div className="hero__media" aria-hidden="true">
          <img
            src={HERO_IMAGE}
            alt=""
            width={2400}
            height={1600}
            fetchPriority="high"
          />
          <div className="hero__shade" />
        </div>

        <nav className="nav" aria-label="Primary">
          <a className="nav__brand" href="#top">
            Kalimates
          </a>
          <ul className="nav__links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#vision">Vision</a>
            </li>
            <li>
              <a href="#leadership">Leadership</a>
            </li>
          </ul>
        </nav>

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
            <a className="btn btn--primary" href="#about">
              Discover Kalimates
            </a>
            <a className="btn btn--ghost" href="#leadership">
              Meet leadership
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
              Kalimates Private Limited is an innovation-driven company focused
              on transforming ideas and emerging concepts into smart, practical
              applications that simplify everyday life. We combine creativity,
              technology, and purpose to build solutions that are meaningful,
              convenient, and designed around people.
            </p>
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
              <article className="leader">
                <h3 className="leader__name">Adhil NC</h3>
                <p className="leader__role">Managing Director &amp; CEO</p>
              </article>
              <article className="leader">
                <h3 className="leader__name">Ajmal Varikodan</h3>
                <p className="leader__role">Director &amp; CFO</p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <p className="footer__brand">Kalimates Private Limited</p>
          <p className="footer__copy">
            © {new Date().getFullYear()} Kalimates. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
