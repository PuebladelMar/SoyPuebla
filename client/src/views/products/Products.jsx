import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts, getProductsByName, filterProducts } from "../../redux/Actions";
import CardContainer from "../../componentes/cardContainer/CardContainer";
import SearchBar from "../../componentes/searchBar/SearchBar";
import SideBar from "../../componentes/sidebar/SideBar";

function Products() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);
  const fileredProducts = useSelector((state) => state.fileredProducts);

  const [searchValue, setSearchValue] = useState();
  const [apllyFilters, setApllyFilters] = useState({});
  const [ShowNoResultsAlert, setShowNoResultsAlert] = useState(false);

  //Logica del paginado

  useEffect(() => {
    !searchValue ? dispatch(getProducts()) : dispatch(getProductsByName(searchValue));
    !apllyFilters ? null : dispatch(filterProducts(apllyFilters.filterType, apllyFilters.name)); 

  }, [dispatch, searchValue, apllyFilters]);

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

  const handlerEventSideBar = (event) => {
    event.preventDefault();
    if (event.target.name === "limpiar Filtros") {
      setApllyFilters({});
    } else if (event.target.name === "sale") {
      setApllyFilters({ filterType: event.target.name, name: true });
    } else {
      setApllyFilters({ filterType: event.target.name, name: event.target.value });
    }
  };

  return (
    <div>
      <SearchBar handlerEventSearch={handlerEventSearch} handlerSubmitSearch={handlerSubmitSearch}/>
      {ShowNoResultsAlert && <h1>No se encontró el producto</h1>}
      <SideBar handlerEventSideBar={handlerEventSideBar} />
      <CardContainer products={allProducts} />
    </div>
  );
}

export default Products;
