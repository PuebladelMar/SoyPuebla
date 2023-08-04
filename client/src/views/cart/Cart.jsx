
import { NavLink } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  return (
    <div>
      <h1 className='cart'>Esta es la pagina del carrito</h1>
      <NavLink to='/pay'>
        <button className='cart-button'>Pagar</button>
      </NavLink>
    </div>
  );
};

export default Cart;
