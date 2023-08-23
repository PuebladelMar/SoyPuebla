import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { filterProducts, getProducts, deleteProduct } from '../../redux/Actions';
import SideBar from '../../componentes/sidebar/SideBar';
import { NavLink } from 'react-router-dom';
import { FaPencilAlt } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';

const AllProducts = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);
  const [filters, setFilters] = useState({
    color: null,
    size: null,
    category: null,
    serie: null,
    sale: null,
    minPrice: null,
    maxPrice: null,
    order: null,
    name: null,
  });

  useEffect(() => {
    dispatch(filterProducts(filters));
  }, [filters, dispatch]);

  useEffect(() => {
    async function fetchProducts() {
      await dispatch(getProducts());
    }
    fetchProducts();
  }, [dispatch]);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const nullOptions = [
      'null',
      'Todas las categorias',
      'Todos los colores',
      'Todos las tallas',
      'Todos las series',
    ];
    if (name === 'sale') {
      const newValue = filters.sale === true ? null : true;
      setFilters({ ...filters, [name]: newValue });
    } else {
      const newValue = nullOptions.includes(value) ? null : value;
      setFilters({ ...filters, [name]: newValue });
    }
  };

  const resetFilters = (event) => {
    event.preventDefault();
    setFilters({
      color: null,
      size: null,
      category: null,
      serie: null,
      sale: null,
      minPrice: null,
      maxPrice: null,
      order: null,
      name: null,
    });
  };

  const handleDeleteProduct = async (id) => {
    await dispatch(deleteProduct(id));
    alert('Producto borrado exitosamente');
    await dispatch(getProducts());
    
  };

  return (
    <section className='products-section'>
      <div className='products-container'>
        <SideBar
          handlerEventSideBar={handleChange}
          resetFilters={resetFilters}
        />
        <div className='cards-container'>
        <div className='nav-dashboard'>
          <NavLink to='/all-data/all-products'>
            <button
              className='nav-dashboard-btn'
              onClick={() => navigate('/all-data/all-products')}
            >
              Productos{' '}
            </button>
          </NavLink>
          <NavLink to='/all-data/all-colecciones'>
            <button
              className='nav-dashboard-btn'
              onClick={() => navigate('/all-data/all-colecciones')}
            >
              Colecciones
            </button>
          </NavLink>
          <NavLink to='/all-data/all-sizes'>
            <button
              className='nav-dashboard-btn'
              onClick={() => navigate('/all-data/all-sizes')}
            >
              Talles
            </button>
          </NavLink>
          <NavLink to='/all-data/all-categories'>
            <button
              className='nav-dashboard-btn'
              onClick={() => navigate('/all-data/all-categories')}
            >
              Categorias
            </button>
          </NavLink>
          <NavLink to='/dashboard'>
            <button
              className='nav-dashboard-btn'
              onClick={() => navigate('/dashboard')}
            >
              Dashboard
            </button>
          </NavLink>
        </div>
        <h2 className='colores-title'>Productos disponibles</h2>
        {Array.isArray(allProducts) &&
  allProducts.map((product) => (
    <div key={product.id} className='color-item'>
      <div className='color-content'>
        <p className='color-name'>{product.name}</p>
        <div className='color-circle'></div>
      </div>
      <div className='icons'>
        <NavLink to={`/edit-products/${product.id}`}>
          <button
            className='edit-color'
            // onClick={() => handleEditProducts(product.id)}
          >
            <FaPencilAlt />
          </button>
        </NavLink>
        <button
          className='delete-color'
          onClick={() => handleDeleteProduct(product.id)}
        >
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
