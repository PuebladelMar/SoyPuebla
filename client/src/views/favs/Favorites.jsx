import React from "react";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Cardx from "../../componentes/card/Card";
import { Box, useMediaQuery } from "@mui/material";
import "./Favorites.css"

function Favorites() {
  const favorites = useSelector(state => state.favorites);
  const isMatch = useMediaQuery("(max-width: 644px)");
  return (
    // <div className="cardsFavorite">
    //     {favorites.map(product => (
    //       <Cardx key={product.id} product={product} />
    //     ))}
      
    // </div>
    <Container
    style={{
      maxWidth: "100%",
      backgroundColor: "#f0f0f0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
 className="cardsFavorite" >
    {!isMatch ? (
      <Box
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "1rem 2rem",
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
            style={{ margin: "1rem" }}
          >
            <Cardx key={product.id} product={product} />
          </Grid>
        ))}
      </Box>
    )}
  </Container>
  );
}


export default Favorites