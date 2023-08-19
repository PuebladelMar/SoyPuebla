import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getColor } from "../../../redux/Actions";
// import {  editColors } from "../../../redux/Actions";
import axios from "axios";
// import colorValidations from "./colorValidations";
import { ChromePicker } from "react-color";
import "./createColor.css";

const ModificarColorAdmin = () => {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.colorList);

  let [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(getColor());
  }, [count]);

  let [editColors, setEditColors] = useState({
    name: "",
    codHex: "",
  });
  const [errors, setErrors] = useState({
    disableButton: true,
  });

  const [colorSelect, setColorSelect] = useState("#ffffff");
  const [hexColor, setHexColor] = useState("#ffffff");

  const handleColorChangeComplete = (newColor) => {
    setColorSelect(newColor.rgb);
    setHexColor(newColor.hex);

    setEditColors((prevCreateColor) => ({
      ...prevCreateColor,
      codHex: newColor.hex,
    }));
  };

  const handleChange = (event) => {
    setEditColors({
      ...editColors,
      [event.target.name]: event.target.value,
    });

    setErrors(
      colorValidations({
        ...editColors,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!editColors.name || !editColors.codHex) {
      <p>Debes llenar el nombre</p>;
    } else {
      try {
        const asyncFunction = async () => {
          await axios.post(`/products/${id}`, {editColors});
          setCount((prevCount) => prevCount + 1);
          alert("color modificado existosamente");
          setEditColors({
            name: "",
            codHex: "",
          });
          setErrors({
            disableButton: true,
          });
        };
        asyncFunction();
      } catch (error) {
        setErrors({ error: `El color ${editColors.name} ya esta creado` });
      }
    }
  };

  return (
    <div className="create-main-containerX">
      <div className="create-containerX">
        <form onSubmit={handleSubmit} className="create-formX">
          <label htmlFor="name">Nombre color:</label>
          <input
            type="text"
            name="name"
            // value={createColor.name}
            required
            placeholder="Nombre"
            className="custom-inputX"
            onChange={handleChange}
          />
          <p className="error">{errors.name}</p>

          <div className="colorSelectorContainer">
            <div className="color-picker">
              <ChromePicker
                color={colorSelect}
                onChangeComplete={handleColorChangeComplete}
                disableAlpha={true}
              />
            </div>
            <div className="colorPreview">
                <h2>Color Preview</h2>
              <button
                className="detailColorButtonX"
                key={color.codHex}
                style={{
                  backgroundColor: hexColor,
                  width: "50px",
                  height: "50px",
                }}
              ></button>
            </div>
          </div>

          <button
            className="submit-buttonzX"
            type="submit"
            // style={{
            //     backgroundColor: "#d9d9d9",
            //   }}
            disabled={Object.keys(errors).length === 0 ? false : true}
          >
            Crear
          </button>
        </form>
      </div>

      <container className="create-containerX">
        <h2>Colores Creados:</h2>
        <div className="listaColores">
          {color.map((color) => (
            <div key={color.id} className="colorItem">
              <button
                className="detailColorButtonX"
                key={color.codHex}
                style={{
                  backgroundColor: color.codHex,
                  width: "30px",
                  height: "30px",
                }}
              ></button>
              <p>{color.name}</p>
            </div>
          ))}
        </div>
      </container>
    </div>
  );
};

export default ModificarColorAdmin;
