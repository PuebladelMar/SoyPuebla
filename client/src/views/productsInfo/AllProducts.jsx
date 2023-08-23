import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  filterProducts,
  getProducts,
  deleteProduct,
} from '../../redux/Actions';
import SideBar from '../../componentes/sidebar/SideBar';
import { NavLink } from 'react-router-dom';
import { FaPencilAlt } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../componentes/searchBar/SearchBar';
import './AllProducts.css';

const AllProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allProducts = useSelector((state) => state.allProducts);
  const [searchValue, setSearchValue] = useState('');
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

  // useEffect(() => {
  //   dispatch(filterProducts(filters));
  // }, [filters, dispatch]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchValue === '') {
          await dispatch(getProducts());
        } else {
          await dispatch(getProductsByName(searchValue));
        }
      } catch (error) {
        // Manejar el error aquí si es necesario
      }
    };

    fetchData();
  }, [dispatch, searchValue]);

  const handlerEventSearch = (event) => {
    event.preventDefault();
    console.log(allProducts);
    setSearchValue(event.target.value);
  };

  const handlerSubmitSearch = (event) => {
    event.preventDefault();
    setIsModalOpen(false);
  };

  // const handleChange = (event) => {
  //   event.preventDefault();
  //   const { name, value } = event.target;
  //   const nullOptions = [
  //     'null',
  //     'Todas las categorias',
  //     'Todos los colores',
  //     'Todos las tallas',
  //     'Todos las series',
  //   ];
  //   if (name === 'sale') {
  //     const newValue = filters.sale === true ? null : true;
  //     setFilters({ ...filters, [name]: newValue });
  //   } else {
  //     const newValue = nullOptions.includes(value) ? null : value;
  //     setFilters({ ...filters, [name]: newValue });
  //   }
  // };

  // const resetFilters = (event) => {
  //   event.preventDefault();
  //   setFilters({
  //     color: null,
  //     size: null,
  //     category: null,
  //     serie: null,
  //     sale: null,
  //     minPrice: null,
  //     maxPrice: null,
  //     order: null,
  //     name: null,
  //   });
  // };

  const handleDeleteProduct = async (id) => {
    const result = await Swal.fire({
      title: '¿Estás segura?',
      text: 'Una vez eliminado, se borrará automáticamente y afectará el funcionamiento de los productos.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#517f7f',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, elimínalo',
      cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      // El usuario confirmó la eliminación
      try {
        await dispatch(deleteProduct(id));
        await dispatch(getProducts());

        Swal.fire({
          title: 'Eliminado',
          text: 'El producto ha sido eliminado.',
          icon: 'success',
          confirmButtonColor: '#517f7f',
        });
      } catch (error) {
        console.error('Error al eliminar el producto:', error);
        Swal.fire(
          'Error',
          'Ha ocurrido un error al eliminar el producto.',
          'error'
        );
      }
    }
  };

  return (
    <section className='prducts-section-admin'>
      <div className='div1'>
        <SearchBar
          className='searchBar'
          handlerEventSearch={handlerEventSearch}
          handlerSubmitSearch={handlerSubmitSearch}
        />
        {/* <SideBar
          handlerEventSideBar={handleChange}
          resetFilters={resetFilters}
        /> */}
      </div>
      <div className='cards-container'>
        <div className='nav-dashboard-admin'>
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
        <div className='div2'>
          <h2 className='colores-title'>Productos disponibles</h2>

          {Array.isArray(allProducts) &&
            allProducts.map((product) => (
              <div
                key={product.id}
                className='color-item'
              >
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
      {/* <NavLink to='/create'>
        <button navigate='/create'>Crear</button>
      </NavLink> */}
    </section>
  );
};

export default AllProducts;
