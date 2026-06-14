import { Leaf, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function InvitationOrnament({ align = "left", className = "" }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`invitation-ornament invitation-ornament-${align} ${className}`}
      aria-hidden="true"
      initial={shouldReduceMotion ? false : { opacity: 0, scaleX: 0.72 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, scaleX: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <Leaf className="ornament-leaf ornament-leaf-start" size={16} />
      <span className="ornament-line" />
      <Sparkles className="ornament-spark" size={14} />
      <span className="ornament-line" />
      <Leaf className="ornament-leaf ornament-leaf-end" size={16} />
    </motion.div>
  );
}
