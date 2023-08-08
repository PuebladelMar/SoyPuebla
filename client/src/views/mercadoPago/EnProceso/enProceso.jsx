import React from "react";
import { Link } from "react-router-dom";
import "./EnProceso.css";

function EnProceso() {
  return (
    <div className="not-found">
      <p className="notFound-text">su compra está en proceso </p>
      <Link to="/home">Click aquí para volver al home</Link>
    </div>
  );
}

export default EnProceso;
