import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../redux/Actions";
import CardContainer from "../../componentes/cardContainer/CardContainer";

function Products() {

  const dispatch = useDispatch();
  const allProducts = useSelector((state)=> state.allProducts);

  //Logica del paginado

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div >
      <CardContainer products={allProducts}/>
    </div>
  );
}

  export default Products;