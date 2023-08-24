import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editColors, getColor, deleteColor } from "../../../redux/Actions";
import "./allColors.css";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import CreateColor from "../../create/createColor/createColor";
import Swal from "sweetalert2";

const AllColors = () => {
  const colors = useSelector((state) => state.colorList);
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getColor());
    };

    fetchData();
  }, [dispatch]);

  const handleCloseAlert = (event) => {
    setShowAlert({});
    event.preventDefault();
  };

  const handleEditColors = async (id, name, codHex) => {
    const updatedName = name;
    if (updatedName) {
      await dispatch(editColors(id, updatedName, codHex));
      dispatch(getColor());
    }
  };

  const handleDeleteColors = async (id) => {
    const result = await Swal.fire({
      title: "¿Estás segura?",
      text: "Una vez eliminado, se borrará automáticamente y afectará el funcionamiento de los productos.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#517f7f",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, elimínalo",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      try {
        await dispatch(deleteColor(id));
        await dispatch(getColor());

        Swal.fire({
          title: "Eliminado",
          text: "El color ha sido eliminado.",
          icon: "success",
          confirmButtonColor: "#517f7f",
        });
      } catch (error) {
        console.error("Error al eliminar el color:", error);
        Swal.fire(
          "Error",
          "Ha ocurrido un error al eliminar el color.",
          "error"
        );
      }
    }
  };
  const handleOpenColorCreate = (event) => {
    setShowAlert({ color: true });
    event.preventDefault();
  };

  return (
    <section className="colors-section-admin">
      <div className="main-container-colores">
        <div className="colors-colors">
          <div className="contenedor-nombre-color">
            <h2 className="colores-title-colores">Colores disponibles</h2>

            <button
              type="button"
              onClick={() => {
                handleOpenColorCreate();
              }}
              className="color-create-button-color "
            >
              Crear color
            </button>
          </div>

          {Array.isArray(colors) &&
            colors.map((color) => (
              <div key={color.id} className="color-item">
                <div className="color-content-color">
                  <div
                    className="color-circle-color"
                    style={{ backgroundColor: color.codHex }}
                  ></div>
                  <p className="color-name-color">{color.name}</p>
                </div>
                <div className="icons">
                  <button
                    className="edit-color"
                    onClick={() => {
                      Swal.fire({
                        title: "Edit Color",
                        html: `<input type="text" id="edit-color-name" class="swal2-input" placeholder="Color Name" value="${color.name}">
            `,
                        showCancelButton: true,
                        confirmButtonText: "Save",
                        preConfirm: () => {
                          const newName =
                            document.getElementById("edit-color-name").value;
                          handleEditColors(color.id, newName, color.codHex);
                        },
                      });
                    }}
                  >
                    <FaPencilAlt />
                  </button>
                  <button
                    className="delete-color"
                    onClick={() => handleDeleteColors(color.id)}
                  >
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
            ))}
        </div>
        {showAlert.color && (
          <popups className="pop-ups">
            <>
              <div className="transparentBackgroundY"></div>

              <div className="alertContainerY">
                <p className="alertTextY">Creador de color</p>
                <CreateColor />
                <div className="alertButtonsY">
                  <button onClick={handleCloseAlert}>X</button>
                </div>
              </div>
            </>
          </popups>
        )}
      </div>
    </section>
  );
};

export default AllColors;
