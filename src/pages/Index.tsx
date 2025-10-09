import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <MenuSection />
      <Footer />
    </div>
  );
};

export default Index;
