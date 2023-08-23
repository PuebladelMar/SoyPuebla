import './AllTalles.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSizes, putSizes } from '../../../redux/Actions';
import { FaPencilAlt } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import CreateSize from '../../create/createSize/createSize';
// import SearchBar from '../../../componentes/searchBar/SearchBar';
// import { RiDeleteBin6Line } from 'react-icons/ri';

const AllTalles = () => {
  const sizesList = useSelector((state) => state.sizesList);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState({});
  // const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getSizes());
    };

    fetchData();
  }, [dispatch]);

  const handleEditSizes = async (id, name) => {
    const updatedName = prompt('Enter new name', name);
    if (updatedName) {
      await dispatch(putSizes(id, updatedName));
      dispatch(getSizes());
    }
  };

  const handleCloseAlert = (event) => {
    setShowAlert({});
    event.preventDefault();
  };

  const handleOpenSizeCreate = (event) => {
    setShowAlert({ size: true });
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
      className='coleccion-main'
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
      <div className='coleccion'>
        <h2 className='coleccion-title'>Talles disponibles</h2>
        {Array.isArray(sizesList) &&
          sizesList.map((el) => (
            <div
              key={el.id}
              className='talles-item'
            >
              {el.name}
              <div className='icons'>
                <button onClick={() => handleEditSizes(el.id, el.name)}>
                  <FaPencilAlt />
                </button>
              </div>
            </div>
          ))}
      </div>
      {showAlert.size && (
        <popups className='pop-ups'>
          <>
            <div className='transparentBackgroundY'></div>

            <div className='alertContainerY'>
              <p className='alertTextY'>Creador de talle</p>
              <CreateSize />
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
          handleOpenSizeCreate();
        }}
        className='mainImage-upload-buttonY '
      >
        Crear Talle
      </button>
    </div>
  );
};

export default AllTalles;
