import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "./Reveal.jsx";

export function FinalMessageSection({ data, couple }) {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0.68, 1], [shouldReduceMotion ? 0 : -20, shouldReduceMotion ? 0 : 24]);

  return (
    <section id={data.id} className="final-section">
      <motion.img
        className="final-photo"
        src={data.image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        style={{ y: imageY, scale: 1.12 }}
      />
      <div className="final-photo-overlay" aria-hidden="true" />
      <Reveal>
        <div className="final-message">
          {data.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <strong>{couple}</strong>
        </div>
      </Reveal>
    </section>
  );
}
