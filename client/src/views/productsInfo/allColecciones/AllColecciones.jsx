import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSeries, deleteSeries } from '../../../redux/Actions';
import { FaPencilAlt } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import './AllColecciones.css';
import { NavLink, useNavigate } from 'react-router-dom';

const AllColecciones = () => {
  const series = useSelector((state) => state.series);
  const dispatch = useDispatch();

  const navigate = useNavigate()
  // const [coleccions, setColeccions] = useState({
  //   series: [],
  // });

  useEffect(() => {
    async function fetchSeries() {
      await dispatch(getSeries());
    }
    fetchSeries();
  }, [dispatch]);
  console.log(series);

  const handleDeleteSeries = async (id) => {
    await dispatch(deleteSeries(id));
    await dispatch(getSeries());
  };

  return (
    <div
      className='coleccion-main'
      name='series'
      value='name'
    >
       <div className='nav-dashboard'>
      <NavLink to='/all-data/all-products'>
        <button className='nav-dashboard-btn'onClick={() => navigate('/all-data/all-products')}>Productos </button>
      </NavLink>
      <NavLink to='/all-data/all-colors'>
        <button className='nav-dashboard-btn' onClick={() => navigate('/all-data/all-colors')}>Colors</button>
      </NavLink>
      <NavLink to='/all-data/all-sizes'>
        <button className='nav-dashboard-btn' onClick={() => navigate('/all-data/all-sizes')}>Talles</button>
      </NavLink>
      <NavLink to='/all-data/all-categories'>
        <button className='nav-dashboard-btn' onClick={() => navigate('/all-data/all-categories')}>Categorias</button>
      </NavLink>
      <NavLink to='/dashboard'>
        <button className='nav-dashboard-btn' onClick={() => navigate('/dashboard')}>Dashboard</button>
      </NavLink>
      </div>
      <div className='coleccion'>
        <h2 className='coleccion-title'>Colecciones disponibles</h2>
        {Array.isArray(series) &&
          series.map((el) => (
            <div
              key={el.id}
              className='coleccion-item'
            >
              {el.name}
              <div className='icons'>
                <FaPencilAlt />

                <button
                  className='delete-coleccion'
                  onClick={() => handleDeleteSeries(el.id)}
                >
                  {<RiDeleteBin6Line />}
                </button>
              </div>
            </div>
          ))}
        {/* <p>
      
        {coleccions?.series.length > 0 ? (
          coleccions?.series.map((ser) => (
            <div key={ser}>
              <p>{ser}</p>
              </div>
              ))
        ) : (
          <p></p>
          )}
        </p> */}
      </div>
    </div>
  );
};

export default AllColecciones;
