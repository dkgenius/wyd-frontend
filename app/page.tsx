import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import CourtFinderSection from "@/components/CourtFinderSection";
import ReviewsSection from "@/components/ReviewsSection";
import FeaturedVideoSection from "@/components/FeaturedVideoSection";
import ClinicSection from "@/components/ClinicSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <CourtFinderSection />
      <ReviewsSection />
      <FeaturedVideoSection />
      <ClinicSection />
    </>
  );
}
