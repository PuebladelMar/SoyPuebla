import * as React from "react";
import { Box, AppBar, Toolbar, IconButton, Alert } from "@mui/material";
import Menu from "@mui/material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import "../searchBar/SearchBar.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getProductsByName } from "../../redux/Actions";
import User from "../../views/login/User";
import { useLocation } from "react-router-dom";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

export default function NavBar() {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = <Menu></Menu>;

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    ></Menu>
  );

  //Logica del paginado

  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);

  const [searchValue, setSearchValue] = useState("");
  const [ShowNoResultsAlert, setShowNoResultsAlert] = useState(false);

  useEffect(() => {
    if (searchValue === "") {
      dispatch(getProducts());
    } else {
      dispatch(getProductsByName(searchValue));
    }
  }, [dispatch, searchValue]);

  useEffect(() => {
    setShowNoResultsAlert(allProducts.length === 0);
  }, [allProducts]);

  const handlerEventSearch = (event) => {
    event.preventDefault();

    setSearchValue(event.target.value);
    console.log(setSearchValue);
  };

  const handlerSubmitSearch = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: " #517f7F" }}>
        <Toolbar sx={{ flexGrow: 1 }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <IconButton disableRipple>
              <Link to="/home">
                <img
                  src="src/assets/images/TORTUGA_ROSA_SINFONDO.png"
                  alt="Cart Icon"
                  style={{ width: "3.2rem", height: "2.8rem" }}
                />
              </Link>
            </IconButton>
          </IconButton>
          <ul style={{ display: "flex", listStyle: "none" }}>
            <li style={{ margin: "0 1rem" }}>
              <Link to="/home">INICIO</Link>
            </li>
            <li style={{ margin: "0 1rem" }}>
              <Link to="/products">PRODUCTOS</Link>
            </li>
            <li style={{ margin: "0 1rem" }}>
              <Link to="/about">NOSOTRAS</Link>
            </li>
            <li style={{ margin: "0 1rem" }}>
              <Link to="/create">CREAR</Link>
            </li>
          </ul>

          <box sx={{ flexGrow: 1 }}>
            <IconButton sx={{ width: "8rem", height: "4rem" }} disableRipple>
              <img
                className="img-pdm"
                src="src/assets/images/PdM.png" // Reemplaza esta ruta con la ruta correcta hacia la imagen del logo
                alt="Cart Icon"
                style={{ width: "100%", height: "100%" }} // Ajusta el tamaño del logo para que ocupe todo el espacio del IconButton
              />
            </IconButton>
          </box>

          <Box sx={{ flexGrow: 2 }} />
          <Box sx={{ marginLeft: "auto" }}></Box>
          <SearchBar
            handlerEventSearch={handlerEventSearch}
            handlerSubmitSearch={handlerSubmitSearch}
          />
          {ShowNoResultsAlert && (
            <Alert severity="error" className="error-searchBar">
              No se encontró el producto
            </Alert>
          )}

          <Box sx={{ flexGrow: 0 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton>
              <Link to="/Cart">
                {" "}
                <img
                  src="src/assets/images/Cart.png"
                  alt="Cart Icon"
                  style={{ width: "3.2rem", height: "3.2rem" }}
                />
              </Link>
            </IconButton>
            <IconButton
              size="small"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={""}
              color="inherit"
            >
              <ClerkProvider publishableKey={clerkPubKey}>
                <User />
                <SignedIn></SignedIn>
                {isLoginPage && (
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                )}
              </ClerkProvider>
              <Link to="/login">Log in</Link>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
