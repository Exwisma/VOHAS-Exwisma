import React, { useEffect, useState } from "react";
import { defaultMenu } from "../data/menuData";
import "./MenuItems.css";

const STORAGE_KEY = "menuData";

function readStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : defaultMenu;
  } catch {
    return defaultMenu;
  }
}

export default function MenuItems() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu(readStorage());
  }, []);

  return (
    <div className="menu-items">
      {menu.map((item) => (
        <div
          className={`menu-item ${item.active ? "active" : "inactive"}`}
          key={item.id}
        >
          <div className="image-container">
            <img src={item.image} alt={item.name} className="menu-img" />
            {!item.active && <div className="overlay">Не активно</div>}
          </div>
          <div className="menu-info">
            <h3>
              {item.nameRu ? `${item.nameRu} / ${item.name}` : item.name}
            </h3>
            <p className="price">{item.price} сум</p>
          </div>
        </div>
      ))}
    </div>
  );
}
