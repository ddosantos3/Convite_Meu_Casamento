import { Building2, Church, ExternalLink, TreePine } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const locationIcons = {
  civil: Building2,
  religious: Church,
  celebration: TreePine,
};

export function LocationCard({ card }) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = locationIcons[card.type] ?? Building2;

  return (
    <motion.article
      className="location-card"
      whileHover={shouldReduceMotion ? undefined : { y: -5, rotateX: 1.2, rotateY: -1.2 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <span className="card-icon-wrap">
        <Icon className="card-icon" size={21} aria-hidden="true" />
      </span>
      <h3>{card.name}</h3>
      <p className="location-microcopy">{card.microcopy}</p>
      <p>{card.description}</p>
      <motion.a
        href={card.mapUrl}
        className="location-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ver localização de ${card.name} no Google Maps`}
        whileHover={shouldReduceMotion ? undefined : { y: -2, x: 2 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      >
        <ExternalLink size={16} aria-hidden="true" />
        <span>Ver localização</span>
      </motion.a>
    </motion.article>
  );
}
