import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
  getAllFav,
} from "../../redux/Actions";
import { Box, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

export default function Cardx({ product }) {
  const { id, name, price, colorImages, sale } = product;
  const isMatch = useMediaQuery("(max-width: 644px)");
  const isMatchCard = useMediaQuery("(max-width: 470px)");
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const userId = useSelector((state) => state.userId);
  const color = useSelector((state)=> state.colorList);
  const isFavorite = favorites.some((item) => item.id === product.id);

  const handleFavoriteClick = async () => {
    try {
      if (isFavorite) {
        await dispatch(removeFromFavorites(userId, product.id));
        await dispatch(getAllFav(userId));
      } else {
        await dispatch(addToFavorites(userId, product.id));
        await dispatch(getAllFav(userId));
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const matchingColors = color.filter((c) =>
  colorImages?.some((ci) => ci.ColorId === c.id));

  const [selectedColor, setSelectedColor] = useState(matchingColors[0]?.id);

  const selectedColorImages = colorImages?.find((colorItem) => colorItem.ColorId === selectedColor)

  return (
    <Card
      style={{
        width: isMatchCard ? "22rem" : isMatch ? "28rem" : "19rem",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      {!isMatch ? (

        <Box>
          <Link to={`/products/${id}`}>
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
                image={selectedColorImages?.images[0]}
                alt="Item"
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
            </Box>
          </Link>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
              height: "6.3rem",
            }}
          >
            <Box>
              <CardContent
                style={{
                  width: "100%",
                  height: "5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.9rem",
                  marginBottom: "1rem",
                  padding: "0.5rem 1rem",
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
            <CardActions
              style={{
                height: "3rem",
                display: "flex",
              }}
            >
              {matchingColors.map((col, i) => (
                <div key={i} style={{ marginTop: "10px" }}>
                  <button
                  className="detailColorButtonCreate"
                  style={{
                  backgroundColor: col.codHex,
                  width: "30px",
                  height: "30px",
                  }}
                  onClick={() => {setSelectedColor(col.id);}}
                  ></button>
                </div>
              ))}
              <IconButton
                aria-label="add to favorites"
                onClick={handleFavoriteClick}
              >
                <FavoriteIcon color={isFavorite ? "secondary" : "inherit"} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Box>
        </Box>
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
          <Link to={`/products/${id}`}>
            <Box
              style={{
                width: "14.5rem",
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
          </Link>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: isMatchCard ? "3rem" : "7.5rem",
              padding: "0 0.5rem",
              width: "100%",
            }}
          >
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
                  padding: isMatchCard ? "0.5rem" : "0.7rem 0.4rem",
                  flexDirection: "column",
                  gap: "1.5rem",
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
                <IconButton
                  aria-label="add to favorites"
                  onClick={handleFavoriteClick}
                >
                  <FavoriteIcon color={isFavorite ? "secondary" : "inherit"} />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Box>
          </Box>
        </Card>
      )}
    </Card>
  );
}
