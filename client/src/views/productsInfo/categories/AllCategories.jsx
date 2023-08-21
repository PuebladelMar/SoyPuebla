import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteCategories,
  getCategories,
  putCategories,
} from '../../../redux/Actions';
import { FaPencilAlt } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import './AllCategories.css';

const AllCategories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchCategories() {
      await dispatch(getCategories());
    }
    fetchCategories();
  }, [dispatch]);

  const handleDeleteCategories = async (id) => {
    await dispatch(deleteCategories(id));
    await dispatch(getCategories());
  };

  const handleEditCategories = async (id, name) => {
    const updatedName = prompt('Enter new name', name);
    if (updatedName) {
      await dispatch(putCategories(id, updatedName));
      dispatch(getCategories());
    }
  };
  return (
    <div
      className='categories-main'
      name='series'
      value='name'
    >
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
                  className='delete-categories'
                  onClick={() => handleDeleteCategories(el.id)}
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
