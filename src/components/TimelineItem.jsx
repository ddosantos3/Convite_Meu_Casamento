import { Clock } from "lucide-react";

export function TimelineItem({ item, index = 0 }) {
  return (
    <li className="timeline-item" style={{ "--timeline-index": index }}>
      <span className="timeline-dot" aria-hidden="true" />
      <div>
        <p className="timeline-time">
          <Clock size={15} aria-hidden="true" />
          {item.time}
        </p>
        <h3>{item.title}</h3>
        <p>{item.place}</p>
      </div>
    </li>
  );
}
