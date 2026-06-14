import { InvitationOrnament } from "./InvitationOrnament.jsx";
import { Reveal } from "./Reveal.jsx";
import { SectionShell } from "./SectionShell.jsx";
import { TimelineItem } from "./TimelineItem.jsx";

export function TimelineSection({ data }) {
  return (
    <SectionShell
      id={data.id}
      eyebrow={data.eyebrow}
      title={data.title}
      className="section-timeline"
      narrow
    >
      <InvitationOrnament className="timeline-ornament" />
      <Reveal>
        <div className="timeline-wrap">
          <span className="timeline-line-fill" aria-hidden="true" />
          <ol className="timeline-list">
            {data.items.map((item, index) => (
              <TimelineItem item={item} index={index} key={`${item.time}-${item.title}`} />
            ))}
          </ol>
        </div>
      </Reveal>
    </SectionShell>
  );
}
