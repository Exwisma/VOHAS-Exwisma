import React, { useState } from 'react';
import './AdminPanel.css';

export default function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleLogin = (e) => {
    e.preventDefault();

    // 💡 тут можешь поставить свои данные
    const ADMIN_USER = '1';
    const ADMIN_PASS = '1';

    if (username === ADMIN_USER && password === ADMIN_PASS) {
      onLogin(true);
    } else {
      setError('Неверное имя или пароль');
      setTimeout(() => setError(''), 2000);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Вход в панель администратора</h2>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            placeholder="Имя администратора"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Войти</button>
          {error && <p className="error-text">{error}</p>}
        </form>
      </div>
    </div>
  );
}
