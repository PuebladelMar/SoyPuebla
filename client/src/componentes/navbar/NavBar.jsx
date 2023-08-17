import { Grid, Tabs, Typography } from "@mui/material";
import { Box, AppBar, Toolbar, IconButton, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import "../searchBar/SearchBar.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts, getProductsByName } from "../../redux/Actions";
import { useLocation } from "react-router-dom";
import UserIcon from "../../views/login/UserIcon";
import PdM from "../.././assets/images/PdM.png";
import TortugaRosa from "../.././assets/images/TORTUGA_ROSA_SINFONDO.png";
import FavImage from "../.././assets/images/Fav.png";
import CartImage from "../.././assets/images/Cart.png";
import DrawerComp from "./DrawerComp";

export default function NavBar({ links }) {
  const location = useLocation();
  const isProducts = location.pathname === "/products";
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (searchValue === "") {
      dispatch(getProducts());
    } else {
      dispatch(getProductsByName(searchValue));
    }
  }, [dispatch, searchValue]);

  const handlerEventSearch = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  const handlerSubmitSearch = (event) => {
    event.preventDefault();
  };

  const isMatch = useMediaQuery("(max-width: 800px)");
  const isMatchSearchBar = useMediaQuery("(max-width: 1114px)");
  const [value, setValue] = useState(0);

  return (
    <AppBar
      sx={{
        boxSizing: "border-box",
        backgroundColor: " #517f7F",
        display: "flex",
        justifyContent: "center",
        alignItems: "space-between",
        width: "100%",
        height: "5rem",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box>
          {isMatch ? (
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"1rem"}
            >
              <DrawerComp links={links} />
              <IconButton disableRipple>
                <Link to="/home">
                  <img
                    src={PdM}
                    alt="Cart Icon"
                    style={{ width: "6rem", height: "3rem" }}
                  />
                </Link>
              </IconButton>
            </Box>
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
                        src={TortugaRosa}
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
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: "transparent",
                    },
                  }}
                >
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
                    {/* <li style={{ margin: " 1rem" }}>
                      <Link to="/create">CREAR</Link>
                    </li> */}

                    <li style={{ margin: " 1rem" }}>
                      <Link to="/dashboard">PANEL DE ADMINISTRADOR</Link>
                  

                    </li>
                  </ul>
                </Tabs>
              </Grid>
            </Grid>
          )}
        </Box>
        <Box>
          <Grid
            display={"flex"}
            marginLeft={"auto"}
            alignItems={"center"}
            gap={"10px"}
          >
            {isProducts && !isMatchSearchBar && (
              <SearchBar
                handlerEventSearch={handlerEventSearch}
                handlerSubmitSearch={handlerSubmitSearch}
              />
            )}

            <Box
              display={"flex"}
              justifyContent={"flex-end"}
              marginRight={1}
              gap={"10px"}
            >
              {" "}
              <IconButton
              >
                <Link to="/fav">
                  {" "}
                  <img
                    src={FavImage}
                    alt="Fav Icon"
                    style={{
                      width: "2.2rem",
                      height: "2.2rem",
                      marginRight: "0.1rem",
                    }}
                  />
                </Link>
              </IconButton>
              <IconButton>
                <Link to="/Cart">
                  {" "}
                  <img
                    src={CartImage}
                    alt="Cart Icon"
                    style={{
                      width: "2.2rem",
                      height: "2.2rem",
                      marginRight: "0rem",
                      margin: "-0.1rem",
                    }}
                  />
                </Link>
              </IconButton>
              <UserIcon />
            </Box>
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
