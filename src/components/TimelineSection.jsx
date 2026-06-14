import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal.jsx";
import { SectionShell } from "./SectionShell.jsx";
import { TimelineItem } from "./TimelineItem.jsx";

export function TimelineSection({ data }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionShell id={data.id} title={data.title} narrow>
      <Reveal>
        <div className="timeline-wrap">
          <motion.span
            className="timeline-line-fill"
            aria-hidden="true"
            initial={shouldReduceMotion ? false : { scaleY: 0 }}
            whileInView={shouldReduceMotion ? undefined : { scaleY: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          />
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
