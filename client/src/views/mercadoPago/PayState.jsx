import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import "./PayState.css";

function PayState() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const data = queryParams.get('data');
  const parsedData = JSON.parse(decodeURIComponent(data));


  
  if(parsedData.collection_status === "approved"){
    return (
      <div className="payState">
        <p className="payState-text">su compra se realizo con exito</p>
        <Link to="/home">Click aquí para volver al home</Link>
      </div>
    );
  };
};

export default PayState;