import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSeries } from '../../../redux/Actions';
import './AllColecciones.css';

const AllColecciones = () => {
  const series = useSelector((state) => state.series);
  // console.log(series);

  const dispatch = useDispatch();

  const [coleccions, setColeccions] = useState({
    series: [],
  });

  useEffect(() => {
    dispatch(getSeries());
  }, [dispatch, coleccions]);
  console.log(series);

  return (
    <div
      className='coleccion'
      name='series'
      value='name'
    >
      {series.map((el) => (
        <p
          key={el.id}
          value={el.name}
        >
          {el.name}
        </p>
      ))}
    </div>
  );
};

export default AllColecciones;
