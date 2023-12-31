import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getProducts,
  deleteProduct,
  getProductsByName,
} from "../../redux/Actions";
import { NavLink } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import SearchBar from "../../componentes/searchBar/SearchBar";
import "./AllProducts.css";

const AllProducts = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchValue === "") {
          await dispatch(getProducts());
        } else {
          await dispatch(getProductsByName(searchValue));
        }
      } catch (error) {
        // Manejar el error aquí si es necesario
      }
    };

    fetchData();
  }, [dispatch, searchValue]);

  const handlerEventSearch = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  const handlerSubmitSearch = (event) => {
    event.preventDefault();
  };

  const handleDeleteProduct = async (id) => {
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
        await dispatch(deleteProduct(id));
        await dispatch(getProducts());
        Swal.fire({
          title: "Eliminado",
          text: "El producto ha sido eliminado.",
          icon: "success",
          confirmButtonColor: "#517f7f",
        });
      } catch (error) {
        console.error("Error al eliminar el producto:", error);
        Swal.fire(
          "Error",
          "Ha ocurrido un error al eliminar el producto.",
          "error"
        );
      }
    }
  };

  return (
    <section className="prducts-section-admin">
      <div className="container-products-admin">
       
        <div className="products-container-admin">
          <div className="contenedor-nombre-talle">

          <h2 className="products-title">Productos disponibles</h2>
          <div className="div-container-searchbar">
          <SearchBar
            className="input-search-admin"
            handlerEventSearch={handlerEventSearch}
            handlerSubmitSearch={handlerSubmitSearch}
            />
        </div>
            </div>
          {Array.isArray(allProducts) &&
            allProducts.map((product) => (
              <div key={product.id} className="product-item-admin">
                <div className="product-content-admin">
                  <p className="product-name-admin">{product.name}</p>
                </div>
                <div className="icons">
                  <NavLink to={`/edit-products/${product.id}`}>
                    <button className="edit-product-admin">
                      <FaPencilAlt />
                    </button>
                  </NavLink>
                  <button
                    className="delete-product-admin"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
