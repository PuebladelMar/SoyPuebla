import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getProducts,
  getProductsByName,
  filterProducts,
} from "../../redux/Actions";
import CardContainer from "../../componentes/cardContainer/CardContainer";
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

  //Logica del paginado
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
    setCurrentPage(1);
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
      "Todas las categorias",
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
    <section className="products-section">
      <container className="products-container">
        <SideBar
          handlerEventSideBar={handleChange}
          resetFilters={resetFilters}
        />
        <container className="cards-container">
          <CardContainer products={itemsToShow} />
          <container className="paginated-container">
            <button
              className={
                currentPage === 1
                  ? "disabledPaginationButton"
                  : "paginationButton"
              }
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &#10094;
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
              &#10095;
            </button>
          </container>
        </container>
      </container>
    </section>
  );
}

export default Products;
