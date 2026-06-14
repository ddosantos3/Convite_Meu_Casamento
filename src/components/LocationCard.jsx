import { Building2, Church, ExternalLink, TreePine } from "lucide-react";

const locationIcons = {
  civil: Building2,
  religious: Church,
  celebration: TreePine,
};

export function LocationCard({ card }) {
  const Icon = locationIcons[card.type] ?? Building2;

  return (
    <article className="location-card">
      <span className="card-icon-wrap">
        <Icon className="card-icon" size={21} aria-hidden="true" />
      </span>
      <h3>{card.name}</h3>
      <p className="location-microcopy">{card.microcopy}</p>
      <p>{card.description}</p>
      <a
        href={card.mapUrl}
        className="location-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ver localização de ${card.name} no Google Maps`}
      >
        <ExternalLink size={16} aria-hidden="true" />
        <span>Ver localização</span>
      </a>
    </article>
  );
}
