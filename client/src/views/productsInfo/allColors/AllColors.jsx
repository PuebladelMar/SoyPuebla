import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getColor } from '../../../redux/Actions';
// import { editColors } from "../../../redux/Actions";
import './allColors.css';
import { FaPencilAlt } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';


import ModificarColorAdmin from './ModificarColorAdmin';
import './createColor.css';

const AllColors = () => {
  const colors = useSelector((state) => state.colorList);

  const dispatch = useDispatch();

  const [newColor, setNewColor] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const [modifiedColor, setModifiedColor] = useState(null);
  useEffect(() => {
    dispatch(getColor());
  }, [dispatch]);

  // const handleColorChange = (event) => {
  //   setNewColor(event.target.value);
  // };

  // const handleColorModified = (color) => {
  //   setModifiedColor(color); // Actualiza el estado con el color modificado
  // };

  const handleColorModified = (color) => {
    const updatedColors = colors.map((c) =>
      c.id === color.id ? color : alert('Color ya existente')
    );
    setModifiedColor(null);
    // dispatch({ type: "SET_COLORS", payload: updatedColors });
    console.log(setModifiedColor);
  };

  const handleDeleteColor = (colorId) => {};

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOpenModal = (color) => {
    setModifiedColor(color);
    // setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div className='main-container'>
      <div className='colors'>
        <h2 className='colores-title'>Colores disponibles</h2>
        {colors.map((color) => (
          <div
            key={color.id}
            className='color-item'
          >
            <p>{color.name}</p>
            {console.log(color)}
            <div className='icons'>
              <button
                className='edit-color'
                onClick={() => setModifiedColor(color)}
              >
                <FaPencilAlt />
              </button>
              <RiDeleteBin6Line />
              <button
                className='delete-color'
                onClick={() => handleDeleteColor(color.id)}
              ></button>
            </div>
          </div>
        ))}
        {/* ... Otro código ... */}
        {modifiedColor && (
          <ModificarColorAdmin
            isOpen={isOpen}
            color={modifiedColor}
            onColorModified={handleColorModified}
            onClose={handleCloseModal}
          />
        )}
        {console.log(onclose)}
      </div>
      <button>Crear</button>
    </div>
  );
};

export default AllColors;
