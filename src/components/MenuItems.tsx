import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig"; // ✅ make sure the path is correct

export const MenuItems = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    async function fetchMenu() {
      try {
        const querySnapshot = await getDocs(collection(db, "menu"));
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMenuItems(items);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    }

    fetchMenu();
  }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Menu / Меню</h2>

        {menuItems.length === 0 ? (
          <p className="text-center text-gray-500">Menu is empty...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {menuItems.map((item) => (
              <Card
                key={item.id}
                className="group overflow-hidden border hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full bg-gray-100 text-gray-400">
                        No image
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">
                      {item.nameRu ? `${item.nameRu} / ${item.name}` : item.name}
                    </h3>
                    <p className="text-lg font-semibold text-primary">
                      {item.price} сум
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
