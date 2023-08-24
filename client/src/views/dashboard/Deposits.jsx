import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllHistory } from "../../redux/Actions";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  const allHistory = useSelector((state) => state.allHistory);
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

  allHistory.forEach((history) => {
    const { state, unitPrice, quantity } = history;
    const total = parseFloat(unitPrice) * quantity;
    stateSums[state] += total;
  });

  const [selectedInterval, setSelectedInterval] = useState("diario");
  const intervalSums = {
    approved: 0,
    rejected: 0,
    pending: 0,
  };

  if (selectedInterval === "diario") {
    allHistory.forEach((history) => {
      const { state, unitPrice, quantity, createdAt } = history;
      const historyDate = new Date(createdAt);
      if (
        historyDate.getDate() === currentDate.getDate() &&
        historyDate.getMonth() === currentDate.getMonth() &&
        historyDate.getFullYear() === currentDate.getFullYear()
      ) {
        const total = parseFloat(unitPrice) * quantity;
        intervalSums[state] += total;
      }
    });
  } else if (selectedInterval === "semanal") {
    const currentDayIndex = currentDate.getDay();
    for (let day = currentDayIndex; day >= currentDayIndex - 6; day--) {
      const dayIndex = (day < 0 ? day + 7 : day) % 7;
      const currentDateOfWeek = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() - dayIndex
      );
      allHistory.forEach((history) => {
        const { state, unitPrice, quantity, createdAt } = history;
        const historyDate = new Date(createdAt);
        if (
          historyDate.getDate() === currentDateOfWeek.getDate() &&
          historyDate.getMonth() === currentDateOfWeek.getMonth() &&
          historyDate.getFullYear() === currentDateOfWeek.getFullYear()
        ) {
          const total = parseFloat(unitPrice) * quantity;
          intervalSums[state] += total;
        }
      });
    }
  } else if (selectedInterval === "mensual") {
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
      allHistory.forEach((history) => {
        const { state, unitPrice, quantity, createdAt } = history;
        const historyDate = new Date(createdAt);
        if (
          historyDate.getDate() === day &&
          historyDate.getMonth() === currentDate.getMonth() &&
          historyDate.getFullYear() === currentDate.getFullYear()
        ) {
          const total = parseFloat(unitPrice) * quantity;
          intervalSums[state] += total;
        }
      });
    }
  } else if (selectedInterval === "anual") {
    for (let month = 0; month < 12; month++) {
      allHistory.forEach((history) => {
        const { state, unitPrice, quantity, createdAt } = history;
        const historyDate = new Date(createdAt);
        if (
          historyDate.getMonth() === month &&
          historyDate.getFullYear() === currentDate.getFullYear()
        ) {
          const total = parseFloat(unitPrice) * quantity;
          intervalSums[state] += total;
        }
      });
    }
  } else if (selectedInterval === "total") {
    allHistory.forEach((history) => {
      const { state, unitPrice, quantity } = history;
      const total = parseFloat(unitPrice) * quantity;
      intervalSums[state] += total;
    });
  }

  return (
    <>
      <Title>Ventas</Title>
   
      <select
          value={selectedInterval}
          onChange={(e) => setSelectedInterval(e.target.value)}
        >
          <option value="diario">Diario</option>
          <option value="semanal">Semanal</option>
          <option value="mensual">Mensual</option>
          <option value="anual">Anual</option>
          <option value="total">Totales</option>
        </select>
      <div>
        <Typography component="p" variant="h6">
          Aprobadas: ${intervalSums.approved.toFixed(2)}
        </Typography>
        <Typography component="p" variant="h6">
          Rechazadas: ${intervalSums.rejected.toFixed(2)}
        </Typography>
        <Typography component="p" variant="h6">
          Pendientes: ${intervalSums.pending.toFixed(2)}
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
      <div> 
      
    
      </div>
    </>
  );
}
