import { PhotoCard } from "./PhotoCard.jsx";
import { Reveal } from "./Reveal.jsx";
import { SectionShell } from "./SectionShell.jsx";

export function PhotoSection({ data }) {
  return (
    <SectionShell
      id={data.id}
      eyebrow={data.eyebrow}
      title={data.title}
      intro={data.intro}
      className="section-memories"
    >
      <Reveal>
        <div className="photo-grid">
          {data.items.map((photo, index) => (
            <PhotoCard photo={photo} index={index} key={photo.src} />
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}
