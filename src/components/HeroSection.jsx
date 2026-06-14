import { Calendar, ChevronDown, Leaf, Sparkles } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function HeroSection({ data }) {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 520], [0, shouldReduceMotion ? 0 : 52]);
  const contentY = useTransform(scrollY, [0, 420], [0, shouldReduceMotion ? 0 : -18]);

  return (
    <section className="hero-section" aria-label="Abertura do convite">
      <motion.img
        className="hero-photo"
        src={data.hero.image}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        style={{ y: imageY }}
        animate={
          shouldReduceMotion
            ? { scale: 1.08 }
            : { scale: [1.08, 1.14, 1.08] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="hero-photo-overlay" aria-hidden="true" />
      <div className="hero-ambient" aria-hidden="true" />
      <motion.div
        className="hero-content"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ y: contentY }}
      >
        <motion.span
          className="hero-monogram"
          aria-hidden="true"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.06 }}
        >
          <Leaf size={13} />
          <span>D · R</span>
          <Sparkles size={12} />
        </motion.span>
        <motion.div
          className="date-pill"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.94 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <Calendar size={18} aria-hidden="true" />
          <span>{data.date}</span>
        </motion.div>
        <motion.h1
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18, scale: 0.97 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          {data.couple}
        </motion.h1>
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.54, ease: [0.22, 1, 0.36, 1] }}
        >
          {data.hero.message}
        </motion.p>
      </motion.div>
      <a className="scroll-cue" href="#para-alguem-especial" aria-label="Ir para a mensagem especial">
        <ChevronDown size={24} aria-hidden="true" />
      </a>
    </section>
  );
}
