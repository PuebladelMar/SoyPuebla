import { useState } from 'react';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import { MailOutline } from '@mui/icons-material';
import bgImage from '../../assets/images/1.png'
const LoginForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isValid, setIsValid] = useState(false);
//   const [passwordError, setPasswordError] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

//   const handlePasswordChange = (event) => {
//     const newPassword = event.target.value;
//     setPassword(newPassword);
//     setIsValid(isPasswordValid(newPassword));

//     if (isPasswordValid(newPassword)) {
//       setPasswordError('');
//     } else {
//       setPasswordError('La contraseña debe tener al menos una mayúscula, un caracter especial y un número.');
//     }
//   };

//   // Validation logic (unchanged from previous implementation)
//   const isPasswordValid = (password) => {
//     // ...
//   };

  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImage})`, // Agrega la imagen de fondo
        backgroundSize: 'cover', // Ajusta el tamaño de la imagen para cubrir el contenedor
        backgroundPosition: 'center', // Centra la imagen en el contenedor
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#f2d5cf',
        padding: '1rem',
        borderRadius: '8px',
        maxWidth: '400px',
        margin: 'auto',
        marginTop: '2rem',
        marginBottom:'2rem'
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
          value={name}
          onChange={handleNameChange}
          sx={{ width: '100%', marginBottom: '1rem', backgroundColor: '#eeeeee' }}
        />
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
          sx={{ width: '100%', marginBottom: '1rem', backgroundColor: '#eeeeee' }}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          type="password"
        //   value={password}
        //   onChange={handlePasswordChange}
        //   error={!!passwordError} // Set the error state to true if there's an error message
        //   helperText={passwordError} // mostrar le texto de error
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
        //   disabled={!isValid}
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
          justifyContent: 'center',
          marginBottom: '1rem',
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
      </Box>
    </Box>
  );
};

export default LoginForm;



