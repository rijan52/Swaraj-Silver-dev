import HeroSection from "../components/HeroSection";
import LegacySection from "../components/LegacySection";
import CollectionsSection from "../components/CollectionSection";
import CustomDesignSection from "../components/CustomDesignSection";
import StorySection from "../components/StorySection";
import GallerySection from "../components/GallerySection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf8f5] font-serif text-[#2e2a27]">
      <HeroSection />
      <LegacySection />
      <CollectionsSection />
      <CustomDesignSection />
      <StorySection />
      <GallerySection />
      <Footer />
    </main>
  );
}
