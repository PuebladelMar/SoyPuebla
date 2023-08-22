import Link from "@mui/material/Link";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllHistory } from "../../redux/Actions";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  const allHistory = useSelector(state => state.allHistory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHistory());
  }, [dispatch]);

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  
  const stateSums = {
    approved: 0,
    rejected: 0,
    pending: 0,
  };


  allHistory.forEach(history => {
    const { state, unitPrice, quantity } = history;
    const total = parseFloat(unitPrice) * quantity;
    stateSums[state] += total;
  });

  return (
    <>
      <Title>Ventas totales</Title>
      <div>
        <Typography component="p" variant="h6">
          Aprobadas: ${stateSums.approved.toFixed(2)}
        </Typography>
        <Typography component="p" variant="h6">
          Rechazadas: ${stateSums.rejected.toFixed(2)}
        </Typography>
        <Typography component="p" variant="h6">
          Pendientes: ${stateSums.pending.toFixed(2)}
        </Typography>
      </div>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {formattedDate}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver balance
        </Link>
      </div>
    </>
  );
}




