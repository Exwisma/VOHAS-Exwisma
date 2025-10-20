// src/components/Menu/MenuItems.jsx
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

  const activeMenu = menu.filter((item) => item.active !== false);

  return (
    <div className="menu-items">
      {activeMenu.length ? (
        activeMenu.map((item) => (
          <div className="menu-item" key={item.id}>
            <img src={item.image} alt={item.name} className="menu-img" />
            <div className="menu-info">
              <h3>{item.nameRu ? `${item.nameRu} / ${item.name}` : item.name}</h3>
              <p className="price">{item.price}</p>
              {item.desc && <p className="desc">{item.desc}</p>}
            </div>
          </div>
        ))
      ) : (
        <div className="empty">Пока нет активных блюд</div>
      )}
    </div>
  );
}
