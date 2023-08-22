import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSeries, deleteSeries, putSeries } from '../../../redux/Actions';
import { FaPencilAlt } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import './AllColecciones.css';

const AllColecciones = () => {
  const series = useSelector((state) => state.series);
  const dispatch = useDispatch();

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

  const handleEditSeries = async (id, name, image) => {
    const updatedName = prompt('Enter new name', name);
    if (updatedName) {
      await dispatch(putSeries(id, updatedName, image));
      dispatch(getSeries());
    }
  };

  return (
    <div
      className='coleccion-main'
      name='series'
      value='name'
    >
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
                <button
                  onClick={() => handleEditSeries(el.id, el.name, el.image)}
                >
                  <FaPencilAlt />
                </button>

                <button
                  className='delete-coleccion'
                  onClick={() => handleDeleteSeries(el.id)}
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

export default AllColecciones;
