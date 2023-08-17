// import { NavLink } from 'react-router-dom';
import "./ReviewCard.css";
import { Typography, Rating, Card, CardContent } from "@mui/material";

export default function ReviewCard({ score, description, fullName }) {
  const numericScore = parseFloat(score);
  return (
    <Card className="card-container">
      <CardContent
        className="review-card"
        style={{
          padding: "0.8rem 1rem",
        }}
      >
        <Typography className="username" fontSize={"1.3rem"}>
          {fullName}
        </Typography>
        <Typography className="description" fontSize={"0.9rem"}>
          {description}
        </Typography>
        <Rating name="read-only" value={numericScore} readOnly size="small" />
      </CardContent>
    </Card>
  );
}
