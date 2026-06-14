import { Image } from "lucide-react";
import { useState } from "react";

export function PhotoCard({ photo, index }) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={`photo-card photo-card-${index + 1}`}>
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
    </figure>
  );
}
