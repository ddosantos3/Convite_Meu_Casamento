import { Clock, Heart, MapPin } from "lucide-react";

export function InvitationCard({ event, icon: Icon = Heart }) {
  return (
    <article className="event-card">
      <span className="card-icon-wrap">
        <Icon className="card-icon" size={21} aria-hidden="true" />
      </span>
      <h3>{event.title}</h3>
      <div className="event-line">
        <Clock size={16} aria-hidden="true" />
        <span>{event.time}</span>
      </div>
      <div className="event-line">
        <MapPin size={16} aria-hidden="true" />
        <span>{event.location}</span>
      </div>
    </article>
  );
}
