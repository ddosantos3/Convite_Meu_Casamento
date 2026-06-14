import { Church, MapPinned, PartyPopper } from "lucide-react";
import { InvitationCard } from "./InvitationCard.jsx";
import { InvitationOrnament } from "./InvitationOrnament.jsx";
import { Reveal } from "./Reveal.jsx";

const eventIcons = {
  civil: MapPinned,
  religious: Church,
  celebration: PartyPopper,
};

export function InvitationSection({ data }) {
  const invitation = data.invitation;
  const events = [
    { event: data.civil, type: "civil" },
    { event: data.religious, type: "religious" },
    { event: data.celebration, type: "celebration" },
  ];

  return (
    <section id={invitation.id} className="section-band section-invitation">
      <span className="invitation-date" aria-hidden="true">
        {data.date}
      </span>
      <div className="section-inner invitation-inner">
        <div className="invitation-editorial">
          <Reveal className="invitation-heading" direction="right">
            <span className="section-eyebrow">{invitation.eyebrow}</span>
            <h2>{invitation.title}</h2>
            <InvitationOrnament />
          </Reveal>
          <Reveal className="invitation-copy" direction="left" delay={0.12}>
            {invitation.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
        </div>
        <div className="event-grid">
          {events.map(({ event, type }, index) => (
            <Reveal delay={0.08 + index * 0.08} key={event.title}>
              <InvitationCard event={event} icon={eventIcons[type]} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
