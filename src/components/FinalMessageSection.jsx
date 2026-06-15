import { useViewportMotion } from "../hooks/useViewportMotion.js";
import { InvitationOrnament } from "./InvitationOrnament.jsx";
import { Reveal } from "./Reveal.jsx";

export function FinalMessageSection({ data, couple }) {
  const sectionRef = useViewportMotion();

  return (
    <section
      ref={sectionRef}
      id={data.id}
      className="final-section motion-scene"
    >
      <img
        className="final-photo"
        src={data.image.src}
        srcSet={data.image.srcSet}
        sizes="100vw"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      <div className="final-photo-overlay" aria-hidden="true" />
      <Reveal>
        <div className="final-message">
          <span className="final-eyebrow">Um novo capítulo</span>
          <h2>{data.title}</h2>
          <InvitationOrnament align="center" />
          {data.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <strong>{couple}</strong>
        </div>
      </Reveal>
    </section>
  );
}
