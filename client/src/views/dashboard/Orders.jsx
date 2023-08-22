import React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { getAllHistory } from "../../redux/Actions";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  const allHistory = useSelector(state => state.allHistory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHistory());
  }, [dispatch]);

  const lastFiveHistory = allHistory.slice(-5); 
  return (
    <>
      <Title>Ordenes Recientes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>Cliente</TableCell>
            <TableCell>Email </TableCell>
            <TableCell>Producto</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Cantidad</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lastFiveHistory.map(history => (
            <TableRow key={history.id}>
              <TableCell>{history.createdAt.slice(0, 10)}</TableCell> 
              <TableCell>{history.attributes.fullName}</TableCell> 
              <TableCell>{history.attributes.emailAddress}</TableCell>
              <TableCell>{history.attributes.product}</TableCell>
              <TableCell>{history.state}</TableCell>
              <TableCell>{history.quantity}</TableCell>
              <TableCell>{history.unitPrice}</TableCell>
              <TableCell align="right">{`$${(
                history.unitPrice * history.quantity
              ).toFixed(2)}`}</TableCell> 
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <NavLink to="/dashboard/history">
     Ver todas las ordenes 
      </NavLink>
    </>
  );
}