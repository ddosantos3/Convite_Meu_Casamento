import { Heart } from "lucide-react";
import { GlassCard } from "./GlassCard.jsx";
import { Reveal } from "./Reveal.jsx";
import { SectionShell } from "./SectionShell.jsx";

export function PresenceSection({ data }) {
  return (
    <SectionShell id={data.id} title={data.title} narrow>
      <Reveal>
        <GlassCard className="presence-card">
          <Heart className="card-icon" size={24} aria-hidden="true" />
          {data.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </GlassCard>
      </Reveal>
    </SectionShell>
  );
}
