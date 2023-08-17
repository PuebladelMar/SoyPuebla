import "./Create.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  postProducts,
  getColor,
  getSizes,
  getCategories,
  getSeries,
} from "../../redux/Actions";
import validations from "./Validations";
import UploadWidget from "../../componentes/imageUpload/imageUpload";
import MutipleUploadWidget from "../../componentes/multipleImageUpload/multipleImageUpload";
import CreateDetail from "./createDetail/CreateDetail";
import CreateColor from "./createColor/createColor";





const Test = () => {



    const [showAlert, setShowAlert] = useState(false); 
      
    const handleCloseAlert = (event) => {
      setShowAlert(false);
      event.preventDefault();
    };
    
    const handleOpenColorCreate = (event) => {
      setShowAlert(true);
      event.preventDefault();
    };

return (
<div>
<br />
<br />

<br />
<br />
<br />
<br />
    <button
    onClick={() => {
        handleOpenColorCreate();
    }}
    className="mainImage-upload-buttonY "
>
Crear color
</button>

{showAlert && (
    <>
    <div className="transparentBackgroundY"></div>
    
    <div className="alertContainerY">
    <p className="alertTextY">Creador de color</p>
    <CreateColor/>
    <div className="alertButtonsY">
    <button onClick={handleCloseAlert}>X</button>
    </div>
    </div>
    </>
    )}
    </div>

    )
}

export default Test;
