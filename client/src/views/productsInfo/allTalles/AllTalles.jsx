import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSizes } from '../../../redux/Actions';
import './AllTalles.css';

const AllTalles = () => {
  const sizes = useSelector((state) => state.sizesList);

  const dispatch = useDispatch();

  const [allSizes, setSizes] = useState({
    sizes: [],
  });

  useEffect(() => {
    dispatch(getSizes());
  }, [dispatch, allSizes]);
  console.log(sizes);
  // console.log(series);

  return (
    <div
      className='coleccion'
      name='sizes'
      value='name'
    >
      {sizes.map((el) => (
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

export default AllTalles;
