import React, { useState, useEffect } from "react";
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
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { getAllHistory } from "../../redux/Actions";

function createData(time, approved, pending, rejected) {
  return { time, approved, pending, rejected };
}

export default function Chart() {
  const allHistory = useSelector((state) => state.allHistory);
  const dispatch = useDispatch();

  const theme = useTheme();
  const [alignment, setAlignment] = useState("hoy");
  const [data, setData] = useState([]);
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  useEffect(() => {
    dispatch(getAllHistory());

    if (alignment === "semana") {
      const interval = 7;
      const daysInWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
      const newData = [];
      const currentDayIndex = currentDate.getDay();
      for (let day = currentDayIndex; day >= currentDayIndex - 6; day--) {
        const dayIndex = (day < 0 ? day + 7 : day) % 7; 

        const currentDateOfWeek = new Date(currentYear, currentMonth, currentDay - dayIndex);
        const dayOfWeek = daysInWeek[currentDateOfWeek.getDay()];
        const formattedDate = `${currentDateOfWeek.getDate()}/${currentDateOfWeek.getMonth() + 1}`;

        const salesInInterval = {
          approved: 0,
          pending: 0,
          rejected: 0,
        };

        allHistory.forEach((history) => {
          const createdAtDate = new Date(history.createdAt);
          const createdAtDay = createdAtDate.getDate();
          const createdAtMonth = createdAtDate.getMonth();
          const createdAtYear = createdAtDate.getFullYear();

          if (
            createdAtYear === currentYear &&
            createdAtMonth === currentMonth &&
            createdAtDay === currentDateOfWeek.getDate()
          ) {
            if (history.state === "approved") {
              salesInInterval.approved += history.unitPrice * history.quantity;
            } else if (history.state === "pending") {
              salesInInterval.pending += history.unitPrice * history.quantity;
            } else if (history.state === "rejected") {
              salesInInterval.rejected += history.unitPrice * history.quantity;
            }
          }
        });

        newData.push(
          createData(
            `${dayOfWeek} (${formattedDate})`,
            salesInInterval.approved,
            salesInInterval.pending,
            salesInInterval.rejected
          )
        );
      }

      setData(newData);
    } 
    else if (alignment === "mes") {
      const interval = 5;
      const newData = [];

      for (let day = 1; day <= 31; day += interval) {
        const startDay = day;
        const endDay = Math.min(day + interval - 1, 31);
        const timeLabel = `${startDay}-${endDay}`;

        const salesInInterval = {
          approved: 0,
          pending: 0,
          rejected: 0,
        };

        allHistory.forEach((history) => {
          const createdAtDate = new Date(history.createdAt);
          const createdAtDay = createdAtDate.getDate();
          const createdAtMonth = createdAtDate.getMonth();
          const createdAtYear = createdAtDate.getFullYear();

          if (
            createdAtYear === currentYear &&
            createdAtMonth === currentMonth &&
            createdAtDay >= startDay &&
            createdAtDay <= endDay
          ) {
            if (history.state === "approved") {
              salesInInterval.approved += history.unitPrice * history.quantity;
            } else if (history.state === "pending") {
              salesInInterval.pending += history.unitPrice * history.quantity;
            } else if (history.state === "rejected") {
              salesInInterval.rejected += history.unitPrice * history.quantity;
            }
          }
        });

        newData.push(
          createData(
            timeLabel,
            salesInInterval.approved,
            salesInInterval.pending,
            salesInInterval.rejected
          )
        );
      }

      setData(newData);
    } else if (alignment === "año") {
      const interval = 2; 
      const months = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
      ];
      const newData = [];

      for (let month = 0; month < 12; month += interval) {
        const startMonth = months[month];
        const endMonth = months[Math.min(month + interval - 1, 11)];
        const timeLabel = `${startMonth}-${endMonth}`;

        const salesInInterval = {
          approved: 0,
          pending: 0,
          rejected: 0,
        };

        allHistory.forEach((history) => {
          const createdAtDate = new Date(history.createdAt);
          const createdAtMonth = createdAtDate.getMonth();
          const createdAtYear = createdAtDate.getFullYear();

          if (
            createdAtYear === currentYear &&
            createdAtMonth >= month &&
            createdAtMonth <= month + interval - 1
          ) {
            if (history.state === "approved") {
              salesInInterval.approved += history.unitPrice * history.quantity;
            } else if (history.state === "pending") {
              salesInInterval.pending += history.unitPrice * history.quantity;
            } else if (history.state === "rejected") {
              salesInInterval.rejected += history.unitPrice * history.quantity;
            }
          }
        });

        newData.push(
          createData(
            timeLabel,
            salesInInterval.approved,
            salesInInterval.pending,
            salesInInterval.rejected
          )
        );
      }

      setData(newData);
    } 
    else {
      const interval = 3;
      const newData = [];

      for (let hour = 0; hour <= 24; hour += interval) {
        const startTime = `${hour.toString().padStart(2, "0")}:00`;

        const salesInInterval = {
          approved: 0,
          pending: 0,
          rejected: 0,
        };

        allHistory.forEach((history) => {
          const createdAtDate = new Date(history.createdAt);
          const createdAtDay = createdAtDate.getDate();
          const createdAtHour = createdAtDate.getHours();

          if (
            currentDay === createdAtDay &&
            createdAtHour >= hour &&
            createdAtHour < hour + interval
          ) {
            if (history.state === "approved") {
              salesInInterval.approved += history.unitPrice * history.quantity;
            } else if (history.state === "pending") {
              salesInInterval.pending += history.unitPrice * history.quantity;
            } else if (history.state === "rejected") {
              salesInInterval.rejected += history.unitPrice * history.quantity;
            }
          }
        });

        newData.push(
          createData(
            startTime,
            salesInInterval.approved,
            salesInInterval.pending,
            salesInInterval.rejected
          )
        );
      }

      setData(newData);
    }
  }, [alignment, dispatch, currentYear, currentMonth, currentDay]);

  const handleAlignmentChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <>
      <Title>Hoy</Title>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleAlignmentChange}
        aria-label="Intervalo"
      >
        <ToggleButton value="hoy">Hoy</ToggleButton>
        <ToggleButton value="semana">Semana</ToggleButton>
        <ToggleButton value="mes">Mes</ToggleButton>
        <ToggleButton value="año">Año</ToggleButton>
      </ToggleButtonGroup>
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