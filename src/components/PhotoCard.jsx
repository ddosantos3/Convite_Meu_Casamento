import { Image } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal.jsx";

export function PhotoCard({ photo, index }) {
  const [failed, setFailed] = useState(false);

  return (
    <Reveal
      as="figure"
      className={`photo-card photo-card-${index + 1}`}
      delay={0.08 + index * 0.11}
      direction={index === 1 ? "up" : index === 0 ? "right" : "left"}
      distance={34}
      scale={0.975}
    >
      {!failed ? (
        <img
          src={photo.image.src}
          srcSet={photo.image.srcSet}
          sizes="(min-width: 640px) 33vw, 92vw"
          alt={photo.alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="photo-fallback" role="img" aria-label={photo.alt}>
          <Image size={30} aria-hidden="true" />
        </div>
      )}
      <figcaption>Douglas & Regiane</figcaption>
    </Reveal>
  );
}
