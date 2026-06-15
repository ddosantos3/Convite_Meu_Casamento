import { Clock } from "lucide-react";
import { Reveal } from "./Reveal.jsx";

export function TimelineItem({ item, index = 0 }) {
  return (
    <Reveal
      as="li"
      className="timeline-item"
      delay={0.12 + index * 0.13}
      direction="right"
      distance={22}
    >
      <span className="timeline-dot" aria-hidden="true" />
      <div>
        <p className="timeline-time">
          <Clock size={15} aria-hidden="true" />
          {item.time}
        </p>
        <h3>{item.title}</h3>
        <p>{item.place}</p>
      </div>
    </Reveal>
  );
}
