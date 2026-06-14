import { motion, useReducedMotion } from "framer-motion";

const particles = Array.from({ length: 9 }, (_, index) => index);

export function AtmosphereLayer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="atmosphere-layer" aria-hidden="true">
      <motion.span
        className="atmosphere-wash atmosphere-wash-one"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: ["-4%", "5%", "-4%"],
                y: ["0%", "7%", "0%"],
                scale: [0.96, 1.06, 0.96],
                rotate: [-2, 3, -2],
                opacity: [0.34, 0.48, 0.34],
              }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="atmosphere-wash atmosphere-wash-two"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: ["4%", "-5%", "4%"],
                y: ["2%", "-5%", "2%"],
                scale: [1.05, 0.95, 1.05],
                rotate: [2, -3, 2],
                opacity: [0.24, 0.38, 0.24],
              }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="atmosphere-leak"
        animate={shouldReduceMotion ? undefined : { x: ["-12%", "14%", "-12%"], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="ambient-particles">
        {particles.map((particle) => (
          <motion.span
            className={`ambient-particle ambient-particle-${particle + 1}`}
            key={particle}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    x: [0, particle % 2 === 0 ? 12 : -10, 0],
                    y: [0, -18 - particle * 2, 0],
                    scale: [0.8, 1.15, 0.8],
                    opacity: [0.08, 0.34, 0.08],
                  }
            }
            transition={{
              duration: 11 + particle * 1.4,
              delay: particle * 0.55,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
