import React, { useState } from 'react';
import AdminLogin from '../AdminPanel/AdminLogin';
import AdminAfterLogin from '../AdminPanel/AdminAfterLogin';
import "./AdminPanel.css";

function AdminPanel() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div>
      {isLogged ? (
        <AdminAfterLogin />
      ) : (
        <AdminLogin onLogin={setIsLogged} />
      )}
    </div>
  );
}

export default AdminPanel;
