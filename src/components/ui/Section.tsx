import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children?: ReactNode;
  className?: string;
};

export default function Section({ eyebrow, title, intro, children, className = "" }: SectionProps) {
  return (
    <section className={`section ${className}`.trim()}>
      {(eyebrow || title || intro) && (
        <header className="section-header">
          {eyebrow ? <p className="section-label">{eyebrow}</p> : null}
          {title ? <h2>{title}</h2> : null}
          {intro ? <p className="lead">{intro}</p> : null}
        </header>
      )}
      {children}
    </section>
  );
}
