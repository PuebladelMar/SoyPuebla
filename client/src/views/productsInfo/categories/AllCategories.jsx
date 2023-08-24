import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteCategories,
  getCategories,
  putCategories,
} from '../../../redux/Actions';
import { FaPencilAlt } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { NavLink, useNavigate } from 'react-router-dom';
import CreateCategory from '../../create/createCategory/CreateCategory';
import { useState } from 'react';
// import SearchBar from '../../../componentes/searchBar/SearchBar';
import Swal from 'sweetalert2';
import './AllCategories.css';

const AllCategories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState({});
  // const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getCategories());
    };

    fetchData();
  }, [dispatch]);

  const handleDeleteCategories = async (id) => {
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
        await dispatch(deleteCategories(id));
        await dispatch(getCategories());

        Swal.fire({
          title: 'Eliminado',
          text: 'La categoria ha sida eliminada.',
          icon: 'success',
          confirmButtonColor: '#517f7f',
        });
      } catch (error) {
        console.error('Error al eliminar la categoria:', error);
        Swal.fire(
          'Error',
          'Ha ocurrido un error al eliminar la categoria.',
          'error'
        );
      }
    }
  };

  const handleEditCategories = async (id, name) => {
    const updatedName = prompt('Enter new name', name);
    if (updatedName) {
      await dispatch(putCategories(id, updatedName));
      dispatch(getCategories());
    }
  };
  const handleOpenCategoryCreate = (event) => {
    setShowAlert({ category: true });
    event.preventDefault();
  };
  const handleCloseAlert = (event) => {
    setShowAlert({});
    event.preventDefault();
  };

  // const handlerEventSearch = (event) => {
  //   event.preventDefault();
  //   setSearchValue(event.target.value);
  // };

  // const handlerSubmitSearch = (event) => {
  //   event.preventDefault();
  // };

  return (
    <div
      className='categories-main'
      name='series'
      value='name'
    >
      {/* <SearchBar
        handlerEventSearch={handlerEventSearch}
        handlerSubmitSearch={handlerSubmitSearch}
      /> */}
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
        <NavLink to='/all-data/all-colors'>
          <button
            className='nav-dashboard-btn'
            onClick={() => navigate('/all-data/all-colors')}
          >
            Colores
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
        <NavLink to='/dashboard'>
          <button
            className='nav-dashboard-btn'
            onClick={() => navigate('/dashboard')}
          >
            Dashboard
          </button>
        </NavLink>
      </div>
      <div className='categories'>
        <h2 className='categories-title'>Categorias disponibles</h2>
        {Array.isArray(categories) &&
          categories.map((el) => (
            <div
              key={el.id}
              className='categories-item'
            >
              {el.name}
              <div className='icons'>
                <button onClick={() => handleEditCategories(el.id, el.name)}>
                  <FaPencilAlt />
                </button>
                <button
                  className='delete-color'
                  onClick={() => handleDeleteCategories(el.id)}
                >
                  {<RiDeleteBin6Line />}
                </button>
              </div>
            </div>
          ))}
      </div>
      {showAlert.category && (
        <popups className='pop-ups'>
          <>
            <div className='transparentBackgroundY'></div>
            <div className='alertContainerY'>
              <p className='alertTextY'>Creador de categorías</p>
              <CreateCategory />
              <div className='alertButtonsY'>
                <button onClick={handleCloseAlert}>X</button>
              </div>
            </div>
          </>
        </popups>
      )}
      <button
        type='button'
        onClick={() => {
          handleOpenCategoryCreate();
        }}
        className='mainImage-upload-buttonY '
      >
        Crear categoría
      </button>
    </div>
  );
};

export default AllCategories;
