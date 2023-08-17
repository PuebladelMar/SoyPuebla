
import { useState } from "react";
import "./AdminAccount.css";

const AdminAccount = () => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulación de inicio de sesión exitoso
    if (usuario === "1" && contrasena === "1") {
      setIsLoggedIn(true);
    } else {
      alert("Inicio de sesión fallido. Verifica tus credenciales.");
    }
  };

  return (
    <div className="admin-account-container">
      {!isLoggedIn ? (
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
      ) : (
        <div className="dashboard-container">
          {/* Contenido del panel d
          
          
          e administración */}
          <h2>Bienvenido al Panel de Administración</h2>
          {/* ... Más contenido ..
          
          
          . */}
        </div>
      )}
    </div>
  );
};

export default AdminAccount;
