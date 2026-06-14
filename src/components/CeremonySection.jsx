import { Church } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { InvitationOrnament } from "./InvitationOrnament.jsx";
import { Reveal } from "./Reveal.jsx";

export function CeremonySection({ data }) {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["-5%", "5%"],
  );

  return (
    <section ref={sectionRef} id={data.id} className="ceremony-scene">
      <motion.img
        className="ceremony-scene-photo"
        src={data.image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        style={{ y: imageY, scale: 1.1 }}
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
