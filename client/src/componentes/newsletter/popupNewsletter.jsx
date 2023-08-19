import { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import NewsletterPop from "./newsletterPop";
import PopImg from "../.././assets/images/12.png"
import { NavLink } from "react-router-dom";

const PopUpNews = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {}, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Dialog open={isModalOpen} onClose={handleCloseModal}>
      <NavLink to="/home">
        <Button
          onClick={handleCloseModal}
          color="primary"
          sx={{
            backgroundColor: "#ffffff",
            width: "2px",
            height: "25px",
            color: "#517f7fb6",
            fontWeight: "bold",
            fontSize: "12px",
            transition: "background-color 0.3s ease",
            cursor: "pointer",
            position: "absolute",
            top: "0",
            right: "0",
            marginRight: "0px",
            "&:hover": {
              backgroundColor: "#b2cebf74",
            },
          }}
        >
          x
        </Button>
      </NavLink>
      <DialogContent
        sx={{
          margin: "0px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <img
          src={PopImg}
          alt="Encabezado"
          style={{
            maxWidth: "100%",
            marginBottom: "20px",
            objectFit: "cover",
            marginTop: "20px",
          }}
        />
        <NewsletterPop />
      </DialogContent>
      <DialogActions sx={{ backgroundColor: "#ffffff" }}></DialogActions>
    </Dialog>
  );
};

export default PopUpNews;
