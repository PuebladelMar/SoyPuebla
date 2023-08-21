import './AllTalles.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSizes } from '../../../redux/Actions';
import { FaPencilAlt } from 'react-icons/fa';
// import { RiDeleteBin6Line } from 'react-icons/ri';

const AllTalles = () => {
  const sizesList = useSelector((state) => state.sizesList);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchSizes() {
      await dispatch(getSizes());
    }
    fetchSizes();
  }, [dispatch]);

  return (
    <div
      className='coleccion-main'
      name='series'
      value='name'
    >
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
                <FaPencilAlt />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllTalles;
