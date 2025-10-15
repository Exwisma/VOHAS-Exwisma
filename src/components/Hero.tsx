import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-restaurant.jpg";
import test from "@/assets/test.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${test})` }}
      >
        <div className="absolute inset-0 bg-foreground/40" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          VOHAS
        </h2>
        <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed">
          Место, где вкус объединяет семью.
        </p>
        <p className="text-base md:text-lg mb-8 max-w-4xl mx-auto leading-relaxed opacity-95">
          Добро пожаловать в ресторан, где каждая встреча превращается в тёплое воспоминание.
          Мы создаём атмосферу уюта, комфорта и наслаждения вкусом.
          Отдохните от суеты и насладитесь безупречным сервисом, изысканными блюдами и душевной атмосферой.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
            <a href="/menu">
              Меню
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" className="text-lg px-8 py-6" asChild>
            <a href="https://quadro.uz/bar_ru.pdf" target="_blank" rel="noopener noreferrer">
              Бар Меню
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
