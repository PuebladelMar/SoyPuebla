import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Cardx from "../../componentes/card/Card";
import { Box, useMediaQuery } from "@mui/material";
import { getAllFav } from "../../redux/Actions";
import "./Favorites.css";

function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  const isMatch = useMediaQuery("(max-width: 644px)");
  const userId = useSelector((state) => state.userId);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchFavorites = async () => {
      dispatch(getAllFav(userId));
    };

    fetchFavorites();
  }, [dispatch, userId]);

  return (
    <Container
      style={{
        maxWidth: "100%",
        backgroundColor: "#f0f0f0",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "0",
      }}
      className="cardsFavorite"
    >
      {!isMatch ? (
        <Box
          style={{
            display: "flex",
            flexWrap: "wrap",
            padding: "1rem 0",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            margin: "0 auto",
          }}
        >
          {favorites?.map((product) => (
            <Grid
              item
              xs={12}
              md={5}
              lg={4}
              xl={3}
              key={product.id}
              style={{ margin: "1rem" }}
            >
              <Cardx key={product.id} product={product} />
            </Grid>
          ))}
        </Box>
      ) : (
        <Box
          style={{
            display: "flex",
            flexWrap: "wrap",
            padding: "1rem 0",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            margin: "0 auto",
          }}
        >
          {favorites?.map((product) => (
            <Grid
              item
              xs={12}
              md={5}
              lg={4}
              xl={3}
              key={product.id}
              style={{
                margin: "1rem",
                minWidth: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Cardx key={product.id} product={product} />
            </Grid>
          ))}
        </Box>
      )}
    </Container>
  );
}

export default Favorites;
