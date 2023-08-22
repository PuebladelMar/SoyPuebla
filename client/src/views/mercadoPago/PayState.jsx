import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { addHistory, deleteCartUser, getUserById, sendStatusPurchaseMail } from "../../redux/Actions";
import "./PayState.css";

function PayState() {
  const userId = useSelector((state) => state.userId);
  const userById = useSelector((state) => state.userById);
  const totalPay = useSelector((state) => state.totalPay)
  const location = useLocation();
  const dispatch = useDispatch();
  const queryParams = new URLSearchParams(location.search);
  const data = queryParams.get("data");
  const parsedData = JSON.parse(decodeURIComponent(data));

  useEffect(() => {
    if (parsedData.status === "approved") {
      const asyncFunc = async () => {
        if (userId.length) {
          await dispatch(addHistory(userId, "approved"));
          await dispatch(deleteCartUser(userId, true));
          const emailAddress =  userById.emailAddress;
          let data = {
            emailsUsers: emailAddress,
            emailSubject: "Tu compra ha sido aprobada❤️🤗",
          };
          dispatch(sendStatusPurchaseMail(data)); 
        }
      };
      asyncFunc();
    } else if (parsedData.status === "in_process") {
      const asyncFunc = async () => {
        if (userId.length) {
          await dispatch(addHistory(userId, "pending"));
          await dispatch(deleteCartUser(userId, true));
        }
      };
      asyncFunc();
    } else {
      const asyncFunc = async () => {
        if (userId.length) {
          await dispatch(addHistory(userId, "rejected"));
          dispatch(getUserById(userId));
          const emailAddress =  userById.emailAddress;
          let data = {
            emailsUsers: emailAddress,
            emailSubject: "Tu compra ha sido rechazada💔",
          };
          dispatch(sendStatusPurchaseMail(data)); 
        }
      };
      asyncFunc();
    }
  }, [dispatch, userId]);

  if (parsedData.status === "approved") {
    return (
      <div className="payState">
        <div className="payContainer">
          <h3 className="payState-text">Su compra se realizo con exito</h3>
          <p className="payState-Id">Id de compra: {parsedData.payment_id}</p>
          <p className="payState-total">Pago total: ${totalPay}</p>
          <button className="buttonToHome"><Link to="/home">Inicio</Link></button>
        </div>
      </div>
    );
  }
  if (parsedData.status === "in_process") {
    return (
      <div className="payState">
        <div className="payContainer">
          <h3 className="payState-text">Su compra esta en estado pendiente</h3>
          <button className="buttonToHome"><Link to="/home">Inicio</Link></button>
        </div>
      </div>
    );
  }
  return (
    <div className="payState">
      <div className="payContainer">
        <h3 className="payState-text">Su compra no se pudo realizar</h3>
        <button className="buttonToHome"><Link to="/home">Inicio</Link></button>
      </div>
    </div>
  );
}

export default PayState;
