import { Reveal } from "./Reveal.jsx";
import { SectionShell } from "./SectionShell.jsx";

export function StorySection({ data }) {
  return (
    <SectionShell
      id={data.id}
      eyebrow={data.eyebrow}
      title={data.title}
      className="section-story"
    >
      <div className="story-layout">
        <Reveal className="story-copy">
          <div className="story-date">
            <span>Marco inicial</span>
            <strong>12/05/2020</strong>
          </div>
          {data.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
        <Reveal delay={0.08}>
          <div className="story-milestones">
            {data.milestones.map((milestone, index) => (
              <div className="story-step" key={milestone.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p>{milestone.title}</p>
                  <small>{milestone.detail}</small>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
