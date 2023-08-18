import './AllData.css';
import { NavLink } from 'react-router-dom';

const AllData = () => {
  return (
    <div className='alldata-btn-container'>
      <NavLink to='all-products'>
        <button className='alldata-btn'>Productos</button>
      </NavLink>
      <NavLink to='all-colecciones'>
        <button className='alldata-btn'>Colecciones</button>
      </NavLink>
      <NavLink to='all-sizes'>
        <button className='alldata-btn'>Talles</button>
      </NavLink>
      <NavLink to='all-colors'>
        <button className='alldata-btn'>Colores</button>
      </NavLink>
      <NavLink to='all-categories'>
        <button className='alldata-btn'>Categorias</button>
      </NavLink>
    </div>
  );
};

export default AllData;
