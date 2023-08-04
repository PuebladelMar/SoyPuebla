
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Card from "../card/Card";
import Grid from '@mui/material/Grid';

function CardContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="card-container" maxWidth="2560px" style={{ backgroundColor: '#f0f0f0' }}>
        <Grid container spacing={3}>

          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((cardId) => (
            <Grid item xs={12} md={6} lg={4} xl={3} key={cardId}>
              <Card />
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default CardContainer;
