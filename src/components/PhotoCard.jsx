import { Image } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

export function PhotoCard({ photo, index }) {
  const [failed, setFailed] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.figure
      className={`photo-card photo-card-${index + 1}`}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 26, scale: 0.96 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      viewport={{ once: true, amount: 0.32 }}
      transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {!failed ? (
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
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
