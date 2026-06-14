import { Heart } from "lucide-react";
import { GlassCard } from "./GlassCard.jsx";
import { Reveal } from "./Reveal.jsx";
import { SectionShell } from "./SectionShell.jsx";

export function MessageSection({ data }) {
  return (
    <SectionShell
      id={data.id}
      eyebrow={data.eyebrow}
      title={data.title}
      className="section-message"
      narrow
    >
      <Reveal>
        <GlassCard className="message-card">
          <Heart className="card-icon" size={22} aria-hidden="true" />
          {data.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </GlassCard>
      </Reveal>
    </SectionShell>
  );
}
