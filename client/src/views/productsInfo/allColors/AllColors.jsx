import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editColors, getColor, deleteColor } from '../../../redux/Actions';
import './allColors.css';
import { FaPencilAlt } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2'




const AllColors = () => {
  const colors = useSelector((state) => state.colorList);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchColors(){
      await dispatch(getColor())
    }
    fetchColors()
  }, [dispatch]);



  const handleEditColors = async (id, name, codHex) => {
    const updatedName = prompt('Enter new name', name);
    if (updatedName) {
      await dispatch(editColors(id, updatedName, codHex));
      dispatch(getColor());
    }
  };
  const handleDeleteColors = async (id) => {
    await dispatch(deleteColor(id));
    await dispatch(getColor());
  };

  return (
    <div className='main-container'>
      <div className='colors'>
        <h2 className='colores-title'>Colores disponibles</h2>
        {
          Array.isArray(colors) && 
        
        colors.map((color) => (
          <div
            key={color.id}
            className='color-item'
          >
            {color.name}
            {console.log(color)}
            <div className='icons'>
              <button
                className='edit-color'
                onClick={() => handleEditColors(color.id, color.name, color.codHex)}
              >
                <FaPencilAlt />
              </button>
              <button
                  className='delete-colors'
                  onClick={() => handleDeleteColors(color.id)}
                >
                  {<RiDeleteBin6Line />}
                </button>
              
              
                
              
            </div>
          </div>
        ))}
      </div>
      <button>Crear</button>
    </div>
  );
};

export default AllColors;
