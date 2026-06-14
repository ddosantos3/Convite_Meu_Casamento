import { Building2, Church, Utensils } from "lucide-react";
import { InvitationCard } from "./InvitationCard.jsx";
import { Reveal } from "./Reveal.jsx";
import { SectionShell } from "./SectionShell.jsx";

const eventIcons = {
  civil: Building2,
  religious: Church,
  celebration: Utensils,
};

export function InvitationSection({ data }) {
  const invitation = data.invitation;
  const events = [
    { event: data.civil, type: "civil" },
    { event: data.religious, type: "religious" },
    { event: data.celebration, type: "celebration" },
  ];

  return (
    <SectionShell
      id={invitation.id}
      eyebrow={invitation.eyebrow}
      title={invitation.title}
      className="section-invitation"
    >
      <Reveal>
        <div className="invitation-copy">
          {invitation.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Reveal>
      <div className="event-grid">
        {events.map(({ event, type }, index) => (
          <Reveal delay={index * 0.06} key={event.title}>
            <InvitationCard event={event} icon={eventIcons[type]} />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
