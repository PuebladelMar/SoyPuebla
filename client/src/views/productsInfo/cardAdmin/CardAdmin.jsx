import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../redux/Actions";
import "./CardAdmin.css";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";

const CardAdmin = () => {
  const allProducts = useSelector((state) => state.allProducts);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchProducts() {
      await dispatch(getProducts());
    }
    fetchProducts();
  }, [dispatch]);

  const handleDeleteProducts = async () => {
    await dispatch(getProducts());
  };

  return (
    <div className="main-container">
      <div className="colors">
        <div className="nav-dashboard">
          <NavLink to="/all-data/all-products">
            <button
              className="nav-dashboard-btn"
              onClick={() => navigate("/all-data/all-products")}
            >
              Productos{" "}
            </button>
          </NavLink>
          <NavLink to="/all-data/all-colecciones">
            <button
              className="nav-dashboard-btn"
              onClick={() => navigate("/all-data/all-colecciones")}
            >
              Colecciones
            </button>
          </NavLink>
          <NavLink to="/all-data/all-sizes">
            <button
              className="nav-dashboard-btn"
              onClick={() => navigate("/all-data/all-sizes")}
            >
              Talles
            </button>
          </NavLink>
          <NavLink to="/all-data/all-categories">
            <button
              className="nav-dashboard-btn"
              onClick={() => navigate("/all-data/all-categories")}
            >
              Categorias
            </button>
          </NavLink>
          <NavLink to="/dashboard">
            <button
              className="nav-dashboard-btn"
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </button>
          </NavLink>
        </div>
        <h2 className="colores-title">Productos disponibles</h2>
        {Array.isArray(allProducts) &&
          allProducts.map((product) => (
            <div key={product.id} className="color-item">
              <div className="color-content">
                <p className="color-name">{product.name}</p>
                <div className="color-circle"></div>
              </div>
              <div className="icons">
                <NavLink to={`/edit-products/${product.id}`}>
                  <button className="edit-color">
                    <FaPencilAlt />
                  </button>
                </NavLink>
                <button
                  className="delete-color"
                  onClick={() => handleDeleteProducts(product.id)}
                >
                  <RiDeleteBin6Line />
                </button>
              </div>
            </div>
          ))}
      </div>
      <NavLink to="/create">
        <button type="button" className="mainImage-upload-buttonY ">
          Crear producto
        </button>
      </NavLink>
    </div>
  );
};

export default CardAdmin;
