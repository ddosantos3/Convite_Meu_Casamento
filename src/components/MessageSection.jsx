import { Heart } from "lucide-react";
import { useViewportMotion } from "../hooks/useViewportMotion.js";
import { InvitationOrnament } from "./InvitationOrnament.jsx";
import { Reveal } from "./Reveal.jsx";

export function MessageSection({ data }) {
  const sectionRef = useViewportMotion();

  return (
    <section
      ref={sectionRef}
      id={data.id}
      className="memory-scene section-message motion-scene"
    >
      <img
        className="message-scene-photo"
        src={data.image.src}
        srcSet={data.image.srcSet}
        sizes="100vw"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      <div className="message-scene-overlay" aria-hidden="true" />
      <div className="section-inner message-scene-inner">
        <Reveal className="message-scene-heading" direction="right">
          <span className="section-eyebrow">{data.eyebrow}</span>
          <h2>{data.title}</h2>
          <InvitationOrnament />
        </Reveal>
        <div className="message-editorial-grid">
          <Reveal direction="right" delay={0.08}>
            <blockquote>{data.paragraphs[0]}</blockquote>
          </Reveal>
          <Reveal direction="left" delay={0.18}>
            <div className="message-note">
              <span className="message-note-icon">
                <Heart className="card-icon" size={21} aria-hidden="true" />
              </span>
              {data.paragraphs.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
