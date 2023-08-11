import * as React from "react";
import { Button, Grid, Tab, Tabs, Typography } from "@mui/material";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Alert,
  Drawer,
  useTheme,
  useMediaQuery,
} from "@mui/material";
// import  ShoppingCartCheckoutIcon  from '@mui/icons-material/ShoppingCartCheckoutIcon'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Menu from "@mui/material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import "../searchBar/SearchBar.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getProductsByName } from "../../redux/Actions";
import UserIcon from "../../views/login/UserIcon";
import DrawerComp from "./DrawerComp";

export default function NavBar({ links }) {
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

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
    // console.log(setSearchValue);
  };

  const handlerSubmitSearch = (event) => {
    event.preventDefault();
  };

  const theme = useTheme();
  //   console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  //   console.log(isMatch);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();

  return (
    <AppBar sx={{ backgroundColor: " #517f7F" }}>
      <Toolbar>
        {isMatch ? (
          <>
            <IconButton disableRipple>
              <Link to="/home">
                <img
                  src="src/assets/images/TORTUGA_ROSA_SINFONDO.png"
                  alt="Cart Icon"
                  style={{ width: "3.2rem", height: "2.8rem" }}
                />
              </Link>
            </IconButton>

            <DrawerComp links={links} />
          </>
        ) : (
          <Grid
            display={"flex"}
            sx={{ placeItems: "center" }}
            container
            alignItems="center"
          >
            <Grid item>
              <Typography>
                <IconButton disableRipple>
                  <Link to="/home">
                    <img
                      src="src/assets/images/TORTUGA_ROSA_SINFONDO.png"
                      alt="Cart Icon"
                      style={{ width: "3.2rem", height: "2.8rem" }}
                    />
                  </Link>
                </IconButton>
              </Typography>
            </Grid>
            <Grid item>
              <Tabs
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, val) => setValue(val)}
              >
                {/* {links.map((link, index)=>(
                 <Tab key={index} label={link} />
                 ))} */}
                <ul
                  style={{
                    display: "flex",
                    listStyle: "none",
                    alignItems: "center",
                  }}
                >
                  <li style={{ margin: " 1rem" }}>
                    <Link to="/home">INICIO</Link>
                  </li>
                  <li style={{ margin: " 1rem" }}>
                    <Link to="/products">PRODUCTOS</Link>
                  </li>
                  <li style={{ margin: " 1rem" }}>
                    <Link to="/about">NOSOTRAS</Link>
                  </li>
                  <li style={{ margin: " 1rem" }}>
                    <Link to="/create">CREAR</Link>
                  </li>
                  <li style={{ margin: " 1rem" }}>
                    <Link to="/adminAccount">ADMIN</Link>
                  </li>
                </ul>
              </Tabs>
            </Grid>
            <Grid margin={"auto"}>
              <IconButton sx={{ width: "8rem", height: "4rem" }} disableRipple>
                <img
                  className="img-pdm"
                  src="src/assets/images/PdM.png" // Reemplaza esta ruta con la ruta correcta hacia la imagen del logo
                  alt="Cart Icon"
                  style={{ width: "100%", height: "100%" }}
                />
              </IconButton>
            </Grid>
            <Grid
              display={"flex"}
              marginLeft={"auto"}
              alignItems={"center"}
              gap={"10px"}
            >
              {/* <Grid item xs={3} border={1} /> */}
              <SearchBar
                handlerEventSearch={handlerEventSearch}
                handlerSubmitSearch={handlerSubmitSearch}
              />
              {ShowNoResultsAlert && (
                <Alert severity="error" className="error-searchBar">
                  No se encontró el producto
                </Alert>
              )}
              <Box
                display={"flex"}
                justifyContent={"flex-end"}
                marginRight={1}
                gap={"10px"}
              >
                {/* <Box  sx={{ display: 'flex', alignItems: 'center' }}> */}
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
                <UserIcon />
              </Box>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
}
