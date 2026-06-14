import { Clock } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function TimelineItem({ item, index = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.li
      className="timeline-item"
      initial={shouldReduceMotion ? false : { opacity: 0, x: -18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.62, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
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
    </motion.li>
  );
}
