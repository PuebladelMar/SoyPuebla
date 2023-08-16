// import { NavLink } from 'react-router-dom';
import './ReviewCard.css';
import { Typography, Rating, Card, CardContent } from '@mui/material';
import { useState } from 'react';

export default function ReviewCard({ score, description, fullName }) {
  console.log(fullName);

  const [value, setValue] = useState(score);
  return (
    // <Link to={`/reviews/${id}`}>
    <Card
      className='review-card'
      elevation={3}
    >
      <CardContent>
        <Typography
          variant='h6'
          gutterBottom
        >
          {fullName}
        </Typography>
        <Typography
          variant='subtitle1'
          color='textSecondary'
        >
          {description}
        </Typography>
        <Rating
          name='read-only'
          value={value}
          readOnly
          size='small'
        />
      </CardContent>
    </Card>
    // <div className='container'>
    //   <div>
    //     <h1>{fullName}</h1>
    //     <br></br>
    //     {/* <h2>Valoracion</h2> */}
    //     <span>{score}</span>
    //     {/* <h2>Descripcion</h2> */}
    //     <span>{description}</span>
    //     <Typography
    //       component='legend'
    //       value={value}
    //     ></Typography>
    //     <Rating
    //       name='simple-read-only'
    //       value={value}
    //       readOnly //
    //     />
    //   </div>
    // </div>
    // </Link>
  );
}
