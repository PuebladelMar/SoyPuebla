import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getColor } from "../../../redux/Actions";
// import { editColors } from "../../../redux/Actions";
import "./allColors.css";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

import ModificarColorAdmin from "./ModificarColorAdmin";

const AllColors = () => {
  const colors = useSelector((state) => state.colorList);

  const dispatch = useDispatch();

  const [newColor, setNewColor] = useState("");
  const [ isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    dispatch(getColor());
  }, [dispatch]);

  const handleColorChange = (event) => {
    setNewColor(event.target.value);
  };

  const handleDeleteColor = (colorId) => {};


  const handleClick = () => {
   setIsOpen(!isOpen)
  }  
  
  return (
    <div className="main-container">
      <div className="colors">
        <h2 className="colores-title">Colores disponibles</h2>
        {colors.map((color) => (
          <div key={color.id} className="color-item">
            <p>{color.name}</p>
            <div className="icons">
              <button className="edit-color" onClick={() => handleClick()}>
                <FaPencilAlt />
              </button>
              <RiDeleteBin6Line />
              <button
                className="delete-color"
                onClick={() => handleDeleteColor(color.id)}
              ></button>
            </div>
          </div>
        ))}
        {
        isOpen ? (

          <ModificarColorAdmin />
        ):(
         <div> La puta madre </div>
        )

        }
      </div>
    </div>
  );
};

export default AllColors;
