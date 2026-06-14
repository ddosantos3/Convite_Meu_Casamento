import { Calendar, ChevronDown, Leaf, Sparkles } from "lucide-react";

export function HeroSection({ data }) {
  return (
    <section className="hero-section" aria-label="Abertura do convite">
      <img
        className="hero-photo"
        src={data.hero.image.src}
        srcSet={data.hero.image.srcSet}
        sizes="100vw"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
      />
      <div className="hero-photo-overlay" aria-hidden="true" />
      <div className="hero-ambient" aria-hidden="true" />
      <div className="hero-content">
        <span className="hero-monogram hero-enter hero-enter-1" aria-hidden="true">
          <Leaf size={13} />
          <span>D · R</span>
          <Sparkles size={12} />
        </span>
        <div className="date-pill hero-enter hero-enter-2">
          <Calendar size={18} aria-hidden="true" />
          <span>{data.date}</span>
        </div>
        <h1 className="hero-enter hero-enter-3">{data.couple}</h1>
        <p className="hero-enter hero-enter-4">{data.hero.message}</p>
      </div>
      <a className="scroll-cue" href="#para-alguem-especial" aria-label="Ir para a mensagem especial">
        <ChevronDown size={24} aria-hidden="true" />
      </a>
    </section>
  );
}
