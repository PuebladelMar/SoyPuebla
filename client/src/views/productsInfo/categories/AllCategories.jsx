import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../../../redux/Actions';
import { FaPencilAlt } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import './AllCategories.css';
import { NavLink, useNavigate } from 'react-router-dom';

const AllCategories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const navigaste = useNavigate();

  useEffect(() => {
    async function fetchCategories() {
      await dispatch(getCategories());
    }
    fetchCategories();
  }, [dispatch]);

  //   const handleDeleteCategories = async (id) => {
  //     await dispatch(deleteCategory(id));
  //     await dispatch(getCategories());
  //   };

  return (
    <div
      className='categories-main'
      name='series'
      value='name'
    >
        <div className='nav-dashboard'>
      <NavLink to='/all-data/all-products'>
        <button className='nav-dashboard-btn'onClick={() => navigate('/all-data/all-products')}>Productos </button>
      </NavLink>
      <NavLink to='/all-data/all-colors'>
        <button className='nav-dashboard-btn' onClick={() => navigate('/all-data/all-colors')}>Colores</button>
      </NavLink>
      <NavLink to='/all-data/all-colecciones'>
        <button className='nav-dashboard-btn'onClick={() => navigate('/all-data/all-colecciones')}>Colecciones </button>
      </NavLink>
      <NavLink to='/all-data/all-sizes'>
        <button className='nav-dashboard-btn' onClick={() => navigate('/all-data/all-sizes')}>Talles</button>
      </NavLink>
      <NavLink to='/dashboard'>
        <button className='nav-dashboard-btn' onClick={() => navigate('/dashboard')}>Dashboard</button>
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
                <FaPencilAlt />
                <button
                  className='delete-categories'
                  //   onClick={() => handleDeleteCategories(el.id)}
                >
                  {<RiDeleteBin6Line />}
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllCategories;
