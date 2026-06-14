import { Reveal } from "./Reveal.jsx";

export function SectionShell({
  id,
  eyebrow,
  title,
  intro,
  children,
  narrow = false,
  className = "",
}) {
  return (
    <section id={id} className={`section-band ${className}`}>
      <div className="section-glow" aria-hidden="true" />
      <div className="section-thread" aria-hidden="true" />
      <div className={`section-inner ${narrow ? "max-w-3xl" : "max-w-5xl"}`}>
        <Reveal>
          <div className="section-heading">
            {eyebrow ? <span className="section-eyebrow">{eyebrow}</span> : null}
            <h2>{title}</h2>
            {intro ? <p>{intro}</p> : null}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
