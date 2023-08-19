import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllInformation, postInformation } from '../../redux/Actions';
import "./Information.css"

const Information = () => {

 
  const dispatch=useDispatch()

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

 
  const saveChanges =async () => {
   await dispatch(postInformation(info))
    // console.log('Cambios guardados:', info);
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
      <label>Imagen del footer:</label>
      <input type="text" name="image" value={info.image} onChange={handleInputChange} />
      <br />
      <button onClick={saveChanges}>Guardar Cambios</button>
    </div>
  );
};

export default Information;