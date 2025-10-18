import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "snacks", name: "Appetizers", nameRu: "Закуски" },
  { id: "spreads", name: "Spreads", nameRu: "Намазки" },
  { id: "crudo", name: "Crudo", nameRu: "Крудо" },
  { id: "breakfast", name: "Breakfast", nameRu: "Завтраки" },
  { id: "salads", name: "Salads", nameRu: "Салаты" },
  { id: "soups", name: "Soups", nameRu: "Супы" },
  { id: "desserts", name: "Desserts", nameRu: "Десерты" },
];

const STORAGE_KEY = "menuData";

export const MenuCategories = () => {
  const [activeCategory, setActiveCategory] = useState("snacks");
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const data = raw ? JSON.parse(raw) : [];
      setMenu(data);
    } catch (e) {
      console.error("parse error:", e);
    }
  }, []);

  const filteredMenu = menu.filter((item) => item.type === activeCategory);

  return (
    <div>
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
                {category.nameRu} / {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMenu.length ? (
          filteredMenu.map((item) => (
            <div
              key={item.id}
              className="border border-border rounded-2xl p-4 shadow-sm bg-card hover:shadow-md transition"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-xl mb-3"
                />
              )}
              <h3 className="font-semibold text-lg">
                {item.nameRu ? `${item.nameRu} / ${item.name}` : item.name}
              </h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
              <p className="mt-2 font-medium">{item.price} сум</p>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-muted-foreground">
            Нет блюд в этой категории.
          </div>
        )}
      </div>
    </div>
  );
};
