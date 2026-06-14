import { weddingData } from "./data/weddingData.js";
import { AtmosphereLayer } from "./components/AtmosphereLayer.jsx";
import { CeremonySection } from "./components/CeremonySection.jsx";
import { FinalMessageSection } from "./components/FinalMessageSection.jsx";
import { HeroSection } from "./components/HeroSection.jsx";
import { InvitationSection } from "./components/InvitationSection.jsx";
import { LocationSection } from "./components/LocationSection.jsx";
import { MessageSection } from "./components/MessageSection.jsx";
import { PhotoSection } from "./components/PhotoSection.jsx";
import { StorySection } from "./components/StorySection.jsx";
import { TimelineSection } from "./components/TimelineSection.jsx";

export default function App() {
  return (
    <main className="site-shell">
      <AtmosphereLayer />
      <HeroSection data={weddingData} />
      <MessageSection data={weddingData.specialMessage} />
      <StorySection data={weddingData.story} />
      <PhotoSection data={weddingData.photos} />
      <CeremonySection data={weddingData.ceremony} />
      <InvitationSection data={weddingData} />
      <TimelineSection data={weddingData.dayTimeline} />
      <LocationSection data={weddingData.locations} />
      <FinalMessageSection
        data={weddingData.finalMessage}
        couple={weddingData.couple}
      />
    </main>
  );
}
