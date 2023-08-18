import React, { useState } from 'react';
import "./Information.css"

const Information = () => {
  // Estado para almacenar la información editable
  const [info, setInfo] = useState({
    email: 'correo@example.com',
    phone: '123-456-7890',
    instagram: '@usuario_instagram',
    facebook: 'nombre_de_usuario',
    whatsapp: '123-456-7890',
  });

  // Manejador de cambio de input
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  // Función para guardar los cambios
  const saveChanges = () => {
    // Aquí puedes implementar la lógica para guardar los cambios en la base de datos
    console.log('Cambios guardados:', info);
  };

  return (
    <div>
      <h2 className='vista'>Información de Contacto</h2>
      <label>Email:</label>
      <input type="text" name="email" value={info.email} onChange={handleInputChange} />
      <br />
      <label>Teléfono:</label>
      <input type="text" name="phone" value={info.phone} onChange={handleInputChange} />
      <br />
      <label>Instagram:</label>
      <input type="text" name="instagram" value={info.instagram} onChange={handleInputChange} />
      <br />
      <label>Facebook:</label>
      <input type="text" name="facebook" value={info.facebook} onChange={handleInputChange} />
      <br />
      <label>WhatsApp:</label>
      <input type="text" name="whatsapp" value={info.whatsapp} onChange={handleInputChange} />
      <br />
      <button onClick={saveChanges}>Guardar Cambios</button>
    </div>
  );
};

export default Information;