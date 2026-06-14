import { GlassCard } from "./GlassCard.jsx";
import { Reveal } from "./Reveal.jsx";
import { SectionShell } from "./SectionShell.jsx";

export function StorySection({ data }) {
  return (
    <SectionShell id={data.id} title={data.title}>
      <div className="story-layout">
        <Reveal className="story-copy">
          <div className="story-date">
            <span>Desde</span>
            <strong>12/05/2020</strong>
          </div>
          {data.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
        <Reveal delay={0.08}>
          <GlassCard className="story-milestones">
            {data.milestones.map((milestone, index) => (
              <div className="story-step" key={milestone.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p>{milestone.title}</p>
                  <small>{milestone.detail}</small>
                </div>
              </div>
            ))}
          </GlassCard>
        </Reveal>
      </div>
    </SectionShell>
  );
}
