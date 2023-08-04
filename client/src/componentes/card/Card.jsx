// import { Link } from "react-router-dom";
// import CardEx from '../../assets/images/imagenesCards/ESTUDIO R3.png'
// import "./Card.css";


// function Card() {
  
//     return (
//       <div className="card-container">
//         <Link to={`/home/`}>
//         <div className="cardImage">
//           <img src={CardEx} alt="Imagen del personaje" height="300px" />
//         </div>

//         <h2>*****</h2>
//         <h3>Nombre</h3>
//         <h3>Precio</h3>
//         </Link>
//         <button className="heart" >🤍</button>
//       </div>
//     );
//   }
  
//   export default Card;



// import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CardEx from '../../assets/images/imagenesCards/ESTUDIO R3.png'


export default function Cardx() {


  return (
    <Card sx={{ maxWidth: 345 }}>
  
      <CardMedia
        component="img"
        height="194"
        image={CardEx}
        alt="Item"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Nombre del producto
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          $$$
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
     
      </CardActions>
     
    </Card>
  );
}
