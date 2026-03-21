import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import MusicSection from "@/components/sections/MusicSection";
import ShowsSection from "@/components/sections/ShowsSection";
import HouseConcertsSection from "@/components/sections/HouseConcertsSection";
import EventsSection from "@/components/sections/EventsSection";
// import VideoSection from "@/components/sections/VideoSection";
// import PressSection from "@/components/sections/PressSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <MusicSection />
      <ShowsSection />
      <HouseConcertsSection />
      <EventsSection />
      {/* <VideoSection /> — re-enable when video content is ready */}
      {/* <PressSection /> — re-enable when EPK content is ready */}
      <ContactSection />
      <Footer />
    </main>
  );
}
