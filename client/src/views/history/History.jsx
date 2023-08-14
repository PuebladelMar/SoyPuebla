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
          const { data } = axios.get(`http://localhost:3001/history/${userId}`);
          setUserHistory(data);
        };
    });
    
    return(
        <div>
            {console.log(userHistory)}
        </div>
    );
};

export default History;