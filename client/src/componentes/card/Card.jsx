import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Link } from 'react-router-dom';



export default function Cardx({ product }) {


  const {
    id,
    name,
    price,
    mainImage,
    sale,
  } = product;




  return (

    <Link to={`/products/${id}`}>
         
    <Card sx={{ maxWidth: 345 }}>
  
      <CardMedia
        component="img"
        style={{
          width: 300,
          height: 600,
          objectFit: 'cover',
        }}
        image={mainImage}
        alt="Item"
        />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {name}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
        {price}
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
        </Link>
  );
}
