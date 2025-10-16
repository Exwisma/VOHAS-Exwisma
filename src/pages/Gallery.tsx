import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
// import { MenuCategories } from "@/components/MenuCategories";
// import { MenuItems } from "@/components/MenuItems";
import MenuGallery from "@/components/MenuGallery";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        {/* Menu Hero Banner */}
        <div className="relative bg-gradient-to-r from-[#F79651] via-[#E55D45] to-[#0E4037] from-accent via-destructive to-accent py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <nav className="text-sm mb-4 text-white/90">
              <a href="/" className="hover:text-white transition-colors">Главная страница</a>
              <span className="mx-2">→</span>
              <span>Галлерея</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold text-white">Галлерея</h1>
          </div>
        </div>

        {/* Menu Categories */}
        
        <MenuGallery />
        {/* Menu Items Grid */}
        
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
