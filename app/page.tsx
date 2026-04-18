import HeroSection from "@/components/HeroSection";
import CitiesTicker from "@/components/CitiesTicker";
import CourtShowcaseSection from "@/components/CourtShowcaseSection";
import FeaturedVideoSection from "@/components/FeaturedVideoSection";
import ClinicSection from "@/components/ClinicSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CitiesTicker />
      <CourtShowcaseSection />
      <FeaturedVideoSection />
      <ClinicSection />
    </>
  );
}
