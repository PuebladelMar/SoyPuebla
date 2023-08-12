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
        marginTop: "30px",
        paddingBottom: "30px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Grid container spacing={3} justifyContent="start">
        {props.products?.map((product) => (
          <Grid item xs={12} md={6} lg={4} xl={3} key={product.id}>
            <Card key={product.id} product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CardContainer;
