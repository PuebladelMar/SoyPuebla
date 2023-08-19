import { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import PdM from "../.././assets/images/PdM.png";
import { Link } from "react-router-dom";

function DrawerComp({ links }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer
        PaperProps={{
          sx: { backgroundColor: "#b2cebf", width: "15.7rem" },
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box display={"flex"} justifyContent={"center"}>
          <Link to="/home">
            <img
              src={PdM}
              alt="Cart Icon"
              style={{
                width: "7rem",
                height: "3.3rem",
                margin: "1rem",
                filter: " contrast(0%)",
              }}
            />
          </Link>
        </Box>

        <List
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            width={"100%"}
          >
            {links.map((link, index) => (
              <ListItemButton
                key={index}
                component={Link}
                to={`/${link.toLowerCase()}`}
              >
                <ListItemIcon
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <ListItemText
                    sx={{
                      color: "#ededed",
                      transform: "scale(1.3)",
                      textAlign: "center",
                      "&:hover": {
                        color: "#517f7f",
                        cursor: "pointer",
                        transform: "scale(1.4)",
                      },
                    }}
                  >
                    {link}
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ))}
          </Box> */}

          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            width={"100%"}
          >
            <ListItemButton component={Link} to="/home">
              <ListItemIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <ListItemText
                  sx={{
                    color: "#ededed",
                    transform: "scale(1.3)",
                    textAlign: "center",
                    "&:hover": {
                      color: "#517f7f",
                      cursor: "pointer",
                      transform: "scale(1.4)",
                    },
                  }}
                >
                  Inicio
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton component={Link} to="/products">
              <ListItemIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <ListItemText
                  sx={{
                    color: "#ededed",
                    transform: "scale(1.3)",
                    textAlign: "center",
                    "&:hover": {
                      color: "#517f7f",
                      cursor: "pointer",
                      transform: "scale(1.4)",
                    },
                  }}
                >
                  Productos
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton component={Link} to="/about">
              <ListItemIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <ListItemText
                  sx={{
                    color: "#ededed",
                    transform: "scale(1.3)",
                    textAlign: "center",
                    "&:hover": {
                      color: "#517f7f",
                      cursor: "pointer",
                      transform: "scale(1.4)",
                    },
                  }}
                >
                  Nosotras
              
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton component={Link} to="/dashboard">
              <ListItemIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <ListItemText
                  sx={{
                    color: "#ededed",
                    transform: "scale(1.3)",
                    textAlign: "center",
                    "&:hover": {
                      color: "#517f7f",
                      cursor: "pointer",
                      transform: "scale(1.4)",
                    },
                  }}
                >
                  Administrador
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton component={Link} to="/fav">
              <ListItemIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <ListItemText
                  sx={{
                    color: "#ededed",
                    transform: "scale(1.3)",
                    textAlign: "center",
                    "&:hover": {
                      color: "#517f7f",
                      cursor: "pointer",
                      transform: "scale(1.4)",
                    },
                  }}
                >
                  Favoritos
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton component={Link} to="/cart">
              <ListItemIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <ListItemText
                  sx={{
                    color: "#ededed",
                    transform: "scale(1.3)",
                    textAlign: "center",
                    "&:hover": {
                      color: "#517f7f",
                      cursor: "pointer",
                      transform: "scale(1.4)",
                    },
                  }}
                >
                  Carrito
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
            
          </Box>
        </List>
      </Drawer>
      <IconButton sx={{ color: "white" }} onClick={() => setOpen(!open)}>
        <MenuRoundedIcon />
      </IconButton>
    </>
  );
}

export default DrawerComp;
