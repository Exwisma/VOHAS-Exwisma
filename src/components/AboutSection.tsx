
import { Button } from "@/components/ui/button";


export const AboutSection = () => {
  return (
    <section id="menu" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-9">
          Здравствуйте, уважаемый гость мы
          </h2>
         <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
          VOHAS
          </h2>
        
        <div className="container mx-auto text-center ">
        <a href="tel:+998992747070">
        <Button variant="hero" size="lg">
          Забронировать столик
        </Button>
      </a>
        </div>
      </div>
    </section>
  );
};
