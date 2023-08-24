import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
  getAllFav,
} from "../../redux/Actions";
import { Box, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Cardx({ product }) {
  const dispatch = useDispatch();
  const { id, name, price, colorImages, sale } = product;
  const isMatch = useMediaQuery("(max-width: 644px)");
  const isMatchCard = useMediaQuery("(max-width: 470px)");
  const isMatchColor = useMediaQuery("(max-width: 415px)");
  const isMatchColor2 = useMediaQuery("(max-width: 375px)");
  const favorites = useSelector((state) => state.favorites);
  const userId = useSelector((state) => state.userId);
  const color = useSelector((state) => state.colorList);
  const isFavorite = favorites.some((item) => item.id === product.id);
  const [selectedColor, setSelectedColor] = useState(null);

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
    colorImages?.some((ci) => ci.ColorId === c.id)
  );

  useEffect(() => {
    if (matchingColors.length > 0 && selectedColor === null) {
      setSelectedColor(matchingColors[0]?.id);
    }
  }, [matchingColors, selectedColor]);

  const selectedColorImages = colorImages?.find(
    (colorItem) => colorItem.ColorId === selectedColor
  );

  useEffect(() => {
    async function fetchData() {
      try {
        await dispatch(getAllFav(userId));
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchData();
  }, [dispatch, userId]);

  function formatNumber(number) {
    const wholeNumber = Math.floor(number);
    return wholeNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  const handleHeartClick = () => {
    Swal.fire({
      icon: "warning",
      title: "Por favor, inicia sesión",
      text: "para agregar favoritos",
      confirmButtonColor: "#517f7F",
    });
  };

  return (
    <Card
      style={{
        width: isMatchCard ? "100%" : isMatch ? "28rem" : "19rem",
        borderRadius: isMatchCard ? "0" : "10px",
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
                position: "relative",
              }}
            >
              <CardMedia
                component="img"
                style={{
                  width: "100%",
                  height: "22rem",
                  objectFit: "fill",
                  transition: "0.5s ease",
                  position: "relative",
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
              {sale == 0 ? (
                <Typography />
              ) : (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{
                    fontSize: ".8rem",
                    fontWeight: "600",
                    position: "absolute",
                    top: "17px",
                    left: "0px",
                    color: "#ffffff",
                    backgroundColor: "#ff0000",
                    padding: "3px 15px 3px 13px",
                    borderTopRightRadius: "15px",
                    borderBottomRightRadius: "15px",
                  }}
                >
                  {sale} off%
                </Typography>
              )}
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
            <Box
              style={{
                width: "12rem",
              }}
            >
              <CardContent
                style={{
                  width: "18rem",
                  height: "5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.9rem",
                  marginBottom: "1rem",
                  padding: "0.5rem 0 0.5rem 1rem",
                }}
              >
                <Link to={`/products/${id}`}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{
                      fontSize: "1rem",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    {name}
                  </Typography>
                </Link>
                <Link to={`/products/${id}`}>
                  {sale == 0 ? (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{
                        fontSize: "0.9rem",
                        cursor: "pointer",
                      }}
                    >
                      $ {formatNumber(price)}
                    </Typography>
                  ) : (
                    <Box
                      style={{
                        marginTop: "-1.3rem",
                      }}
                    >
                      <Box
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "1rem",
                        }}
                      >
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          style={{
                            fontSize: "0.9rem",
                            cursor: "pointer",
                            color: "#ff0000",
                          }}
                        >
                          $ {formatNumber(Math.floor(price * (1 - sale / 100)))}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          style={{
                            fontSize: "0.9rem",
                            cursor: "pointer",
                            color: "#ff0000",
                            border: "1px solid #ff0000",
                            padding: "0px 8px 0px 6px ",
                            borderRadius: "3px",
                            fontStyle: "italic",
                          }}
                        >
                          SALE
                        </Typography>
                      </Box>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        style={{
                          fontSize: "0.9rem",
                          cursor: "pointer",
                          color: "#9d9d9dc3",
                          textDecoration: "line-through",
                        }}
                      >
                        $ {formatNumber(price)}
                      </Typography>
                    </Box>
                  )}
                </Link>
              </CardContent>
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                width: "1rem",
                position: "relative",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  paddingRight: "1.1rem",
                  paddingBottom: "0.9rem",
                  position: "absolute",
                  top: "0.8rem",
                  right: "-0.1rem",
                  zIndex: "1",
                  gap: "0.5rem",
                }}
              >
                {matchingColors.map((col, i) => (
                  <div
                    key={i}
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                    }}
                  >
                    <button
                      className="detailColorButton"
                      style={{
                        backgroundColor: col.codHex,
                        width: selectedColor === col.id ? "1.55rem" : "1.5rem",
                        height: selectedColor === col.id ? "1.55rem" : "1.5rem",
                        border:
                          selectedColor === col.id
                            ? "2px solid #797979"
                            : "1px solid #8b8b8b",
                      }}
                      onClick={() => {
                        setSelectedColor(col.id);
                      }}
                    ></button>
                  </div>
                ))}
              </Box>
              {!userId.length ? (
                <CardActions
                  style={{
                    height: "3rem",
                    display: "flex",
                    justifyContent: "flex-end",
                    position: "relative",
                  }}
                >
                  <IconButton
                    aria-label="add to favorites"
                    onClick={handleHeartClick}
                    style={{
                      position: "absolute",
                      bottom: "25.3rem",
                    }}
                  >
                    <FavoriteIcon color="inherit" />
                  </IconButton>
                </CardActions>
              ) : (
                <CardActions
                  style={{
                    height: "3rem",
                    display: "flex",
                    justifyContent: "flex-end",
                    position: "relative",
                  }}
                >
                  <IconButton
                    aria-label="add to favorites"
                    onClick={handleFavoriteClick}
                    style={{
                      position: "absolute",
                      bottom: "25.3rem",
                    }}
                  >
                    <FavoriteIcon
                      color={isFavorite ? "secondary" : "inherit"}
                    />
                  </IconButton>
                </CardActions>
              )}
            </Box>
          </Box>
        </Box>
      ) : (
        <Card
          style={{
            borderRadius: isMatchCard ? "0" : "10px",
            overflow: "hidden",
            display: "flex",
            width: isMatchCard ? "100%" : "28rem",
            height: isMatchCard ? "11.5rem" : "auto",
            zIndex: "1",
          }}
        >
          <Link to={`/products/${id}`}>
            <Box
              style={{
                width: isMatchCard ? "100%" : "14.5rem",
                height: isMatchCard ? "11.5rem" : "16rem",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <CardMedia
                component="img"
                style={{
                  width: "15rem",
                  height: isMatchCard ? "11.5rem" : "16rem",
                  objectFit: "fill",
                  transition: "0.5s ease",
                  zIndex: "1",
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
              {sale == 0 ? (
                <Typography />
              ) : (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{
                    fontSize: ".8rem",
                    fontWeight: "600",
                    position: "absolute",
                    bottom: "30px",
                    left: "0px",
                    color: "#ffffff",
                    backgroundColor: "#ff0000",
                    padding: "3px 15px 3px 13px",
                    borderTopRightRadius: "15px",
                    borderBottomRightRadius: "15px",
                  }}
                >
                  {sale} off%
                </Typography>
              )}
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
                padding: isMatchCard ? "0" : "0 0.5rem",
                width: "100%",
              }}
            >
              <CardContent
                style={{
                  width: "100%",
                  height: "5rem",
                  display: "flex",
                  marginTop: isMatchCard ? "-0.6rem" : "0",
                  padding: isMatchCard ? "0.5rem" : "0",
                  flexDirection: "column",
                  gap: isMatchCard ? "1rem" : "1.5rem",
                }}
              >
                <Link
                  to={`/products/${id}`}
                  style={{
                    width: "80%",
                  }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{
                      fontSize: "1rem",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    {name}
                  </Typography>
                </Link>
                <Link to={`/products/${id}`}>
                  {sale == 0 ? (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{
                        fontSize: "0.9rem",
                        cursor: "pointer",
                      }}
                    >
                      $ {formatNumber(price)}
                    </Typography>
                  ) : (
                    <Box
                      style={{
                        marginTop: "-1.3rem",
                      }}
                    >
                      <Box
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "1rem",
                        }}
                      >
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          style={{
                            fontSize: "0.9rem",
                            cursor: "pointer",
                            color: "#ff0000",
                          }}
                        >
                          $ {formatNumber(Math.floor(price * (1 - sale / 100)))}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          style={{
                            fontSize: "0.9rem",
                            cursor: "pointer",
                            color: "#ff0000",
                            border: "1px solid #ff0000",
                            padding: "0px 8px 0px 6px ",
                            borderRadius: "3px",
                            fontStyle: "italic",
                          }}
                        >
                          SALE
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        style={{
                          fontSize: "0.9rem",
                          cursor: "pointer",
                          color: "#9d9d9dc3",
                          textDecoration: "line-through",
                        }}
                      >
                        $ {formatNumber(price)}
                      </Typography>
                    </Box>
                  )}
                </Link>
              </CardContent>
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                width: "1rem",
                position: "relative",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  paddingRight: "1.1rem",
                  paddingBottom: "0.9rem",
                  gap: "0.5rem",
                  position: "absolute",
                  right: isMatchColor2
                    ? "-6.5rem"
                    : isMatchColor
                    ? "-7.5rem"
                    : isMatchCard
                    ? "-8.5rem"
                    : "-6.5rem",
                  top: isMatchCard ? "0.35rem" : "-0.2rem",
                }}
              >
                {matchingColors.map((col, i) => (
                  <div
                    key={i}
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                    }}
                  >
                    <button
                      className="detailColorButton"
                      style={{
                        backgroundColor: col.codHex,
                        width: selectedColor === col.id ? "1.55rem" : "1.5rem",
                        height: selectedColor === col.id ? "1.55rem" : "1.5rem",
                        border:
                          selectedColor === col.id
                            ? "2px solid #797979"
                            : "1px solid #8b8b8b",
                      }}
                      onClick={() => {
                        setSelectedColor(col.id);
                      }}
                    ></button>
                  </div>
                ))}
              </Box>

              {!userId.length ? (
                <CardActions
                  style={{
                    height: "0rem",
                    display: "flex",
                    justifyContent: "flex-end",
                    position: "relative",
                  }}
                >
                  <IconButton
                    aria-label="add to favorites"
                    onClick={handleHeartClick}
                    style={{
                      position: "absolute",
                      right: isMatchColor2
                        ? "-5.8rem"
                        : isMatchColor
                        ? "-6.8rem"
                        : isMatchCard
                        ? "-7.8rem"
                        : "18.8rem",
                      bottom: isMatchCard ? "7rem" : "11.9rem",
                    }}
                  >
                    <FavoriteIcon color="inherit" />
                  </IconButton>
                </CardActions>
              ) : (
                <CardActions
                  style={{
                    height: "0rem",
                    display: "flex",
                    justifyContent: "flex-end",
                    position: "relative",
                  }}
                >
                  <IconButton
                    aria-label="add to favorites"
                    onClick={handleFavoriteClick}
                    style={{
                      position: "absolute",
                      right: isMatchColor2
                        ? "-5.8rem"
                        : isMatchColor
                        ? "-6.8rem"
                        : isMatchCard
                        ? "-7.8rem"
                        : "18.8rem",
                      bottom: isMatchCard ? "7rem" : "11.9rem",
                    }}
                  >
                    <FavoriteIcon
                      color={isFavorite ? "secondary" : "inherit"}
                    />
                  </IconButton>
                </CardActions>
              )}
            </Box>
          </Box>
        </Card>
      )}
    </Card>
  );
}
