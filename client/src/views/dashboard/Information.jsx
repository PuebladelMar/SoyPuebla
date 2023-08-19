import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postInformation } from '../../redux/Actions';
import "./Information.css";

const Information = () => {
  const dispatch = useDispatch();

  const [info, setInfo] = useState({
    email: 'correo@example.com',
    phone: '123-456-7890',
    instagram: '@usuario_instagram',
    facebook: 'nombre_de_usuario',
    whatsapp: '123-456-7890',
    image: "www.imagen.com"
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const saveChanges = async () => {
    await dispatch(postInformation(info));
    // console.log('Cambios guardados:', info);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="vista">Información de Contacto</h2>
        <label className="label">Email:</label>
        <input
          className="input"
          type="text"
          name="email"
          value={info.email}
          onChange={handleInputChange}
        />
        <label className="label">Teléfono:</label>
        <input
          className="input"
          type="text"
          name="phone"
          value={info.phone}
          onChange={handleInputChange}
        />
        <label className="label">Instagram:</label>
        <input
          className="input"
          type="text"
          name="instagram"
          value={info.instagram}
          onChange={handleInputChange}
        />
        <label className="label">Facebook:</label>
        <input
          className="input"
          type="text"
          name="facebook"
          value={info.facebook}
          onChange={handleInputChange}
        />
        <label className="label">WhatsApp:</label>
        <input
          className="input"
          type="text"
          name="whatsapp"
          value={info.whatsapp}
          onChange={handleInputChange}
        />
        <label className="label">Imagen del footer:</label>
        <input
          className="input"
          type="text"
          name="image"
          value={info.image}
          onChange={handleInputChange}
        />
        <button className="button" onClick={saveChanges}>
          Guardar Cambios
        </button>
      </div>
    </div>
  );
};

export default Information;
