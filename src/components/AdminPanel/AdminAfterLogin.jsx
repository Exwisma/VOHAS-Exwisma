import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig"; // adjust path if needed

export default function AdminAfterLogin() {
  const [menu, setMenu] = useState([]);
  const [form, setForm] = useState({
    name: "",
    nameRu: "",
    price: "",
    image: "",
    desc: "",
    type: "",
    active: true, // default active
  });
  const [editingId, setEditingId] = useState(null);
  const [alert, setAlert] = useState({ show: false, text: "", type: "" });

  // ✅ Load all menu items (active + inactive)
  useEffect(() => {
    async function fetchMenu() {
      try {
        const querySnapshot = await getDocs(collection(db, "menu"));
        const items = querySnapshot.docs.map((docSnap) => ({
          id: docSnap.id,
          ...docSnap.data(),
        }));
        setMenu(items);
      } catch (error) {
        console.error("Error loading menu:", error);
        showAlert("Ошибка при загрузке меню!", "error");
      }
    }
    fetchMenu();
  }, []);

  const showAlert = (text, type = "info") => {
    setAlert({ show: true, text, type });
    setTimeout(() => setAlert({ show: false, text: "", type: "" }), 2000);
  };

  // ✅ Add or Update
  const handleAddOrSave = async () => {
    if (!form.name || !form.price || !form.type) {
      showAlert("Заполните название, цену и категорию!", "error");
      return;
    }

    try {
      if (editingId) {
        const docRef = doc(db, "menu", editingId);
        await updateDoc(docRef, { ...form });
        const updated = menu.map((item) =>
          item.id === editingId ? { id: editingId, ...form } : item
        );
        setMenu(updated);
        showAlert("Блюдо обновлено!", "success");
        setEditingId(null);
      } else {
        const docRef = await addDoc(collection(db, "menu"), { ...form });
        setMenu([...menu, { id: docRef.id, ...form }]);
        showAlert("Блюдо добавлено!", "success");
      }

      setForm({
        name: "",
        nameRu: "",
        price: "",
        image: "",
        desc: "",
        type: "",
        active: true,
      });
    } catch (error) {
      console.error(error);
      showAlert("Ошибка при сохранении!", "error");
    }
  };

  // ✅ Delete item
  const handleDelete = async (id) => {
    if (!window.confirm("Удалить блюдо?")) return;
    try {
      await deleteDoc(doc(db, "menu", id));
      setMenu(menu.filter((m) => m.id !== id));
      showAlert("Блюдо удалено!", "error");
    } catch (error) {
      console.error(error);
      showAlert("Ошибка при удалении!", "error");
    }
  };

  // ✅ Edit item
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
      active: item.active ?? true,
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
      active: true,
    });
  };

  // ✅ Toggle active directly from list
  const toggleActive = async (id, currentValue) => {
    try {
      const docRef = doc(db, "menu", id);
      await updateDoc(docRef, { active: !currentValue });
      setMenu((prev) =>
        prev.map((m) => (m.id === id ? { ...m, active: !currentValue } : m))
      );
      showAlert(
        `Статус изменён: ${!currentValue ? "Активно" : "Не активно"}`,
        "success"
      );
    } catch (error) {
      console.error(error);
      showAlert("Ошибка при изменении статуса!", "error");
    }
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
                <div
                  key={item.id}
                  className={`menu-card ${!item.active ? "inactive" : ""}`}
                  style={{
                    opacity: item.active ? 1 : 0.6,
                    border: item.active
                      ? "1px solid #4caf50"
                      : "1px solid #ccc",
                  }}
                >
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
                      <p>
                        Статус:{" "}
                        <strong
                          style={{
                            color: item.active ? "green" : "red",
                          }}
                        >
                          {item.active ? "Активно" : "Скрыто"}
                        </strong>
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button onClick={() => handleEdit(item.id)}>✏️</button>
                    <button onClick={() => handleDelete(item.id)}>❌</button>
                    <button onClick={() => toggleActive(item.id, item.active)}>
                      {item.active ? "👁️ Hide" : "👁️ Show"}
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty">Меню пустое — добавь блюдо ниже.</div>
            )}
          </div>
        </section>

        {/* ===== Форма добавления/редактирования ===== */}
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
              style={{
                width: "100%",
                padding: "14px 20px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                fontSize: "16px",
                appearance: "none",
                backgroundColor: "#fff",
                backgroundImage:
                  'url(\'data:image/svg+xml;utf8,<svg fill="%23666" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>\')',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 14px center", // 👈 moved arrow slightly right
                cursor: "pointer",
              }}
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

            {/* ✅ Active toggle */}
            <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <input
                type="checkbox"
                checked={form.active}
                onChange={(e) => setForm({ ...form, active: e.target.checked })}
              />
              Активно (показывать пользователям)
            </label>

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
            {editingId && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="cancel-btn"
                style={{ marginLeft: 8 }}
              >
                Отмена
              </button>
            )}
          </form>
        </section>

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
