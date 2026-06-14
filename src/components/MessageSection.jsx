import { Heart } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { InvitationOrnament } from "./InvitationOrnament.jsx";
import { Reveal } from "./Reveal.jsx";

export function MessageSection({ data }) {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["-4%", "4%"],
  );

  return (
    <section ref={sectionRef} id={data.id} className="memory-scene section-message">
      <motion.img
        className="message-scene-photo"
        src={data.image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        style={{ y: imageY, scale: 1.08 }}
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
