import { Grid, Tabs, Typography } from "@mui/material";
import { Box, AppBar, Toolbar, IconButton, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import "../searchBar/SearchBar.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "@mui/material/Modal";
import { getProducts, getProductsByName } from "../../redux/Actions";
import { useLocation } from "react-router-dom";
import { FiSearch, FiHeart, FiShoppingCart, FiX } from "react-icons/fi";
import UserIcon from "../../views/login/UserIcon";
import PdM from "../.././assets/images/PdM.png";
import TortugaRosa from "../.././assets/images/TORTUGA_ROSA_SINFONDO.png";
import DrawerComp from "./DrawerComp";
import "./NavBar.css";

export default function NavBar({ links }) {
  const location = useLocation();
  const isProducts = location.pathname === "/products";
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [searchBarVisible, setSearchBarVisible] = useState(false);

  const handleSearchIconClick = () => {
    setSearchBarVisible(!searchBarVisible);
    setIsModalOpen(true);
  };

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

  const isMatch = useMediaQuery("(max-width: 1039px)");
  const isMatchSearchBar = useMediaQuery("(max-width: 1039px)");
  const isMatchSearchBarIcon = useMediaQuery("(max-width: 610px)");
  const isMatchSearchBarModal = useMediaQuery("(max-width: 644px)");
  const isMatchSearchBarModal2 = useMediaQuery("(max-width: 599px)");
  const [value, setValue] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSearchBarVisible(!searchBarVisible);
  };

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
              {isMatchSearchBarIcon && searchBarVisible ? (
                <IconButton disableRipple>
                  <Link to="/home">
                    <img
                      src={PdM}
                      alt="Cart Icon"
                      style={{
                        position: "absolute",
                        top: "-20rem",
                        visibility: "hidden",
                      }}
                    />
                  </Link>
                </IconButton>
              ) : (
                <IconButton disableRipple>
                  <Link to="/home">
                    <img
                      src={PdM}
                      alt="Cart Icon"
                      style={{ width: "6rem", height: "3rem" }}
                    />
                  </Link>
                </IconButton>
              )}
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
            {isProducts && isMatchSearchBar && searchBarVisible && (
              <Modal
                open={isModalOpen}
                onClose={handleCloseModal}
                style={{
                  backgroundColor: "transparent",
                  width: "100%",
                  padding: "0.85rem",
                  paddingTop: "1.1rem",
                  paddingRight: isMatchSearchBarModal2 ? "2.2rem" : "2.7rem",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                }}
              >
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    width: isMatchSearchBarModal ? "90%" : "55%",
                    backgroundColor: "#e5e4e4",
                    borderRadius: "20px",
                  }}
                >
                  <SearchBar
                    handlerEventSearch={handlerEventSearch}
                    handlerSubmitSearch={handlerSubmitSearch}
                  />
                  <IconButton
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "2.6rem",
                      height: "2.6rem",
                      marginTop: "0.1rem",
                      backgroundColor: "#e5e4e4",
                    }}
                    onClick={handleSearchIconClick}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#d1d0d0";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#e5e4e4";
                    }}
                  >
                    <FiX
                      style={{
                        width: "1.8rem",
                        height: "1.8rem",
                        color: "161616",
                      }}
                    />
                  </IconButton>
                </Box>
              </Modal>
            )}
            <Box
              display={"flex"}
              justifyContent={"flex-end"}
              marginRight={1}
              gap={"10px"}
              position={"relative"}
            >
              {isProducts && isMatchSearchBar && (
                <IconButton
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "3.2rem",
                    height: "3.2rem",
                    marginTop: "0.1rem",
                  }}
                  onClick={handleSearchIconClick}
                >
                  <FiSearch
                    style={{
                      width: "1.8rem",
                      height: "1.8rem",
                      color: "white",
                    }}
                  />
                </IconButton>
              )}
              {!isMatch && (
                <IconButton
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "0.1rem",
                    width: "3.2rem",
                    height: "3.2rem",
                  }}
                >
                  <Link to="/fav">
                    <FiHeart
                      style={{
                        width: "1.8rem",
                        height: "1.8rem",
                        color: "white",
                      }}
                    />
                  </Link>
                </IconButton>
              )}
              {!isMatch && (
                <IconButton
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "0.1rem",
                    width: "3.2rem",
                    height: "3.2rem",
                  }}
                >
                  <Link to="/Cart">
                    <FiShoppingCart
                      style={{
                        width: "1.8rem",
                        height: "1.8rem",
                        color: "white",
                      }}
                    />
                  </Link>
                </IconButton>
              )}
              {!isProducts && isMatch && (
                <IconButton
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "0.1rem",
                    width: "3.2rem",
                    height: "3.2rem",
                  }}
                >
                  <Link to="/Cart">
                    <FiShoppingCart
                      style={{
                        width: "1.8rem",
                        height: "1.8rem",
                        color: "white",
                      }}
                    />
                  </Link>
                </IconButton>
              )}
              {isMatchSearchBarIcon && searchBarVisible ? (
                <div className="div-user-hidden"></div>
              ) : (
                <UserIcon />
              )}
            </Box>
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
