import Container from "@mui/material/Container";
import Card from "../card/Card";
import Grid from "@mui/material/Grid";
import { Box, useMediaQuery } from "@mui/material";

function CardContainer(props) {
  const isMatch = useMediaQuery("(max-width: 644px)");
  const isMatchCard = useMediaQuery("(max-width: 470px)");

  return (
    <Container
      style={{
        minWidth: "100%",
        backgroundColor: "#f0f0f0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        padding: "0",
      }}
    >
      {!isMatch ? (
        <Box
          style={{
            display: "flex",
            flexWrap: "wrap",
            padding: isMatchCard ? "0" : "1rem 2rem",
            justifyContent: "center",
            alignItems: "start",
            width: "100%",
            height: "100%"
          }}
        >
          {props.products?.map((product) => (
            <Grid
              item
              xs={12}
              md={5}
              lg={4}
              xl={3}
              key={product.id}
              style={{ margin: "1rem" }}
            >
              <Card key={product.id} product={product} />
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
          }}
        >
          {props.products?.map((product) => (
            <Grid
              item
              xs={12}
              md={5}
              lg={4}
              xl={3}
              key={product.id}
              style={{ margin: isMatchCard ? "0.5rem 0" : "1rem", width: isMatchCard ? "100%" : "auto"}}
            >
              <Card key={product.id} product={product} />
            </Grid>
          ))}
        </Box>
      )}
    </Container>
  );
}

export default CardContainer;
