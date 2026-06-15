import { useEffect, useRef } from "react";

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 28,
  scale = 1,
  as: Component = "div",
}) {
  const elementRef = useRef(null);
  const offset = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  }[direction] ?? { x: 0, y: distance };

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      element.classList.add("is-visible");
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        element.classList.add("is-visible");
        const settleTimer = window.setTimeout(
          () => element.classList.add("is-settled"),
          1050 + delay * 1000,
        );
        observer.disconnect();
        element.dataset.settleTimer = String(settleTimer);
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      const settleTimer = Number(element.dataset.settleTimer);
      if (settleTimer) window.clearTimeout(settleTimer);
    };
  }, [delay]);

  return (
    <Component
      className={`reveal ${className}`}
      ref={elementRef}
      style={{
        "--reveal-delay": `${delay}s`,
        "--reveal-scale": scale,
        "--reveal-x": `${offset.x}px`,
        "--reveal-y": `${offset.y}px`,
      }}
    >
      {children}
    </Component>
  );
}
