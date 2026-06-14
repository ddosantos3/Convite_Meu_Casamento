import { Church, Heart, UsersRound } from "lucide-react";
import { InvitationOrnament } from "./InvitationOrnament.jsx";
import { Reveal } from "./Reveal.jsx";

const milestoneIcons = [Heart, UsersRound, Church];

export function StorySection({ data }) {
  return (
    <section id={data.id} className="editorial-section section-story">
      <span className="story-date-ghost" aria-hidden="true">
        12/05
      </span>
      <div className="section-inner story-editorial-inner">
        <Reveal className="story-editorial-heading" direction="right">
          <span className="section-eyebrow">{data.eyebrow}</span>
          <h2>{data.title}</h2>
          <InvitationOrnament />
        </Reveal>
        <div className="story-editorial-grid">
          <Reveal className="story-copy story-copy-main" direction="right" delay={0.06}>
            <div className="story-date">
              <span>Marco inicial</span>
              <strong>12/05/2020</strong>
            </div>
            <p>{data.paragraphs[0]}</p>
            <p>{data.paragraphs[1]}</p>
          </Reveal>
          <Reveal className="story-family-note" direction="left" delay={0.16}>
            <span>Família</span>
            <p>{data.paragraphs[2]}</p>
          </Reveal>
          <Reveal className="story-closing" delay={0.24}>
            <p>{data.paragraphs[3]}</p>
          </Reveal>
        </div>
        <div className="story-milestones">
          {data.milestones.map((milestone, index) => {
            const Icon = milestoneIcons[index] ?? Heart;

            return (
              <Reveal
                direction={index === 1 ? "up" : index === 0 ? "right" : "left"}
                delay={0.08 + index * 0.09}
                key={milestone.title}
              >
                <div className="story-step">
                  <span>
                    <Icon size={17} aria-hidden="true" />
                  </span>
                  <div>
                    <p>{milestone.title}</p>
                    <small>{milestone.detail}</small>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
