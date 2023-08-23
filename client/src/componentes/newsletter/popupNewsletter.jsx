import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import NewsletterPop from "./newsletterPop";
import PopImg from "../.././assets/images/12.png";
import { NavLink } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { useMediaQuery } from '@mui/material';

const PopUpNews = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const isMatch = useMediaQuery('(max-width: 400px)');

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Dialog
      open={isModalOpen}
      onClose={() => {
        setIsModalOpen(false);
        window.location.href = "/home";
      }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <NavLink
        to="/home"
        style={{
          maxWidth: "2rem",
          height: "2rem",
          position: "absolute",
          top: "1rem",
          right: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={handleCloseModal}
      >
        <Button
          onClick={handleCloseModal}
          color="primary"
          sx={{
            backgroundColor: "#ffffff",
            height: "2.5rem",
            color: "#517f7fb6",
            fontWeight: "bold",
            fontSize: "2rem",
            borderRadius: "50%",
            transition: "background-color 0.3s ease",
            cursor: "pointer",
            minWidth: "2.5rem",
            marginRight: "0px",
            "&:hover": {
              backgroundColor: "#f9cdc7",
              color: "#ffffff",
            },
          }}
        >
          <FiX />
        </Button>
      </NavLink>
      <DialogContent
        sx={{
          margin: "0px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "27rem",
          maxHeight: "27rem",
        }}
      >
        <img
          src={PopImg}
          alt="Encabezado"
          style={{
            maxWidth: isMatch ? "50%" : "100%",
            objectFit: "cover",
            marginTop: "1rem",
          }}
        />
        <NewsletterPop />
      </DialogContent>
      <DialogActions sx={{ backgroundColor: "#ffffff" }}></DialogActions>
    </Dialog>
  );
};

export default PopUpNews;
