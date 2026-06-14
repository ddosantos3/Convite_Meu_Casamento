import { Church } from "lucide-react";
import { InvitationOrnament } from "./InvitationOrnament.jsx";
import { Reveal } from "./Reveal.jsx";

export function CeremonySection({ data }) {
  return (
    <section id={data.id} className="ceremony-scene">
      <img
        className="ceremony-scene-photo"
        src={data.image.src}
        srcSet={data.image.srcSet}
        sizes="100vw"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      <div className="ceremony-scene-overlay" aria-hidden="true" />
      <div className="section-inner ceremony-scene-inner">
        <Reveal className="ceremony-scene-heading" direction="right">
          <span className="section-eyebrow">{data.eyebrow}</span>
          <h2>{data.title}</h2>
          <InvitationOrnament />
        </Reveal>
        <Reveal className="ceremony-copy" direction="left" delay={0.16}>
          <span className="ceremony-icon">
            <Church className="card-icon" size={23} aria-hidden="true" />
          </span>
          {data.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
