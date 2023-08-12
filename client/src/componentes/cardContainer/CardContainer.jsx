import Container from "@mui/material/Container";
import Card from "../card/Card";
import Grid from "@mui/material/Grid";

function CardContainer(props) {
  return (
    <Container
      className="card-container"
      maxWidth="2560px"
      justifyContent="center"
      style={{
        padding: "1rem 2rem",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Grid style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "start",
        alignItems: "center",
      }}>
        {props.products?.map((product) => (
          <Grid item xs={12} md={5} lg={4} xl={3} key={product.id} style={{ margin: "1rem" }}>
            <Card key={product.id} product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CardContainer;
