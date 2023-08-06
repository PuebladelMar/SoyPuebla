import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts, getProductsByName } from "../../redux/Actions";
import CardContainer from "../../componentes/cardContainer/CardContainer";
import SearchBar from "../../componentes/searchBar/SearchBar";
import SideBar from "../../componentes/sidebar/SideBar";

function Products() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);

  const [searchValue, setSearchValue] = useState("");
  const [ShowNoResultsAlert, setShowNoResultsAlert] = useState(false);

  //Logica del paginado

  useEffect(() => {
    if (searchValue === "") {
      dispatch(getProducts());
    } else {
      dispatch(getProductsByName(searchValue));
    }
  }, [dispatch, searchValue]);

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
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <SearchBar
        handlerEventSearch={handlerEventSearch}
        handlerSubmitSearch={handlerSubmitSearch}
      />
      {ShowNoResultsAlert && <h1>No se encontró el producto</h1>}
      <SideBar handlerEventSideBar={handlerEventSideBar} />
      <CardContainer products={allProducts} />
    </div>
  );
}

export default Products;
