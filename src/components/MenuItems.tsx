import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { defaultMenu } from "@/data/menuData";

export const MenuItems = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("menuData");
    if (saved) {
      setMenuItems(JSON.parse(saved));
    } else {
      setMenuItems(defaultMenu);
      localStorage.setItem("menuData", JSON.stringify(defaultMenu));
    }
  }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Menu / Меню</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden border hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">
                    {item.nameRu} / {item.name}
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
