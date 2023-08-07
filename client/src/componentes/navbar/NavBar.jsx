import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { Box, AppBar, Toolbar, IconButton, Alert, } from "@mui/material";
import Menu from "@mui/material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import "../searchBar/SearchBar.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getProductsByName } from "../../redux/Actions";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

export default function NavBar({ showSearchBar }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
 

//   const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const handleProfileMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu>
      
    </Menu>
  );

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
    >
     
    </Menu>
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
          

           <box sx={{flexGrow: 1}}>
           
            <IconButton sx= {{ width: "8rem", height: "4rem"}}  disableRipple>
              <img className="img-pdm"
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
