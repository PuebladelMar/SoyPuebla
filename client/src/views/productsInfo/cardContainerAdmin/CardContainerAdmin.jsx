import Container from '@mui/material/Container';
import CardAdmin from '../cardAdmin/CardAdmin';
import Grid from '@mui/material/Grid';
import { Box, useMediaQuery } from '@mui/material';

function CardContainer(props) {
  const isMatch = useMediaQuery('(max-width: 644px)');

  return (
    <Container
      style={{
        maxWidth: '100%',
        backgroundColor: '#f0f0f0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      {!isMatch ? (
        <Box
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            padding: '1rem 2rem',
            justifyContent: 'center',
            alignItems: 'start',
            width: '100%',
            margin: '0 auto',
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
              style={{ margin: '1rem' }}
            >
              <CardAdmin
                key={product.id}
                product={product}
              />
            </Grid>
          ))}
        </Box>
      ) : (
        <Box
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            padding: '1rem 0',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            margin: '0 auto',
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
              style={{ margin: '1rem' }}
            >
              <CardAdmin
                key={product.id}
                product={product}
              />
            </Grid>
          ))}
        </Box>
      )}
    </Container>
  );
}

export default CardContainer;
