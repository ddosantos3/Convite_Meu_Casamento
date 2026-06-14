import { Reveal } from "./Reveal.jsx";

export function SectionShell({ id, title, intro, children, narrow = false, className = "" }) {
  return (
    <section id={id} className={`section-band ${className}`}>
      <div className="section-glow" aria-hidden="true" />
      <div className={`section-inner ${narrow ? "max-w-3xl" : "max-w-5xl"}`}>
        <Reveal>
          <div className="section-heading">
            <h2>{title}</h2>
            {intro ? <p>{intro}</p> : null}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
