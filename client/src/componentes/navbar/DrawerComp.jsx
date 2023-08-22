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

function DrawerComp() {
  const [open, setOpen] = useState(false);
 

  return (
    <>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "#517F7F",
            minWidth: "14rem",
            paddingTop: "0.5rem",
          },
        }}
        open={open}
        onClose={() => setOpen(false)}
        onClick={() => setOpen(false)}
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
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
          >
            <ListItemButton
              component={Link}
              to="/home"
              sx={{
                borderRadius: "10px",
              }}
            >
              <ListItemIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "10.8rem",
                }}
              >
                <ListItemText
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#ededed",
                    transform: "scale(1.3)",
                    textAlign: "center",
                    width: "100%",
                    "&:hover": {
                      color: "#baa199",
                      cursor: "pointer",
                    },
                  }}
                >
                  Inicio
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton
              component={Link}
              to="/products"
              sx={{
                borderRadius: "10px",
              }}
            >
              <ListItemIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "10.8rem",
                }}
              >
                <ListItemText
                  sx={{
                    color: "#ededed",
                    transform: "scale(1.3)",
                    textAlign: "center",
                    "&:hover": {
                      color: "#baa199",
                      cursor: "pointer",
                    },
                  }}
                >
                  Productos
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton
              component={Link}
              to="/about"
              sx={{
                borderRadius: "10px",
              }}
            >
              <ListItemIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "10.8rem",
                }}
              >
                <ListItemText
                  sx={{
                    color: "#ededed",
                    transform: "scale(1.3)",
                    textAlign: "center",
                    "&:hover": {
                      color: "#baa199",
                      cursor: "pointer",
                    },
                  }}
                >
                  Nosotras
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton
              component={Link}
              to="/dashboard"
              sx={{
                borderRadius: "10px",
              }}
            >
              <ListItemIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "10.8rem",
                }}
              >
                <ListItemText
                  sx={{
                    color: "#ededed",
                    transform: "scale(1.3)",
                    textAlign: "center",
                    "&:hover": {
                      color: "#baa199",
                      cursor: "pointer",
                    },
                  }}
                >
                  Administrador
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton
              component={Link}
              to="/fav"
              sx={{
                borderRadius: "10px",
              }}
            >
              <ListItemIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "10.8rem",
                }}
              >
                <ListItemText
                  sx={{
                    color: "#ededed",
                    transform: "scale(1.3)",
                    textAlign: "center",
                    "&:hover": {
                      color: "#baa199",
                      cursor: "pointer",
                    },
                  }}
                >
                  Favoritos
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton
              component={Link}
              to="/cart"
              sx={{
                borderRadius: "10px",
              }}
            >
              <ListItemIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "10.8rem",
                }}
              >
                <ListItemText
                  sx={{
                    color: "#ededed",
                    transform: "scale(1.3)",
                    textAlign: "center",
                    "&:hover": {
                      color: "#baa199",
                      cursor: "pointer",
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
