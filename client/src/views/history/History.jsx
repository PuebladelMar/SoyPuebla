import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./History.css";

const History = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.userId);
    const [ userHistory, setUserHistory ] = useState();
    useEffect(() => {
        if(!userId.length){
          navigate("/home");
          alert("debes iniciar seción para ir al historial");
        }else{
          const asyncFunction = async ()=>{
            const { data } = await axios.get(`/history/${userId}`);
            setUserHistory(data);
          };
          asyncFunction();
        };
    },[dispatch]);
    
    return(
        <div className="history-container">
            <h2>Historial:</h2>
            <div className="history-items">
              {userHistory?.map((item, index)=>(
                <div className="history-item" key={index}>
                  <img src={item.product.mainImage}/>
                  <div className="item-details">
                    <p>{item.product.name}</p>
                    <p>{item.color.name}</p>
                    <p>Talle:{item.size.name}</p>
                    <p>${item.unitPrice}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Total: ${item.unitPrice * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
    );
};

export default History;