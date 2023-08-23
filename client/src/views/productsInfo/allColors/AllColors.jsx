import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  editColors,
  getColor,
  deleteColor,
  getColorByName,
} from '../../../redux/Actions';
import './allColors.css';
import { FaPencilAlt } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import CreateColor from '../../create/createColor/createColor';
import SearchBar from '../../../componentes/searchBar/SearchBar';
import FolderIcon from '@mui/icons-material/Folder';
import Swal from 'sweetalert2';
// import AllData from '../AllData';
import { NavLink, useNavigate } from 'react-router-dom';

const AllColors = () => {
  const colors = useSelector((state) => state.colorList);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState({});
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (searchValue === '') {
        await dispatch(getColor());
      } else {
        await dispatch(getColorByName(searchValue));
      }
    };

    fetchData();
  }, [dispatch, searchValue]);

  const handleCloseAlert = (event) => {
    setShowAlert({});
    event.preventDefault();
  };

  const handleEditColors = async (id, name, codHex) => {
    const updatedName = prompt('Enter new name', name);
    if (updatedName) {
      await dispatch(editColors(id, updatedName, codHex));
      dispatch(getColor());
    }
  };
  const handleDeleteColors = async (id) => {
    await dispatch(deleteColor(id));
    await dispatch(getColor());
  };
  const handleOpenColorCreate = (event) => {
    setShowAlert({ color: true });
    event.preventDefault();
  };

  const handlerEventSearch = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  const handlerSubmitSearch = (event) => {
    event.preventDefault();
  };
  return (
    <div className='main-container'>
      <SearchBar
        handlerEventSearch={handlerEventSearch}
        handlerSubmitSearch={handlerSubmitSearch}
      />
      <div className='colors'>
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
              {' '}
              Series
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
        <h2 className='colores-title'>Colores disponibles</h2>
        {Array.isArray(colors) &&
          colors.map((color) => (
            <div
              key={color.id}
              className='color-item'
            >
              <div className='color-content'>
                <p className='color-name'>{color.name}</p>
                <div
                  className='color-circle'
                  style={{ backgroundColor: color.codHex }}
                ></div>
              </div>
              <div className='icons'>
                <button
                  className='edit-color'
                  onClick={() =>
                    handleEditColors(color.id, color.name, color.codHex)
                  }
                >
                  <FaPencilAlt />
                </button>
                <button
                  className='delete-color'
                  onClick={() => handleDeleteColors(color.id)}
                >
                  <RiDeleteBin6Line />
                </button>
              </div>
            </div>
          ))}
      </div>
      {showAlert.color && (
        <popups className='pop-ups'>
          <>
            <div className='transparentBackgroundY'></div>

            <div className='alertContainerY'>
              <p className='alertTextY'>Creador de color</p>
              <CreateColor />
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
          handleOpenColorCreate();
        }}
        className='mainImage-upload-buttonY '
      >
        Crear color
      </button>
    </div>
  );
};

export default AllColors;
