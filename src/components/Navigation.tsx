import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold tracking-tight">VOHAS</h1>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="/menu" className="hover:text-primary transition-colors">Меню</a>
            <a href="#contact" className="hover:text-primary transition-colors">Галлерея</a>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col items-end text-sm">
            <a href="tel:+998781131338" className="flex items-center gap-2 font-medium hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              +998 99 274 70 70
            </a>
            <span className="text-xs text-muted-foreground">Каждый день 9:00 - 00:00</span>
          </div>
          <a href="tel:+998992747070">
  <Button variant="hero" size="lg">
    Забронировать столик
  </Button>
</a>

        </div>
      </div>
    </nav>
  );
};
