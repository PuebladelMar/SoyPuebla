import { Grid, Tabs, Typography } from "@mui/material";
import { Box, AppBar, Toolbar, IconButton, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import "../searchBar/SearchBar.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "@mui/material/Modal";
import {
  getProducts,
  getProductsByName,
  getUserCart,
} from "../../redux/Actions";
import { useLocation } from "react-router-dom";
import { FiSearch, FiHeart, FiShoppingCart, FiX } from "react-icons/fi";
import UserIcon from "../../views/login/UserIcon";
import PdM from "../.././assets/images/PdM.png";
import TortugaRosa from "../.././assets/images/TORTUGA_ROSA_SINFONDO.png";
import DrawerComp from "./DrawerComp";
import "./NavBar.css";
import Swal from "sweetalert2";

export default function NavBar({ links }) {
  const location = useLocation();
  const isProducts = location.pathname === "/products";
  const dispatch = useDispatch();
  const userCart = useSelector((state) => state.userCart);
  const [searchValue, setSearchValue] = useState("");
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const user = useSelector((state) => state.userById);
  const userId = useSelector((state) => state.userId);
  const isMatch = useMediaQuery("(max-width: 1039px)");
  const isMatchSearchBar = useMediaQuery("(max-width: 1130px)");
  const isMatchSearchBarIcon = useMediaQuery("(max-width: 610px)");
  const isMatchSearchBarModal = useMediaQuery("(max-width: 644px)");
  const isMatchSearchBarModal2 = useMediaQuery("(max-width: 599px)");
  const [value, setValue] = useState(0);
  const [results, setResults] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const allProducts = useSelector((state) => state.allProducts);

  useEffect(() => {
    if (userId) {
      const asyncFunction = async () => {
        await dispatch(getUserCart(userId));
      };
      asyncFunction();
    }
  }, [dispatch, userId]);

  const handleSearchIconClick = () => {
    setSearchBarVisible(true);
    setIsModalOpen(true);
  };

  const handleSelectedProduct = (name) => {
    dispatch(getProductsByName(name));
    setIsModalOpen(false);
  };

  const handleOnFocus = () => {
    setResults(!results);
  }

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
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSearchBarVisible(false);
  };

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
                    {user?.user?.userRole === "administrator" ||
                    user?.user?.userRole === "superadministrator" ? (
                      <li className="menu-item" style={{ margin: " 1rem" }}>
                        <Link to="/dashboard">ADMINISTRADOR</Link>
                      </li>
                    ) : null}
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
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  width: "100%",
                  borderRadius: "20px",
                  position: "relative",
                }}
              >
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    width: "100%",
                    backgroundColor: "#e5e4e4",
                    borderRadius: "15px",
                  }}
                >
                  <SearchBar
                    handlerEventSearch={handlerEventSearch}
                    handlerSubmitSearch={handlerSubmitSearch}
                    handleOnFocus={handleOnFocus}
                  />
                </Box>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    position: "absolute",
                    alignItems: "center",
                    top: "2.4rem",
                    gap: "1rem",
                    width: isMatchSearchBarModal ? "100%" : "100%",
                    borderRadius: "15px",
                    backgroundColor: "#e5e4e4",
                    marginTop: "0.2rem",
                  }}
                >
                  {allProducts.length > 0 && results && (
                    <ul
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "0.1rem",
                        width: "100%",
                        padding: "0.2rem 0",
                        cursor: "pointer",
                        transition: "0.3s ease",
                      }}
                    >
                      {allProducts.slice(0, 5).map((result) => (
                        <li
                          className="li-products"
                          key={result.id}
                          onClick={() => handleSelectedProduct(result.name)}
                        >
                          {result.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </Box>
              </Box>
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
                  paddingRight: isMatchSearchBarModal2
                    ? "2.5rem"
                    : isMatchSearchBarModal
                    ? "4rem"
                    : "7rem",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                }}
              >
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    width: isMatchSearchBarModal ? "90%" : "55%",
                    borderRadius: "20px",
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      width: isMatchSearchBarModal ? "100%" : "100%",
                      backgroundColor: "#e5e4e4",
                      borderRadius: "15px",
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
                      onClick={handleCloseModal}
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
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "1rem",
                      width: isMatchSearchBarModal ? "100%" : "100%",
                      borderRadius: "15px",
                      backgroundColor: "#e5e4e4",
                      marginTop: "0.2rem",
                    }}
                  >
                    {allProducts.length > 0 && (
                      <ul
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "0.1rem",
                          width: "100%",
                          padding: "0.2rem 0",
                          cursor: "pointer",
                        }}
                      >
                        {allProducts.slice(0, 5).map((result) => (
                          <li
                            className="li-products"
                            key={result.id}
                            onClick={() => handleSelectedProduct(result.name)}
                          >
                            {result.name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </Box>
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
                  {!userId.length ? (
                    <FiHeart
                      style={{
                        width: "1.8rem",
                        height: "1.8rem",
                        color: "white",
                      }}
                      onClick={handleHeartClick}
                    />
                  ) : (
                    <Link to="/fav">
                      <FiHeart
                        style={{
                          width: "1.8rem",
                          height: "1.8rem",
                          color: "white",
                        }}
                      />
                    </Link>
                  )}
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
                  {!userId.length ? (
                    <div className="cart-num-container">
                      <FiShoppingCart
                        style={{
                          width: "1.8rem",
                          height: "1.8rem",
                          color: "white",
                        }}
                        onClick={handleCartClick}
                      />
                    </div>
                  ) : (
                    <div className="cart-num-container">
                      {userCart.length > 0 && (
                        <span className="span-num-cart">{userCart.length}</span>
                      )}
                      <Link to="/Cart">
                        <FiShoppingCart
                          style={{
                            width: "1.8rem",
                            height: "1.8rem",
                            color: "white",
                          }}
                        />
                      </Link>
                    </div>
                  )}
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
                  {!userId.length ? (
                    <div className="cart-num-container">
                      <FiShoppingCart
                        style={{
                          width: "1.8rem",
                          height: "1.8rem",
                          color: "white",
                        }}
                        onClick={handleCartClick}
                      />
                    </div>
                  ) : (
                    <div className="cart-num-container">
                      {userCart.length > 0 && (
                        <span className="span-num-cart">{userCart.length}</span>
                      )}
                      <Link to="/Cart">
                        <FiShoppingCart
                          style={{
                            width: "1.8rem",
                            height: "1.8rem",
                            color: "white",
                          }}
                        />
                      </Link>
                    </div>
                  )}
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
