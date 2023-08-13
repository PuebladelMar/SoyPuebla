import React from "react";
import { useSelector } from "react-redux";
import Cardx from "../../componentes/card/Card";

function Favorites() {
  const favorites = useSelector(state => state.favorites);

  return (
    <div>
      <h1>Favoritos</h1>
      <div>
        {favorites.map(product => (
          <Cardx key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}


export default Favorites