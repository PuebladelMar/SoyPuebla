import { useState } from "react";
import "./AdminAccount.css";

const AdminAccount = () => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Iniciando sesión con usuario: ${usuario}`);
  };

  return (
    <div className="admin-account-container">
      <div className="login-container">
        <h2>Iniciar Sesión</h2>
        <h3>Como administrador</h3>
        <br></br>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
          <button className="btn-admin" type="submit">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminAccount;
