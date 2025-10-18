import React, { useState } from 'react';
import './AdminPanel.css';


export default function AdminPanel() {
  const [menu, setMenu] = useState([
    {
      name: 'Pizza Margherita',
      price: '10$',
      image: 'https://cdn-icons-png.flaticon.com/512/1404/1404945.png',
      desc: 'Классическая пицца с томатами, сыром и базиликом',
    },
    {
      name: 'Cheeseburger',
      price: '8$',
      image: 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png',
      desc: 'Сочный бургер с говядиной, сыром и соусом BBQ',
    },
    {
      name: 'Pasta Carbonara',
      price: '9$',
      image: 'https://cdn-icons-png.flaticon.com/512/3480/3480816.png',
      desc: 'Паста с беконом, сливками и пармезаном',
    },
    {
      name: 'Caesar Salad',
      price: '7$',
      image: 'https://cdn-icons-png.flaticon.com/512/857/857681.png',
      desc: 'Салат с курицей, сухариками и соусом Цезарь',
    },
    {
      name: 'Sushi Set',
      price: '15$',
      image: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png',
      desc: 'Набор роллов и суши с лососем и авокадо',
    },
    {
      name: 'Taco',
      price: '6$',
      image: 'https://cdn-icons-png.flaticon.com/512/3174/3174880.png',
      desc: 'Мексиканское тако с мясом и овощами',
    },
    {
      name: 'Pizza Margherita',
      price: '10$',
      image: 'https://cdn-icons-png.flaticon.com/512/1404/1404945.png',
      desc: 'Классическая пицца с томатами, сыром и базиликом',
    },
    {
      name: 'Cheeseburger',
      price: '8$',
      image: 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png',
      desc: 'Сочный бургер с говядиной, сыром и соусом BBQ',
    },
    {
      name: 'Pasta Carbonara',
      price: '9$',
      image: 'https://cdn-icons-png.flaticon.com/512/3480/3480816.png',
      desc: 'Паста с беконом, сливками и пармезаном',
    },
    {
      name: 'Caesar Salad',
      price: '7$',
      image: 'https://cdn-icons-png.flaticon.com/512/857/857681.png',
      desc: 'Салат с курицей, сухариками и соусом Цезарь',
    },
    {
      name: 'Sushi Set',
      price: '15$',
      image: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png',
      desc: 'Набор роллов и суши с лососем и авокадо',
    },
    {
      name: 'Taco',
      price: '6$',
      image: 'https://cdn-icons-png.flaticon.com/512/3174/3174880.png',
      desc: 'Мексиканское тако с мясом и овощами',
    },{
      name: 'Pizza Margherita',
      price: '10$',
      image: 'https://cdn-icons-png.flaticon.com/512/1404/1404945.png',
      desc: 'Классическая пицца с томатами, сыром и базиликом',
    },
    {
      name: 'Cheeseburger',
      price: '8$',
      image: 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png',
      desc: 'Сочный бургер с говядиной, сыром и соусом BBQ',
    },
    {
      name: 'Pasta Carbonara',
      price: '9$',
      image: 'https://cdn-icons-png.flaticon.com/512/3480/3480816.png',
      desc: 'Паста с беконом, сливками и пармезаном',
    },
    {
      name: 'Caesar Salad',
      price: '7$',
      image: 'https://cdn-icons-png.flaticon.com/512/857/857681.png',
      desc: 'Салат с курицей, сухариками и соусом Цезарь',
    },
    {
      name: 'Sushi Set',
      price: '15$',
      image: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png',
      desc: 'Набор роллов и суши с лососем и авокадо',
    },
    {
      name: 'Taco',
      price: '6$',
      image: 'https://cdn-icons-png.flaticon.com/512/3174/3174880.png',
      desc: 'Мексиканское тако с мясом и овощами',
    },
  ]);

  const [dish, setDish] = useState({ name: '', price: '', image: '', desc: '' });
  const [alert, setAlert] = useState({ show: false, text: '', type: '' });

  const handleDelete = (index) => {
    setMenu(menu.filter((_, i) => i !== index));
    setAlert({ show: true, text: 'Блюдо удалено!', type: 'error' });
    setTimeout(() => setAlert({ show: false, text: '', type: '' }), 2500);
  };

  const handleAddDish = () => {
    if (!dish.name || !dish.price || !dish.image) {
      setAlert({ show: true, text: 'Заполните все поля!', type: 'error' });
      setTimeout(() => setAlert({ show: false, text: '', type: '' }), 2500);
      return;
    }

    setMenu([...menu, dish]);
    setDish({ name: '', price: '', image: '', desc: '' });
    setAlert({ show: true, text: 'Блюдо успешно добавлено!', type: 'success' });
    setTimeout(() => setAlert({ show: false, text: '', type: '' }), 2500);
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
            {menu.map((item, index) => (
              <div className="menu-card" key={index}>
                <div className="menu-info">
                  {item.image && <img src={item.image} alt={item.name} className="menu-image" />}
                  <div>
                    <h3>{item.name}</h3>
                    <p className="price">{item.price}</p>
                    <p className="desc">{item.desc}</p>
                  </div>
                </div>
                <button className="delete-btn" onClick={() => handleDelete(index)}>✕</button>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Добавить блюдо ===== */}
        <section className="admin-section form-section">
          <h2>Добавить новое блюдо</h2>
          <form className="add-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Название блюда"
              value={dish.name}
              onChange={(e) => setDish({ ...dish, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Цена блюда"
              value={dish.price}
              onChange={(e) => setDish({ ...dish, price: e.target.value })}
            />
            <input
              type="text"
              placeholder="Ссылка на фото блюда"
              value={dish.image}
              onChange={(e) => setDish({ ...dish, image: e.target.value })}
            />
            <textarea
              placeholder="Описание блюда"
              rows="3"
              value={dish.desc}
              onChange={(e) => setDish({ ...dish, desc: e.target.value })}
            ></textarea>

            {dish.image && (
              <div className="image-preview">
                <img src={dish.image} alt="preview" />
              </div>
            )}

            <button type="button" className="add-btn" onClick={handleAddDish}>
              Добавить
            </button>
          </form>
        </section>

        {/* ===== АЛЕРТ ===== */}
        {alert.show && (
          <div className={`alert ${alert.type}`}>
            <span className="alert-icon">
              {alert.type === 'success' && '✅'}
              {alert.type === 'error' && '❌'}
              {alert.type === 'info' && 'ℹ️'}
            </span>
            <span>{alert.text}</span>
          </div>
        )}
      </main>
    </div>
  );
}
