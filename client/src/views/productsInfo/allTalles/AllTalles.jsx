import "./AllTalles.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSizes, putSizes } from "../../../redux/Actions";
import { FaPencilAlt } from "react-icons/fa";
import CreateSize from "../../create/createSize/createSize";

const AllTalles = () => {
  const sizesList = useSelector((state) => state.sizesList);
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getSizes());
    };

    fetchData();
  }, [dispatch]);

  const handleEditSizes = async (id, name) => {
    const updatedName = prompt("Enter new name", name);
    if (updatedName) {
      await dispatch(putSizes(id, updatedName));
      dispatch(getSizes());
    }
  };

  const handleCloseAlert = (event) => {
    setShowAlert({});
    event.preventDefault();
  };

  const handleOpenSizeCreate = (event) => {
    setShowAlert({ size: true });
    event.preventDefault();
  };

  return (
    <div className="talles-main-admin" name="series" value="name">
      <div className="talles-container-background">
        <h2 className="talles-title-admin">Talles disponibles</h2>
        {Array.isArray(sizesList) &&
          sizesList.map((el) => (
            <div key={el.id} className="talles-item">
              {el.name}
              <div className="icons">
                <button onClick={() => handleEditSizes(el.id, el.name)}>
                  <FaPencilAlt />
                </button>
              </div>
            </div>
          ))}
      </div>
      {showAlert.size && (
        <popups className="pop-ups">
          <>
            <div className="transparentBackgroundY"></div>

            <div className="alertContainerY">
              <p className="alertTextY">Creador de talle</p>
              <CreateSize />
              <div className="alertButtonsY">
                <button onClick={handleCloseAlert}>X</button>
              </div>
            </div>
          </>
        </popups>
      )}
      <button
        type="button"
        onClick={() => {
          handleOpenSizeCreate();
        }}
        className="btn-talle-amigo "
      >
        Crear Talle
      </button>
    </div>
  );
};

export default AllTalles;
