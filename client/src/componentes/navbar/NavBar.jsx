import { Grid, Tabs, Typography, makeStyles } from "@mui/material";
import { Box, AppBar, Toolbar, IconButton, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import "../searchBar/SearchBar.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts, getProductsByName } from "../../redux/Actions";
import { useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import UserIcon from "../../views/login/UserIcon";
import PdM from "../.././assets/images/PdM.png";
import TortugaRosa from "../.././assets/images/TORTUGA_ROSA_SINFONDO.png";
import FavImage from "../.././assets/images/Fav.png";
import CartImage from "../.././assets/images/Cart.png";
import DrawerComp from "./DrawerComp";
import "./NavBar.css";

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

  const isMatch = useMediaQuery("(max-width: 850px)");
  const isMatchSearchBar = useMediaQuery("(max-width: 1114px)");
  const [value, setValue] = useState(0);

  // const linkSubrayado = makeStyles((theme) => ({
  //   ulContainer: {
  //     display: "flex",
  //     listStyle: "none",
  //     alignItems: "center",
  //   },
  //   liItem: {
  //     margin: "1rem",
  //     position: "relative",
  //     textDecoration: "none",
  //     color: "inherit",
  //     "&:hover::after": {
  //       content: '""',
  //       position: "absolute",
  //       bottom: "-2px",
  //       left: 0,
  //       width: "100%",
  //       height: "2px",
  //       backgroundColor: theme.palette.primary.main, // Cambia el color según tu paleta
  //     },
  //   },
  // }));

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
                    <li className="menu-item" style={{ margin: " 1rem" }}>
                      <Link to="/home">INICIO</Link>
                    </li>
                    <li className="menu-item" style={{ margin: " 1rem" }}>
                      <Link to="/products">PRODUCTOS</Link>
                    </li>
                    <li className="menu-item" style={{ margin: " 1rem" }}>
                      <Link to="/about">NOSOTRAS</Link>
                    </li>
                    <li className="menu-item" style={{ margin: " 1rem" }}>
                      <Link to="/dashboard">ADMINISTRADOR</Link>
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
              position={"relative"}
            >
              {isMatchSearchBar && (
                <div className="navbar-search-icon">
                  <FiSearch style={{width: "1.6rem", height: "1.6rem", marginTop: "0.2rem"}}/>
                </div>
              )}
              {!isMatch && (
                <IconButton>
                  <Link to="/fav">
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
              )}
              {!isMatch ? (
                <IconButton>
                  <Link to="/Cart">
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
              ) : (
                <IconButton
                  style={{
                    width: "3rem",
                    height: "3rem",
                    marginRight: "0rem",
                    margin: "0rem",
                    position: "absolute",
                    backgroundColor: "#517F7F",
                    top: "90vh",
                    left: "3vw",
                    transition: "background-color 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#497171",
                    },
                  }}
                >
                  <Link to="/Cart">
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
              )}
              <UserIcon />
            </Box>
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
