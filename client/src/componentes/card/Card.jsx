import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Cardx({ product }) {
  const { id, name, price, mainImage, sale } = product;

  return (
    <Link to={`/products/${id}`}>
      <Card
        style={{
          width: "20rem",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <Box
          style={{
            width: "100%",
            height: "22rem",
            overflow: "hidden",
          }}
        >
          <CardMedia
            component="img"
            style={{
              width: "100%",
              height: "22rem",
              objectFit: "fill",
              transition: "transform 0.2s",
            }}
            image={mainImage}
            alt="Item"
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          />
        </Box>
        <Box>
          <CardContent
            style={{
              width: "100%",
              height: "5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              style={{
                fontSize: "1rem",
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{
                fontSize: "0.9rem",
              }}
            >
              {price}
            </Typography>
          </CardContent>
        </Box>
        <Box>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Box>
      </Card>
    </Link>
  );
}
