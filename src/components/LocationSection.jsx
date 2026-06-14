import { LocationCard } from "./LocationCard.jsx";
import { Reveal } from "./Reveal.jsx";
import { SectionShell } from "./SectionShell.jsx";

export function LocationSection({ data }) {
  return (
    <SectionShell id={data.id} title={data.title}>
      <div className="location-grid">
        {data.cards.map((card, index) => (
          <Reveal delay={index * 0.06} key={card.name}>
            <LocationCard card={card} />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
