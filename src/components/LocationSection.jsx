import { LocationCard } from "./LocationCard.jsx";
import { InvitationOrnament } from "./InvitationOrnament.jsx";
import { Reveal } from "./Reveal.jsx";
import { SectionShell } from "./SectionShell.jsx";

export function LocationSection({ data }) {
  return (
    <SectionShell
      id={data.id}
      eyebrow={data.eyebrow}
      title={data.title}
      className="section-locations"
    >
      <InvitationOrnament className="locations-ornament" />
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
