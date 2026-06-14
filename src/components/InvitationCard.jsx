import { Clock, Heart, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function InvitationCard({ event, icon: Icon = Heart }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className="event-card"
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <Icon className="card-icon" size={22} aria-hidden="true" />
      <h3>{event.title}</h3>
      <div className="event-line">
        <Clock size={16} aria-hidden="true" />
        <span>{event.time}</span>
      </div>
      <div className="event-line">
        <MapPin size={16} aria-hidden="true" />
        <span>{event.location}</span>
      </div>
    </motion.article>
  );
}
