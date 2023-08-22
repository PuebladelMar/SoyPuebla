import './AllTalles.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSizes, putSizes } from '../../../redux/Actions';
import { FaPencilAlt } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
// import { RiDeleteBin6Line } from 'react-icons/ri';

const AllTalles = () => {
  const sizesList = useSelector((state) => state.sizesList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchSizes() {
      await dispatch(getSizes());
    }
    fetchSizes();
  }, [dispatch]);

  const handleEditSizes = async (id, name) => {
    const updatedName = prompt('Enter new name', name);
    if (updatedName) {
      await dispatch(putSizes(id, updatedName));
      dispatch(getSizes());
    }
  };

  return (
    <div
      className='coleccion-main'
      name='series'
      value='name'
    >
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
    </div>
  );
};

export default AllTalles;
