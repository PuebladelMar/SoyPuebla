import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import NewsletterPop from './newsletterPop';
import { NavLink } from 'react-router-dom';
import { colors } from '@mui/material';

const PopUpNews = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {}, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Dialog
      open={isModalOpen}
      onClose={handleCloseModal}
      sx={{ background: '#ffffff' }}
    >
      <DialogTitle
        className='welcome'
        sx={{textAlign: 'center', fontSize: '24px'}}
      >
        ¡Bienvenidos!
      </DialogTitle>
      <DialogContent sx={{ backgroundColor: '#dcaaa1' }}>
        <img
          src='src/assets/images/LANDING LOGO 2.png'
          alt='Encabezado'
          style={{ width: '100%', height: '260px', marginBottom: '0px', objectFit: 'cover', marginBottom: '10px' }}
        />
        <NewsletterPop />
      </DialogContent>
      <DialogActions sx={{ backgroundColor: '#dcaaa1' }}>
        <NavLink to='/home'>
          <Button
            onClick={handleCloseModal}
            color='primary'
            sx={{
              backgroundColor: '#517f7f',
              width: '10%',
              color: '#f2d5cf',
              fontSize: '8px',
              textAlign: 'center',
            }}
          >
            Cerrar
          </Button>
        </NavLink>
      </DialogActions>
    </Dialog>
  );
};

export default PopUpNews;
