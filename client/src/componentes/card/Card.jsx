import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Box, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

export default function Cardx({ product }) {
  const { id, name, price, mainImage, sale } = product;
  const isMatch = useMediaQuery("(max-width: 644px)");
  const isMatchCard = useMediaQuery("(max-width: 470px)");

  return (
    <Link to={`/products/${id}`}>
      {!isMatch ? (
        <Card
          style={{
            width: "19rem",
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
      ) : (
        <Card
          style={{
            borderRadius: "10px",
            overflow: "hidden",
            display: "flex",
            width: isMatchCard ? "22rem" : "28rem",
            height: isMatchCard ? "11.5rem" : "auto",
          }}
        >
          <Box
            style={{
              width: "30rem",
              height: isMatchCard ? "11.5rem" : "16rem",
              overflow: "hidden",
            }}
          >
            <CardMedia
              component="img"
              style={{
                width: "15rem",
                height: isMatchCard ? "11.5rem" : "16rem",
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
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: isMatchCard ? "3rem" : "7rem",
              padding: "0 0.5rem",
              width: "100%",
            }}
          >
            <CardContent
              style={{
                width: "100%",
                height: "5rem",
                display: "flex",
                padding: isMatchCard ? "0.5rem" : "auto",
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
            <Box
              style={{
                width: "100%",
              }}
            >
              <CardActions
                disableSpacing
                style={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                  gap: isMatchCard ? "0.2rem" : "1rem",
                  padding: "0 0.5rem",
                  width: "100%",
                }}
              >
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Box>
          </Box>
        </Card>
      )}
    </Link>
  );
}
