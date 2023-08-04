import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import NewsletterPop from "./newsletterPop";
import { colors } from "@mui/material";

const PopUpNews = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {}, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Dialog open={isModalOpen} onClose={handleCloseModal}>
      <DialogTitle>¡Bienvenida!</DialogTitle>
      <DialogContent>
        <img
          src="src/assets/images/PopUp.png"
          alt="Encabezado"
          style={{ width: "100%", height: "180px", marginBottom: "10px" }}
        />
        <NewsletterPop />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseModal} color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopUpNews;
