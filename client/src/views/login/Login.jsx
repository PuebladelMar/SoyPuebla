import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import { MailOutline } from '@mui/icons-material';

const LoginForm = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f2d5cf',
        padding: '1rem',
        borderRadius: '8px',
        maxWidth: '400px',
        margin: 'auto',
      }}
    >
      <Typography variant="h5" sx={{ textAlign: 'center', color: '#517f7f' }}>
        Iniciar sesión
      </Typography>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '1rem',
        }}
      >
        <TextField
          label="Nombre"
          variant="outlined"
          sx={{ width: '100%', marginBottom: '1rem', backgroundColor: '#eeeeee' }}
        />
        <TextField
          label="Email"
          variant="outlined"
          sx={{ width: '100%', marginBottom: '1rem', backgroundColor: '#eeeeee' }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#dcaaa1',
            color: 'white',
            '&:hover': {
              backgroundColor: '#b2cebf',
            },
          }}
        >
          Iniciar sesión
        </Button>
      </Box>
      <Typography variant="body2" sx={{ textAlign: 'center', color: '#517f7f', marginTop: '1rem' }}>
        O inicia sesión con Gmail
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center', // Centra los iconos horizontalmente
          marginBottom: '1rem', // Agrega espacio entre los iconos y el texto
        }}
      >
        <IconButton
          size="large"
          color="primary"
          sx={{
            backgroundColor: '#81a19e',
            '&:hover': {
              backgroundColor: '#b2cebf',
            },
          }}
        >
          <MailOutline />
        </IconButton>
        {/* <IconButton
          size="large"
          color="primary"
          sx={{
            backgroundColor: '#81a19e',
            '&:hover': {
              backgroundColor: '#b2cebf',
            },
          }}
        >
          <MailOutline />
        </IconButton> */}
      </Box>
    </Box>
  );
};

export default LoginForm;

