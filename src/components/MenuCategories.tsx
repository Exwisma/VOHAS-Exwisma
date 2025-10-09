import { useState } from "react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "snacks", name: "Appetizers", nameRu: "Закуски" },
  { id: "spreads", name: "Spreads", nameRu: "Намазки" },
  { id: "crudo", name: "Crudo", nameRu: "Крудо" },
  { id: "breakfast", name: "Breakfast", nameRu: "Завтраки" },
  { id: "salads", name: "Salads", nameRu: "Салаты" },
  { id: "soups", name: "Soups", nameRu: "Супы" },
  { id: "paella", name: "Paella", nameRu: "Паэлья" },
  { id: "meat", name: "Main Chicken and Meat", nameRu: "Горячее мясо и птица" },
  { id: "seafood", name: "Seafood", nameRu: "Горячее морепродукты" },
  { id: "pasta", name: "Pasta", nameRu: "Паста" },
  { id: "oven", name: "Oven", nameRu: "Печь" },
  { id: "grill", name: "Grill", nameRu: "Угли" },
  { id: "sides", name: "Side dishes", nameRu: "Гарниры" },
  { id: "desserts", name: "Desserts", nameRu: "Десерты" },
];

export const MenuCategories = () => {
  const [activeCategory, setActiveCategory] = useState("snacks");

  return (
    <div className="bg-background border-b border-border sticky top-20 z-40 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex gap-6 overflow-x-auto py-6 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "whitespace-nowrap text-sm font-medium transition-colors pb-2 border-b-2 flex-shrink-0",
                activeCategory === category.id
                  ? "text-primary border-primary"
                  : "text-muted-foreground border-transparent hover:text-foreground"
              )}
            >
              {category.nameRu}/{category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
