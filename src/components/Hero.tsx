import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-restaurant.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-foreground/40" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          ¡Hola!
        </h2>
        <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed">
          Quadro Restaurant – A welcoming Spanish home where it's always delicious and beautiful.
        </p>
        <p className="text-base md:text-lg mb-8 max-w-4xl mx-auto leading-relaxed opacity-95">
          Our menu combines Spanish cuisine with love for local products. You'll find halal jamon, 
          grilled and oven dishes, dry-aged steaks from the finest local beef, seafood, 
          Spanish appetizers, and paella.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            View Menu
          </Button>
          <Button variant="heroOutline" size="lg" className="text-lg px-8 py-6">
            Bar Menu
          </Button>
        </div>
      </div>
    </section>
  );
};
