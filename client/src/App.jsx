import './App.css';
import About from './views/about/About';
import Home from './views/home/Home';
import Landing from './views/landing/Landing';
import Products from './views/products/Products';
import NavBar from './componentes/navbar/NavBar';
import Footer from './componentes/footer/Footer';
import Cart from './views/cart/Cart';
import Pay from './views/cart/Pay';
import Create from './views/create/Create';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function App() {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname !== '/' && <NavBar />}{' '}
      {/* Renderizar NavBar en todas las rutas excepto "/" */}
      <Routes>
        <Route
          path='/'
          element={<Landing />}
        />
        <Route
          path='/home'
          element={<Home />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/products'
          element={<Products />}
        />
        <Route
          path='/cart'
          element={<Cart />}
        />
        <Route
          path='/pay'
          element={<Pay />}
        />
        <Route
          path='/create'
          element={<Create />}
        />
      </Routes>
      {pathname !== '/' && <Footer />}{' '}
      {/* Renderizar Footer en todas las rutas excepto "/" */}
    </div>
  );
}

export default App;
