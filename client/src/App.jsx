import "./App.css";
import About from "./views/about/About";
import Home from "./views/home/Home";
import Landing from "./views/landing/Landing";
import Products from "./views/products/Products";
import NavBar from "./componentes/navbar/NavBar";
import Footer from "./componentes/footer/Footer";
import Cart from "./views/cart/Cart";
import Pay from "./views/cart/Pay";
import Create from "./views/create/Create";
import Login from "./views/login/Login";
import Detail from "./views/detail/Detail";
// import MercadoPago from "./views/mercadoPago/comprar/mercadopago";
import EnProceso from './views/mercadoPago/EnProceso/enProceso'
import FalloDeCompra from "./views/mercadoPago/FalloDeCompra/falloDeCompra";
import ErrorPage from "./views/errorPage/ErrorPage";  
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "./redux/Actions";
import SearchBar from "./componentes/searchBar/SearchBar";
import AdminAccount from "./views/adminAccount/AdminAccount";

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
        {/* <Route path="/pagar" element={<MercadoPago />} /> */}
        <Route path="/procesando" element={<EnProceso />} />
        <Route path="/falloDeCompra" element={<FalloDeCompra />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<Detail />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/adminAccount" element={<AdminAccount />} />
      </Routes>
      {pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;
