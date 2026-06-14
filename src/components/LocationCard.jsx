import { ExternalLink, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function LocationCard({ card }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className="location-card"
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <MapPin className="card-icon" size={22} aria-hidden="true" />
      <h3>{card.name}</h3>
      <p>{card.description}</p>
      {/* Substituir o href pelo link correto do Google Maps. */}
      <a href={card.mapUrl} className="location-link" aria-label={`Ver localização de ${card.name}`}>
        <ExternalLink size={16} aria-hidden="true" />
        <span>Ver localização</span>
      </a>
    </motion.article>
  );
}
