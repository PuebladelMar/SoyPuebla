// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {  getColor } from "../../../redux/Actions";
// import {  editColors } from "../../../redux/Actions";
// import axios from "axios";
// // import colorValidations from "./colorValidations";
// import { ChromePicker } from "react-color";
// import "./createColor.css";


// const ModificarColorAdmin = () => {
//   const dispatch = useDispatch();
//   const color = useSelector((state) => state.colorList);

//   let [count, setCount] = useState(0);

//   useEffect(() => {
//     dispatch(getColor());
//   }, [count]);


//   let [editColors, setEditColors] = useState({
//     name: "",
//     codHex: "",

//   });
//   // const [errors, setErrors] = useState({
//   //   disableButton: true,
//   // });

//   const [colorSelect, setColorSelect] = useState("#ffffff");
//   const [hexColor, setHexColor] = useState("#ffffff");


  // const handlePut = ( id, name, codHex) => {
  //   // const idUpdate = color.id
  //   dispatch(editColors(id, editColors.name, editColors.codHex))
  //   .then((updateColor) => {
  //     setModifiedColor(updateColor)
  //   })
  //   .catch((error) => {
  //     // Manejar el error
  //   });
    // setEditColors({...editColors, name:editColors.name.filter((e)=> e !== event)
    
    // })
  // }

//   const handleColorChangeComplete = (newColor) => {
//     setColorSelect(newColor.rgb);
//     setHexColor(newColor.hex);

//     setEditColors((prevCreateColor) => ({
//       ...prevCreateColor,
//       codHex: newColor.hex,
//     }));
//   };

//   const handleChange = (event) => {
//     setEditColors({
//       ...editColors,
//       [event.target.name]: event.target.value,
//     });
//   }
  //////////////////////////////////




    // setErrors(
    //   colorValidations({
    //     ...editColors,
    //     [event.target.name]: event.target.value,
    //   })
    // );
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (!editColors.name || !editColors.codHex) {
  //     <p>Debes llenar el nombre</p>;
  //   } else {
  //     try {
  //       const asyncFunction = async () => {
  //         await axios.put(`/products/${id}`, {editColors});
  //         setCount((prevCount) => prevCount + 1);
  //         alert("color modificado existosamente");
  //         setEditColors({
  //           name: "",
  //           codHex: "",
  //         });
  //         setErrors({
  //           disableButton: true,
  //         });
  //       };
  //       asyncFunction();
  //     } catch (error) {
  //       // setErrors({ error: `El color ${editColors.name} ya esta creado` });
  //       alert('dskfnadsjonds')
  //     }
  //   }
  // };

  //// esto es el ultimo codigo que hice, descomentar desde aqui.
//   const ModificarColorAdmin = ({ color, onColorModified }) => {
//     const dispatch = useDispatch();
  
//     const [editColor, setEditColor] = useState({
//       id: color.id,
//       name: color.name,
//       codHex: color.codHex,
//     });
  
//     const handleColorChangeComplete = (newColor) => {
//       setEditColor((prevEditColor) => ({
//         ...prevEditColor,
//         codHex: newColor.hex,
//       }));
//     };
  
//     const handleNameChange = (event) => {
//       setEditColor({
//         ...editColor,
//         name: event.target.value,
//       });
//     };
  
//     const handleColorEdit = () => {
//       dispatch(editColors(editColor.id, editColor.name, editColor.codHex))
//         .then((updatedColor) => {
//           onColorModified(updatedColor);
//         })
//         .catch((error) => {
//           // Handle error here
//         });
//     };

//   return (
//     <div className="create-main-containerX">
//       <div className="create-containerX">
//         <form className="create-formX">
//           <label htmlFor="name">Nombre color:</label>
//           <input
//             type="text"
//             name="name"
//             value={editColors.name}
//             required
//             placeholder="Nombre"
//             className="custom-inputX"
//             onChange={handleNameChange}

//           /> 
          
//           {/* <p className="error">{errors.name}</p> */}

//           <div className="colorSelectorContainer">
//             <div className="color-picker">
//               <ChromePicker
//                 color={editColor.codHex}
//                 onChangeComplete={handleColorChangeComplete}
//                 disableAlpha={true}
//               />
//             </div>
//             <div className="colorPreview">
//                 <h2>Color Preview</h2>
//               <button
//                 className="detailColorButtonX"
//                 key={editColor.codHex}
//                 style={{
//                   backgroundColor: hexColor,
//                   width: "50px",
//                   height: "50px",
//                 }}
//               ></button>
//             </div>
//           </div>

//           <button 
//           onClick={handlePut}
//             className="submit-buttonzX"
//             // type="submit"
//             // style={{
//             //     backgroundColor: "#d9d9d9",
//             //   }}
//             // disabled={Object.keys(errors).length === 0 ? false : true}
//           > 
        
//             Modificar
//           </button>
//          {console.log(handlePut)}
//         </form>
//       </div>

//       <container className="create-containerX">
//         <h2>Colores Creados:</h2>
//         <div className="listaColores">
//           {color.map((color) => (
//             <div key={color.id} className="colorItem">
//               <button
//                 className="detailColorButtonX"
//                 key={color.codHex}
//                 style={{
//                   backgroundColor: color.codHex,
//                   width: "30px",
//                   height: "30px",
//                 }}
//               ></button>
//               <p>{color.name}</p>
//             </div>
//           ))}
//         </div>
//       </container>
//     </div>
//   );
// };

// export default ModificarColorAdmin;

// ModificarColorAdmin.jsx

import { useState } from "react";
import { useDispatch } from "react-redux";
import { editColors } from "../../../redux/Actions";
import './createColor.css'


const ModificarColorAdmin = ({ isOpen, setIsOpen, editingColor }) => {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState(editingColor.name);
  const [newCodHex, setNewCodHex] = useState(editingColor.codHex);

  const handleEditSubmit = () => {
    dispatch(editColors(editingColor.id, newName, newCodHex));
    setIsOpen(false);
  };

  return (
    <div className="edit-modal">
      <h2>Editar Color</h2>
      <form onSubmit={handleEditSubmit}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type="text"
          value={newCodHex}
          onChange={(e) => setNewCodHex(e.target.value)}
        />
        <button type="submit">Guardar Cambios</button>
        <button onClick={() => setIsOpen(false)}>Cancelar</button>
      </form>
    </div>
  );
};

export default ModificarColorAdmin;
