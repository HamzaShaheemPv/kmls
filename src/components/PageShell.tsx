import { useEffect, type ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteNav } from "./SiteNav";
import { useReveal } from "../hooks/useReveal";

type PageShellProps = {
  title: string;
  label: string;
  lede?: string;
  children: ReactNode;
  narrow?: boolean;
};

export function PageShell({
  title,
  label,
  lede,
  children,
  narrow = false,
}: PageShellProps) {
  const rootRef = useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="site" ref={rootRef}>
      <header className="page-hero">
        <SiteNav variant="page" />
        <div className="page-hero__content reveal">
          <p className="section__label section__label--on-dark">{label}</p>
          <h1 className="page-hero__title">{title}</h1>
          {lede ? <p className="page-hero__lede">{lede}</p> : null}
        </div>
      </header>

      <main className={narrow ? "page-main page-main--narrow" : "page-main"}>
        {children}
      </main>

      <SiteFooter />
    </div>
  );
}
