import { Card, CardContent } from "@/components/ui/card";
import appetizersImage from "@/assets/menu-appetizers.jpg";
import paellaImage from "@/assets/menu-paella.jpg";
import grillImage from "@/assets/menu-grill.jpg";
import seafoodImage from "@/assets/menu-seafood.jpg";

const menuCategories = [
  {
    title: "Appetizers",
    subtitle: "Snacks",
    image: appetizersImage,
    description: "Traditional Spanish tapas and starters"
  },
  {
    title: "Paella",
    subtitle: "Traditional Rice",
    image: paellaImage,
    description: "Authentic Spanish paella with seafood"
  },
  {
    title: "Grill",
    subtitle: "Premium Steaks",
    image: grillImage,
    description: "Dry-aged steaks and grilled specialties"
  },
  {
    title: "Seafood",
    subtitle: "Fresh Catch",
    image: seafoodImage,
    description: "Fresh seafood and ocean delicacies"
  }
];

export const MenuSection = () => {
  return (
    <section id="menu" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
          Our Cuisine
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuCategories.map((category, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-border hover:shadow-[var(--shadow-elegant)] transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <p className="text-sm uppercase tracking-wider mb-1 opacity-90">
                      {category.subtitle}
                    </p>
                    <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                    <p className="text-sm opacity-90">{category.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
