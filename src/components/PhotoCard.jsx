import { Image } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export function PhotoCard({ photo, index }) {
  const [failed, setFailed] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["-3%", "3%"],
  );

  return (
    <motion.figure
      ref={cardRef}
      className={`photo-card photo-card-${index + 1}`}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 26, scale: 0.96 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      whileHover={shouldReduceMotion ? undefined : { y: -6, rotateZ: index === 1 ? 0 : index === 0 ? -0.4 : 0.4 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
      viewport={{ once: true, amount: 0.32 }}
      transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {!failed ? (
        <motion.img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          style={{ y: imageY, scale: 1.05 }}
        />
      ) : (
        <div className="photo-fallback" role="img" aria-label={photo.alt}>
          <Image size={30} aria-hidden="true" />
        </div>
      )}
      <figcaption>Douglas & Regiane</figcaption>
    </motion.figure>
  );
}
