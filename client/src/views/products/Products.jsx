import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getProducts,
  getProductsByName,
  filterProducts,
} from "../../redux/Actions";
import CardContainer from "../../componentes/cardContainer/CardContainer";
import SearchBar from "../../componentes/searchBar/SearchBar";
import SideBar from "../../componentes/sidebar/SideBar";
import "./Products.css";

function Products() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);

  const [searchValue, setSearchValue] = useState();
  const [apllyFilters, setApllyFilters] = useState({});
  const [ShowNoResultsAlert, setShowNoResultsAlert] = useState(false);
  const [filters, setFilters] = useState({
    color: null,
    size: null,
    category: null,
    serie: null,
    sale: null,
    minPrice: null,
    maxPrice: null,
    order: null,
    name: null,
  });

  // Lógica del paginado
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const itemsToShow = allProducts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(allProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCurrentPage(1); // Reiniciar a la primera página cuando cambien los filtros o la búsqueda
  }, [filters, searchValue]);

  useEffect(() => {
    !searchValue
      ? dispatch(getProducts())
      : dispatch(getProductsByName(searchValue));
  }, [dispatch, searchValue]);

  useEffect(() => {
    dispatch(filterProducts(filters));
  }, [filters]);

  useEffect(() => {
    setShowNoResultsAlert(allProducts.length === 0);
  }, [allProducts]);

  const handlerEventSearch = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  const handlerSubmitSearch = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const nullOptions = [
      "null",
      "Todas las categorías",
      "Todos los colores",
      "Todos las tallas",
      "Todos las series",
    ];
    if (name === "sale") {
      const newValue = filters.sale === true ? null : true;
      setFilters({ ...filters, [name]: newValue });
    } else {
      const newValue = nullOptions.includes(value) ? null : value;
      setFilters({ ...filters, [name]: newValue });
    }
  };

  const resetFilters = (event) => {
    event.preventDefault();
    setFilters({
      color: null,
      size: null,
      category: null,
      serie: null,
      sale: null,
      minPrice: null,
      maxPrice: null,
      order: null,
      name: null,
    });
  };

  return (
    <div>
      <SearchBar
        handlerEventSearch={handlerEventSearch}
        handlerSubmitSearch={handlerSubmitSearch}
      />
      {ShowNoResultsAlert && <h1>No se encontró el producto</h1>}
      <SideBar handlerEventSideBar={handleChange} resetFilters={resetFilters} />
      <CardContainer products={itemsToShow} />
      <div className="pagination">
        <button
          className={
            currentPage === 1 ? "disabledPaginationButton" : "paginationButton"
          }
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              className={
                pageNumber === currentPage
                  ? "activePaginationButton"
                  : "paginationButton"
              }
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        )}
        <button
          className={
            currentPage === totalPages
              ? "disabledPaginationButton"
              : "paginationButton"
          }
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

export default Products;
