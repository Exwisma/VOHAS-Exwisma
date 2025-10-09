import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import appetizersImage from "@/assets/menu-appetizers.jpg";
import paellaImage from "@/assets/menu-paella.jpg";
import grillImage from "@/assets/menu-grill.jpg";
import seafoodImage from "@/assets/menu-seafood.jpg";

const menuItems = [
  {
    id: 1,
    name: "Empanadas with beef",
    nameRu: "Эмпанадас с говядиной",
    price: "84 000",
    image: appetizersImage,
  },
  {
    id: 2,
    name: "Bone marrow with baguette",
    nameRu: "Костный мозг с багетом",
    price: "132 000",
    image: grillImage,
  },
  {
    id: 3,
    name: "Tiger shrimps with mango sauce",
    nameRu: "Тигровые креветки с соусом манго",
    price: "94 000",
    image: seafoodImage,
  },
  {
    id: 4,
    name: "Antipasti beef",
    nameRu: "Антипасти мясное",
    price: "178 000",
    image: grillImage,
  },
  {
    id: 5,
    name: "Spanish paella with seafood",
    nameRu: "Паэлья с морепродуктами",
    price: "156 000",
    image: paellaImage,
  },
  {
    id: 6,
    name: "Grilled octopus",
    nameRu: "Осьминог на гриле",
    price: "198 000",
    image: seafoodImage,
  },
  {
    id: 7,
    name: "Spanish croquettes",
    nameRu: "Испанские крокеты",
    price: "72 000",
    image: appetizersImage,
  },
  {
    id: 8,
    name: "Iberico ham",
    nameRu: "Хамон иберико",
    price: "224 000",
    image: grillImage,
  },
];

export const MenuItems = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Appetizers / Закуски</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <Card 
              key={item.id}
              className="group overflow-hidden border-border hover:shadow-[var(--shadow-elegant)] transition-all duration-300 cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <button className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white transition-colors">
                    <Heart className="h-5 w-5 text-destructive" />
                  </button>
                </div>
                
                <div className="p-4">
                  <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">
                    {item.nameRu}/ {item.name}
                  </h3>
                  <p className="text-lg font-semibold text-primary">
                    {item.price} сум
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
