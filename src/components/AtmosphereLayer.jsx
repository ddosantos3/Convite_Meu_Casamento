import { motion, useReducedMotion } from "framer-motion";

export function AtmosphereLayer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="atmosphere-layer" aria-hidden="true">
      <motion.span
        className="atmosphere-wash atmosphere-wash-one"
        animate={
          shouldReduceMotion
            ? undefined
            : { x: ["-4%", "5%", "-4%"], y: ["0%", "7%", "0%"], opacity: [0.34, 0.48, 0.34] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="atmosphere-wash atmosphere-wash-two"
        animate={
          shouldReduceMotion
            ? undefined
            : { x: ["4%", "-5%", "4%"], y: ["2%", "-5%", "2%"], opacity: [0.24, 0.38, 0.24] }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="atmosphere-leak"
        animate={shouldReduceMotion ? undefined : { x: ["-12%", "14%", "-12%"], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
