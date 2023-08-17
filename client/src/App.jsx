import "./App.css";
import About from "./views/about/About";
import Home from "./views/home/Home";
import Landing from "./views/landing/Landing";
import Products from "./views/products/Products";
import NavBar from "./componentes/navbar/NavBar";
import Footer from "./componentes/footer/Footer";
import Cart from "./views/cart/Cart";
import Create from "./views/create/Create";
import Detail from "./views/detail/Detail";
import EnProceso from "./views/mercadoPago/EnProceso/enProceso";
import ErrorPage from "./views/errorPage/ErrorPage";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "./redux/Actions";
import AdminAccount from "./views/adminAccount/AdminAccount";
import Customer from "./componentes/footer/customer/customer";
import PayState from "./views/mercadoPago/PayState";
import axios from "axios";
import PaymentMethodsView from "./views/paymentMethods/paymentMethods";
import Favorites from "./views/favs/Favorites";
import History from "./views/history/History";
import Shipment from "./views/shipment/shipment";
import CreateCategory from "./views/create/createCategory/CreateCategory";
import ReviewsForm from "./componentes/reviews/ReviewsForm";
import SizeChart from "./views/sizeChart/sizeChart";
import CreateColor from "./views/create/createColor/createColor";
import CreateSerie from "./views/create/createSerie/CreateSerie";
import Dashboard from "./views/dashboard/Dashboard";

axios.defaults.baseURL = "http://localhost:3001/";

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const linksArray = [
    "Home",
    "Products",
    "About",
    "Create",
    "AdminAccount",
    "Cart",
  ];

  return (
    <div>
      {<NavBar links={linksArray} />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/fav" element={<Favorites />} />
        <Route path="/procesando" element={<EnProceso />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/create" element={<Create />} />
        {/*<Route path="/login" element={<Login />} />*/}
        <Route path="/products/:id" element={<Detail />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/adminAccount" element={<AdminAccount />} />
        <Route path="/frequent-questions" element={<Customer />} />
        <Route path="/pay-state" element={<PayState />} />
        <Route path="/payMethods" element={<PaymentMethodsView />} />
        <Route path="/history" element={<History />} />
        <Route path="/shipment" element={<Shipment />} />
        <Route path="/create-category" element={<CreateCategory />} />
        <Route path="/create-color" element={<CreateColor />} />
        <Route path="/size-chart" element={<SizeChart />} />
        <Route path="/products/reviews" element={<ReviewsForm />} />
        <Route path="/create-serie" element={<CreateSerie />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;
