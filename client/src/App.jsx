import "./App.css";
import About from "./views/about/About";
import Home from "./views/home/Home";
import Landing from "./views/landing/Landing";
import Products from "./views/products/Products";
import NavBar from "./componentes/navbar/NavBar";
import Footer from "./componentes/footer/Footer";
import Cart from "./views/cart/Cart";
import Create from "./views/create/Create";
import Login from "./views/login/Login";
import Detail from "./views/detail/Detail";
import EnProceso from './views/mercadoPago/EnProceso/enProceso'
import ErrorPage from "./views/errorPage/ErrorPage";  
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "./redux/Actions";
import SearchBar from "./componentes/searchBar/SearchBar";

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      {<NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/procesando" element={<EnProceso />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<Detail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;
