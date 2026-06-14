import { PhotoCard } from "./PhotoCard.jsx";
import { InvitationOrnament } from "./InvitationOrnament.jsx";
import { Reveal } from "./Reveal.jsx";

export function PhotoSection({ data }) {
  return (
    <section id={data.id} className="editorial-section section-memories">
      <div className="section-inner memories-inner">
        <Reveal className="memories-heading" direction="right">
          <span className="section-eyebrow">{data.eyebrow}</span>
          <h2>{data.title}</h2>
          <InvitationOrnament />
          <p>{data.intro}</p>
        </Reveal>
        <div className="photo-grid">
          {data.items.map((photo, index) => (
            <PhotoCard photo={photo} index={index} key={photo.src} />
          ))}
        </div>
      </div>
    </section>
  );
}
