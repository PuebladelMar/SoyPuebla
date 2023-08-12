import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addHistory, deleteCartUser } from "../../redux/Actions";
import "./PayState.css";

function PayState() {
  const userId = useSelector(state => state.userId);
  const location = useLocation();
  const dispatch = useDispatch();
  const queryParams = new URLSearchParams(location.search);
  const data = queryParams.get('data');
  const parsedData = JSON.parse(decodeURIComponent(data));

  useEffect(() => {
    if (parsedData.collection_status === "approved") {
      const asyncFunc = async () => {
        if(userId.length){
          await dispatch(addHistory(userId));
          await dispatch(deleteCartUser(userId));
        };
      };
      asyncFunc();
    }
  }, [dispatch, userId]);
  
  if(parsedData.collection_status === "approved"){
    return (
      <div className="payState">
        <p className="payState-text">su compra se realizo con exito</p>
        <Link to="/home">Click aquí para volver al home</Link>
      </div>
    );
  };
  if(parsedData.collection_status === "null"){
    return (
      <div className="payState">
        <p className="payState-text">su compra no se pudo realizar</p>
        <Link to="/home">Click aquí para volver al home</Link>
      </div>
    );
  };
};

export default PayState;