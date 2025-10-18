// src/components/AdminPanel/AdminAfterLogin.jsx
import React, { useEffect, useState } from "react";

const STORAGE_KEY = "menuData";

function readStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("parse menuData:", e);
    return [];
  }
}

function writeStorage(menu) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(menu));
  } catch (e) {
    console.error("write menuData:", e);
  }
}

export default function AdminAfterLogin() {
  const [menu, setMenu] = useState([]);
  const [form, setForm] = useState({
    name: "",
    nameRu: "",
    price: "",
    image: "",
    desc: "",
    type: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [alert, setAlert] = useState({ show: false, text: "", type: "" });

  // ✅ Читаем меню при первом рендере
  useEffect(() => {
    setMenu(readStorage());
  }, []);

  const showAlert = (text, type = "info") => {
    setAlert({ show: true, text, type });
    setTimeout(() => setAlert({ show: false, text: "", type: "" }), 2000);
  };

  const saveMenu = (newMenu) => {
    setMenu(newMenu);
    writeStorage(newMenu);
  };

  const handleAddOrSave = () => {
    if (!form.name || !form.price || !form.type) {
      showAlert("Заполните название, цену и категорию!", "error");
      return;
    }

    if (editingId) {
      // редактирование
      const updated = menu.map((item) =>
        item.id === editingId ? { ...item, ...form } : item
      );
      saveMenu(updated);
      showAlert("Блюдо обновлено!", "success");
      setEditingId(null);
    } else {
      // добавление нового
      const newItem = { id: Date.now(), ...form };
      saveMenu([...menu, newItem]);
      showAlert("Блюдо добавлено!", "success");
    }

    // сброс формы
    setForm({
      name: "",
      nameRu: "",
      price: "",
      image: "",
      desc: "",
      type: "",
    });
  };

  const handleDelete = (id) => {
    if (!window.confirm("Вы уверены, что хотите удалить блюдо?")) return;
    const updated = menu.filter((m) => m.id !== id);
    saveMenu(updated);
    if (editingId === id) handleCancelEdit();
    showAlert("Блюдо удалено!", "error");
  };

  const handleEdit = (id) => {
    const item = menu.find((m) => m.id === id);
    if (!item) return;
    setForm({
      name: item.name || "",
      nameRu: item.nameRu || "",
      price: item.price || "",
      image: item.image || "",
      desc: item.desc || "",
      type: item.type || "",
    });
    setEditingId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setForm({
      name: "",
      nameRu: "",
      price: "",
      image: "",
      desc: "",
      type: "",
    });
  };

  return (
    <div className="admin-container">
      <main className="admin-main">
        <header className="admin-header">
          <h1>Административная панель</h1>
        </header>

        {/* ===== Список блюд ===== */}
        <section className="admin-section">
          <h2>Меню</h2>
          <div className="menu-grid">
            {menu.length ? (
              menu.map((item) => (
                <div className="menu-card" key={item.id}>
                  <div className="menu-info">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="menu-image"
                      />
                    )}
                    <div>
                      <h3>
                        {item.nameRu
                          ? `${item.nameRu} / ${item.name}`
                          : item.name}
                      </h3>
                      <p className="price">{item.price}</p>
                      <p className="desc">{item.desc}</p>
                      <p className="type">Категория: {item.type}</p>
                    </div>
                  </div>
                  <div
                    style={{ display: "flex", gap: 8, alignItems: "center" }}
                  >
                    <button onClick={() => handleEdit(item.id)}>✏️</button>
                    <button onClick={() => handleDelete(item.id)}>❌</button>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty">Меню пустое — добавь блюдо ниже.</div>
            )}
          </div>
        </section>

        {/* ===== Добавление/редактирование блюда ===== */}
        <section className="admin-section form-section">
          <h2>{editingId ? "Редактировать блюдо" : "Добавить новое блюдо"}</h2>
          <form
            className="add-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleAddOrSave();
            }}
          >
            <input
              type="text"
              placeholder="Название (EN)"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Название (RU)"
              value={form.nameRu}
              onChange={(e) => setForm({ ...form, nameRu: e.target.value })}
            />
            <input
              type="text"
              placeholder="Цена"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
            />
            <input
              type="text"
              placeholder="URL картинки"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
            />
            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
            >
              <option value="">Выберите категорию</option>
              <option value="snacks">Закуски</option>
              <option value="spreads">Намазки</option>
              <option value="crudo">Крудо</option>
              <option value="breakfast">Завтраки</option>
              <option value="salads">Салаты</option>
              <option value="soups">Супы</option>
              <option value="desserts">Десерты</option>
            </select>
            <textarea
              placeholder="Описание"
              rows="3"
              value={form.desc}
              onChange={(e) => setForm({ ...form, desc: e.target.value })}
            />
            {form.image && (
              <img
                src={form.image}
                alt="preview"
                style={{ maxWidth: 120, borderRadius: 8, marginTop: 8 }}
              />
            )}
            <button
              type="submit"
              className={`action-btn ${editingId ? "save" : ""}`}
            >
              {editingId ? "Сохранить" : "Добавить"}
            </button>
          </form>
        </section>

        {/* ===== АЛЕРТ ===== */}
        {alert.show && (
          <div
            className={`alert ${alert.type}`}
            style={{ position: "fixed", right: 20, bottom: 20 }}
          >
            {alert.text}
          </div>
        )}
      </main>
    </div>
  );
}
