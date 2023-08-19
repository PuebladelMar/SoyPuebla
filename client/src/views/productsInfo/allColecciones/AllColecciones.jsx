import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSeries, deleteSeries } from '../../../redux/Actions';
import './AllColecciones.css';

const AllColecciones = () => {
  const series = useSelector((state) => state.series);
  const dispatch = useDispatch();

  const [coleccions, setColeccions] = useState({
    series: [],
  });

  useEffect(() => {
    dispatch(getSeries());
  }, [dispatch, coleccions]);
  console.log(series);

  const handleDeleteSeries = (id) => {
    dispatch(deleteSeries(id));
    setColeccions({
      ...coleccions,
      series: coleccions.series.filter((el) => el !== event),
    });
  };

  return (
    <div
      className='coleccion'
      name='series'
      value='name'
    >
      {series.map((el) => (
        <div
          key={el.id}
          // value={el.name}
        >
          {el.name}
          <button onClick={(el) => handleDeleteSeries(el.id)}>X</button>
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
  );
};

export default AllColecciones;