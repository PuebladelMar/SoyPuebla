import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useLayoutEffect } from "react";
import { filterProducts } from "../../redux/Actions";
import CardContainer from "../../componentes/cardContainer/CardContainer";
import SideBar from "../../componentes/sidebar/SideBar";
import "./Products.css";
import Loader from "../../componentes/loader/Loader";

function Products() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);
  const [isReady, setIsReady] = useState(false);
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const itemsToShow = allProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(allProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(!isReady);
    }, "1200");
  }, [dispatch, setIsReady]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  useEffect(() => {
    dispatch(filterProducts(filters));
    setIsReady(true)
  }, [filters, dispatch]);

  const handleChange = (event) => {
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

  const resetFilters = () => {
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
      {!isReady ? ( 
        <div className="loader">
        <Loader/>
        </div>
      ) : (
        <div className="products-container">
          <SideBar
            handlerEventSideBar={handleChange}
            resetFilters={resetFilters}
          />

          <div className="cards-container">
            <div className="cards-paginated-container">
              <CardContainer products={itemsToShow} />
              <div className="paginated-container">
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
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Products;
