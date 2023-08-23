import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from './redux/Actions';
import AdminAccount from './views/adminAccount/AdminAccount';
import EditProduct from './views/editProduct/EditProduct';
import AllData from "./views/productsInfo/AllData";
import AllProducts from "./views/productsInfo/AllProducts";
import DetailAdmin from "./views/productsInfo/detailadmin/DetailAdmin.jsx";
import AllColecciones from "./views/productsInfo/allColecciones/AllColecciones";
import AllTalles from "./views/productsInfo/allTalles/AllTalles";
import AllColors from "./views/productsInfo/allColors/AllColors";
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
import { Routes, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
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
import Information from "./views/dashboard/Information";
import UsersData from "./views/usersData/dataUserAdmin";
import HistoryData from "./views/dashboard/purchaseHistory/purchaseHistory";
import AllCategories from "./views/productsInfo/categories/AllCategories";
import BannedUserPage from "./views/ban/BannedUserPage"


axios.defaults.baseURL = "http://localhost:3001/";

function App() {
  const { pathname } = useLocation();
  const user = useSelector((state)=> state.userById)
  const isUserBanned = user?.user?.banUser === true;
  return (
    <div>
      
      {<NavBar />}
      <Routes>
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route
          path='/'
          element={<Landing />}
        />
        
        <Route
          path='/home'
          element={isUserBanned ? <BannedUserPage/> : <Home />}
        />
        <Route
          path='/fav'
          element={isUserBanned ? <BannedUserPage/> : <Favorites />}
        />
        <Route
          path='/procesando'
          element={isUserBanned ? <BannedUserPage/> : <EnProceso />}
        />
        <Route
          path='/about'
          element={isUserBanned ? <BannedUserPage/> : <About />}
        />
        <Route
          path='/products'
          element={isUserBanned ? <BannedUserPage/> : <Products />}
        />
        <Route
          path='/cart'
          element={isUserBanned ? <BannedUserPage/> : <Cart />}
        />
        <Route
          path='/create'
          element={isUserBanned ? <BannedUserPage/> : <Create />}
        />
        {/*<Route path="/login" element={<Login />} />*/}
        <Route
          path='/products/:id'
          element={isUserBanned ? <BannedUserPage/> : <Detail />}
        />
        <Route
          path='*'
          element={isUserBanned ? <BannedUserPage/> : <ErrorPage />}
        />
        <Route
          path='/frequent-questions'
          element={<Customer />}
        />
        <Route
          path='/pay-state'
          element={isUserBanned ? <BannedUserPage/> : <PayState />}
        />
        <Route
          path='/payMethods'
          element={isUserBanned ? <BannedUserPage/> : <PaymentMethodsView />}
        />
        <Route
          path='/history'
          element={isUserBanned ? <BannedUserPage/> : <History />}
        />
        <Route
          path='/shipment'
          element={isUserBanned ? <BannedUserPage/> : <Shipment />}
        />
        <Route
          path='/size-chart'
          element={isUserBanned ? <BannedUserPage/> : <SizeChart />}
        />
        <Route
          path='/products/reviews'
          element={isUserBanned ? <BannedUserPage/> : <ReviewsForm />}
        />
        {user?.user?.userRole === 'administrator' || user?.user?.userRole === 'superadministrator' ? (
        <>
        <Route
          path='/dashboard'
          element={isUserBanned ? <BannedUserPage/> : <Dashboard />}
        />
        <Route
          path='/info'
          element={isUserBanned ? <BannedUserPage/> : <Information />}
        />
                <Route
          path='/all-data'
          element={isUserBanned ? <BannedUserPage/> : <AllData />}
        />
        <Route
          path='/all-data/all-products'
          element={isUserBanned ? <BannedUserPage/> : <AllProducts />}
        />
        <Route
          path='/detail-admin/:id'
          element={isUserBanned ? <BannedUserPage/> : <DetailAdmin />}
        />
        <Route
          path='/all-data/all-colecciones'
          element={isUserBanned ? <BannedUserPage/> : <AllColecciones />}
        />
        <Route
          path='/all-data/all-sizes'
          element={isUserBanned ? <BannedUserPage/> : <AllTalles />}
        />
        <Route
          path='/all-data/all-colors'
          element={isUserBanned ? <BannedUserPage/> : <AllColors />}
        />
        <Route
          path='/dashboard/users'
          element={isUserBanned ? <BannedUserPage/> : <UsersData />}
        />
        <Route
          path='/dashboard/history'
          element={isUserBanned ? <BannedUserPage/> : <HistoryData />}
        />
        <Route
          path='/all-data/all-categories'
          element={isUserBanned ? <BannedUserPage/> : <AllCategories />}
        />
        <Route
          path='/edit-products/:id'
          element={isUserBanned ? <BannedUserPage/> : <EditProduct />}
        />
        </>
        ):(null)}

       

      </Routes>
      {pathname !== '/' && <Footer />}
    </div>
  );
}

export default App;
