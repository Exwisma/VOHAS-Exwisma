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
  const [form, setForm] = useState({ name: "", nameRu: "", price: "", image: "", desc: "" });
  const [editingId, setEditingId] = useState(null);
  const [alert, setAlert] = useState({ show: false, text: "", type: "" });

  useEffect(() => {
    const saved = readStorage();
    setMenu(saved);
  }, []);

  const showAlert = (text, type = "info") => {
    setAlert({ show: true, text, type });
    setTimeout(() => setAlert({ show: false, text: "", type: "" }), 2200);
  };

  const saveMenu = (newMenu) => {
    setMenu(newMenu);
    writeStorage(newMenu);
  };

  const handleAddOrSave = () => {
    if (!form.name || !form.price) {
      showAlert("Заполните название и цену!", "error");
      return;
    }

    if (editingId) {
      // Сохранение редактирования
      const updated = menu.map((item) =>
        item.id === editingId ? { ...item, ...form } : item
      );
      saveMenu(updated);
      showAlert("Блюдо обновлено!", "success");
      setEditingId(null);
    } else {
      // Добавление нового блюда
      const newItem = { id: Date.now(), ...form };
      saveMenu([...menu, newItem]);
      showAlert("Блюдо добавлено!", "success");
    }

    setForm({ name: "", nameRu: "", price: "", image: "", desc: "" });
  };

  const handleDelete = (id) => {
    if (!confirm("Вы уверены, что хотите удалить блюдо?")) return;
    const updated = menu.filter((m) => m.id !== id);
    saveMenu(updated);
    // Если удалили тот, который редактировался — сброс формы
    if (editingId === id) {
      setEditingId(null);
      setForm({ name: "", nameRu: "", price: "", image: "", desc: "" });
    }
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
    });
    setEditingId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setForm({ name: "", nameRu: "", price: "", image: "", desc: "" });
  };

  return (
    <div className="admin-container">
      <main className="admin-main">
        <header className="admin-header">
          <h1>Административная панель</h1>
        </header>

        {/* ===== Меню ===== */}
        <section className="admin-section">
          <h2>Меню</h2>
          <div className="menu-grid">
            {menu.length ? (
              menu.map((item) => (
                <div className="menu-card" key={item.id}>
                  <div className="menu-info">
                    {item.image && (
                      <img src={item.image} alt={item.name} className="menu-image" />
                    )}
                    <div>
                      <h3>{item.nameRu ? `${item.nameRu} / ${item.name}` : item.name}</h3>
                      <p className="price">{item.price}</p>
                      <p className="desc">{item.desc}</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <button className="add-btn" onClick={() => handleEdit(item.id)} title="Редактировать">
                      ✏️
                    </button>
                    <button className="delete-btn" onClick={() => handleDelete(item.id)} title="Удалить">
                      ✕
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty">Меню пустое — добавь первое блюдо ниже.</div>
            )}
          </div>
        </section>

        {/* ===== Добавить блюдо ===== */}
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
              placeholder="Цена (например: 132 000)"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
            />
            <input
              type="text"
              placeholder="Ссылка на фото блюда (путь или URL)"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
            />
            <textarea
              placeholder="Описание блюда"
              rows="3"
              value={form.desc}
              onChange={(e) => setForm({ ...form, desc: e.target.value })}
            />

            {form.image && (
              <div className="image-preview" style={{ marginTop: 8 }}>
                <img src={form.image} alt="preview" style={{ maxWidth: 140, borderRadius: 8 }} />
              </div>
            )}

            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              <button type="submit" className="add-btn">
                {editingId ? "Сохранить изменения" : "Добавить"}
              </button>
              {editingId && (
                <button type="button" className="btn" onClick={handleCancelEdit}>
                  Отмена
                </button>
              )}
            </div>
          </form>
        </section>

        {/* ===== АЛЕРТ ===== */}
        {alert.show && (
          <div className={`alert ${alert.type}`} style={{ position: "fixed", right: 20, bottom: 20 }}>
            <span className="alert-icon">
              {alert.type === "success" && "✅"}
              {alert.type === "error" && "❌"}
              {alert.type === "info" && "ℹ️"}
            </span>
            <span style={{ marginLeft: 8 }}>{alert.text}</span>
          </div>
        )}
      </main>
    </div>
  );
}
