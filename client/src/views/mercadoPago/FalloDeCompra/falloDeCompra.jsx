import React from "react";
import { Link } from "react-router-dom";
import "./falloDeCompra.css";

function FalloDeCompra() {
  return (
    <div className="not-found">
      <p className="notFound-text">compra fallida </p>
      <Link to="/home">Click aquí para volver al home</Link>
    </div>
  );
}

export default FalloDeCompra;
