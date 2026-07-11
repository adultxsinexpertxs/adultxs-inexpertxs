import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
};

export default function PageHero({ eyebrow, title, subtitle, children, imageSrc, imageAlt }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div>
        {eyebrow ? <p className="section-label">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {subtitle ? <p className="lead page-hero-subtitle">{subtitle}</p> : null}
        {children}
      </div>
      {imageSrc ? (
        <figure className="page-hero-image">
          <img src={imageSrc} alt={imageAlt ?? ""} />
        </figure>
      ) : null}
    </section>
  );
}
