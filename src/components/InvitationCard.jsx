import { Clock, Heart, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function InvitationCard({ event, icon: Icon = Heart }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className="event-card"
      whileHover={shouldReduceMotion ? undefined : { y: -5, rotateX: 1.2, rotateY: 1.2 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
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
    </motion.article>
  );
}
