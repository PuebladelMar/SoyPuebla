import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  Box,
  Drawer,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
} from "@mui/material";
import { getUserCart } from "../../redux/Actions";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import PdM from "../.././assets/images/PdM.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./DrawerComp.css";

function DrawerComp() {
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.userById);
  const userId = useSelector((state) => state.userId);
  const userCart = useSelector((state) => state.userCart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      const asyncFunction = async () => {
        await dispatch(getUserCart(userId));
      };
      asyncFunction();
    }
  }, [dispatch, userId]);

  const handleHeartClick = () => {
    Swal.fire({
      icon: "warning",
      title: "Por favor, inicia sesión",
      text: "para ir a favoritos",
      confirmButtonColor: "#517f7F",
    });
  };

  const handleCartClick = () => {
    Swal.fire({
      icon: "warning",
      title: "Por favor, inicia sesión",
      text: "para ir al carrito",
      confirmButtonColor: "#517f7F",
    });
  };

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
            {user?.user?.userRole === "administrator" ||
            user?.user?.userRole === "superadministrator" ? (
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
            ) : null}

            {!userId.length ? (
              <ListItemButton
                onClick={handleHeartClick}
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
            ) : (
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
            )}

            {!userId.length ? (
              <ListItemButton
                onClick={handleCartClick}
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
                      position: "relative",
                      color: "#ededed",
                      fontSize: "0.1rem",
                      transform: "scale(1.3)",
                      textAlign: "center",
                      "&:hover": {
                        color: "#baa199",
                        cursor: "pointer",
                      },
                    }}
                  >
                    Carrito <span className="span-cart-drawer">0</span>
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ) : (
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
                      position: "relative",
                      color: "#ededed",
                      transform: "scale(1.3)",
                      textAlign: "center",
                      "&:hover": {
                        color: "#baa199",
                        cursor: "pointer",
                      },
                    }}
                  >
                    Carrito <span className="span-cart-drawer">{userCart.length}</span>
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            )}
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
