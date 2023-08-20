// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getColor } from "../../../redux/Actions";
// // import { editColors } from "../../../redux/Actions";
// import "./allColors.css";
// import { FaPencilAlt } from "react-icons/fa";
// import { RiDeleteBin6Line } from "react-icons/ri";

// import ModificarColorAdmin from "./ModificarColorAdmin";

// const AllColors = () => {
//   const colors = useSelector((state) => state.colorList);

//   const dispatch = useDispatch();

//   const [newColor, setNewColor] = useState("");
//   const [ isOpen, setIsOpen] = useState(false)

//   const [modifiedColor, setModifiedColor] = useState(null)
//   useEffect(() => {
//     dispatch(getColor());
//   }, [dispatch]);

//   // const handleColorChange = (event) => {
//   //   setNewColor(event.target.value);
//   // };

//   // const handleColorModified = (color) => {
//   //   setModifiedColor(color); // Actualiza el estado con el color modificado
//   // };

//   const handleColorModified = (color) => {
//     const updatedColors = colors.map((c) =>
//       c.id === color.id ? color : alert('Color ya existente')
//     );
//     setModifiedColor(null);
//     // dispatch({ type: "SET_COLORS", payload: updatedColors });
//     console.log(setModifiedColor);
//   };

//   const handleDeleteColor = (colorId) => {};

//   const handleClick = () => {
//    setIsOpen(!isOpen)
//   }

//   return (
//     <div className="main-container">
//       <div className="colors">
//         <h2 className="colores-title">Colores disponibles</h2>
//         {colors.map((color) => (
//           <div key={color.id} className="color-item">
//             <p>{color.name}</p>
//             {console.log(color)}
//             <div className="icons">
//               <button className="edit-color" onClick={() =>  setModifiedColor(color)}>
//                 <FaPencilAlt />
//               </button>
//               <RiDeleteBin6Line />
//               <button
//                 className="delete-color"
//                 onClick={() => handleDeleteColor(color.id)}
//               ></button>
//             </div>
//           </div>
//         ))}
//         {
//         // isOpen ? (

//         //   <ModificarColorAdmin
//         //   color = {modifiedColor}
//         //   onColorModified={handleColorModified}/>
//         // ):(
//         //  <div>

//         //  {modifiedColor && (
//         //         <div className="color-item">
//         //           <p>{modifiedColor.name}</p>
//         //           {/* Renderiza el color modificado */}
//         //         </div>
//         //       )}
//         //  </div>
//         // )

//         }
//       </div>
//     </div>
//   );
// };

// export default AllColors;

//////////////
import { getColor } from "../../../redux/Actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import ModificarColorAdmin from "./ModificarColorAdmin";
import Swal from 'sweetalert2'
import './AllColors.css';
import { deleteColor } from "../../../redux/Actions";

const AllColors = () => {
  const colors = useSelector((state) => state.colorList);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [editingColor, setEditingColor] = useState(null); 

  useEffect(() => {
    // Swal.fire('Soy un alert de sweet alert')
    dispatch(getColor());
  }, [dispatch]);

  const handleEditClick = (color) => {
    setEditingColor(color); 
    setIsOpen(true); 
  };

  const handleDeleteClick = (color) => {
    Swal.fire({
      title: `¿Estás seguro de eliminar el color ${color.name}?`,
      text: "No podrás revertir este cambio",
      icon: 'warning', // Cambia 'Advertencia' por 'warning'
      showCancelButton: true,
      confirmButtonColor: '#517f7F',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, bórralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario confirma, entonces dispara la acción de Redux para eliminar el color
        dispatch(deleteColor(color.id));
        Swal.fire(
          'Borrado',
          'Tu color ha sido borrado',
          'success' // Cambia 'Exitoso' por 'success'
        );
      }
    });
  };
  return (
    <div className="main-container">
      <div className="colors">
        <h2 className="colores-title">Colores disponibles</h2>
        {colors.map((color) => (
          <div key={color.id} className="color-item">
            <p>{color.name}</p>
            <div className="icons">
              <button className="edit-color" onClick={() => handleEditClick(color)}>
                <FaPencilAlt />
              </button>
              <button className="delete-color" onClick={() => handleDeleteClick(color)}>
              <RiDeleteBin6Line />
              </button>
            </div>
          </div>
        ))}
      </div>
      {isOpen && (
        <ModificarColorAdmin
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          editingColor={editingColor}
        />
      )}
    </div>
  );
};

export default AllColors;

