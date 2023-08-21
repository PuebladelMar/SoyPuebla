import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  Legend,
} from "recharts";
import Title from "./Title";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllHistory } from "../../redux/Actions";

function createData(time, approved, pending, rejected) {
  return { time, approved, pending, rejected };
}

export default function Chart() {
  const allHistory = useSelector((state) => state.allHistory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHistory());
  }, [dispatch]);

  const theme = useTheme();

  // Agrupar ventas por intervalos de 3 horas
  const interval = 3; // horas
  const data = [];

  for (let hour = 0; hour < 24; hour += interval) {
    const startTime = `${hour.toString().padStart(2, "0")}:00`;
    const endTime = `${(hour + interval).toString().padStart(2, "0")}:00`;

  //   const salesInInterval = allHistory.reduce((totalSales, history) => {
  //     const createdAtHour = new Date(history.createdAt).getHours();

  //     if (createdAtHour >= hour && createdAtHour < hour + interval) {
  //       totalSales += history.unitPrice * history.quantity;
  //     }

  //     return totalSales;
  //   }, 0);

  //   data.push(createData(`${startTime} - ${endTime}`, salesInInterval));
  // }
  const salesInInterval = {
    approved: 0,
    pending: 0,
    rejected: 0,
  };

  allHistory.forEach((history) => {
    const createdAtHour = new Date(history.createdAt).getHours();

    if (createdAtHour >= hour && createdAtHour < hour + interval) {
      if (history.state === "approved") {
        salesInInterval.approved += history.unitPrice * history.quantity;
      } else if (history.state === "pending") {
        salesInInterval.pending += history.unitPrice * history.quantity;
      } else if (history.state === "rejected") {
        salesInInterval.rejected += history.unitPrice * history.quantity;
      }
    }
  });

  data.push(createData(startTime, salesInInterval.approved, salesInInterval.pending, salesInInterval.rejected));
}

  return (
    <>
      <Title>Hoy</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={{ ...theme.typography.body2 }}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={{ ...theme.typography.body2 }}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: "middle",
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Ventas ($)
            </Label>
          </YAxis>
          <Legend verticalAlign="top" height={36} />
          <Line
            type="monotone"
            dataKey="approved"
            stroke={theme.palette.success.main}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="pending"
            stroke={theme.palette.warning.main}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="rejected"
            stroke={theme.palette.error.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
