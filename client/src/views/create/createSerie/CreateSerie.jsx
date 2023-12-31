import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSeries } from '../../../redux/Actions';
import axios from 'axios';
import serieValidations from './serieValidations';
import '../createColor/createColor.css';

const CreateSerie = () => {
  const dispatch = useDispatch();
  const series = useSelector((state) => state.series);
  let [count, setCount] = useState(0);
  useEffect(() => {
    dispatch(getSeries());
  }, [count]);

  let [createSerie, setCreateSerie] = useState({
    name: '',
    image: 'image.png',
  });
  const [errors, setErrors] = useState({
    disableButton: true,
  });

  const handleChange = (event) => {
    setCreateSerie({ ...createSerie, [event.target.name]: event.target.value });
    setErrors(
      serieValidations({
        ...createSerie,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!createSerie.name) {
      alert('Debes llenar el nombre');
    } else {
      try {
        await axios.post('/products/series', createSerie);
        setCount(count + 1);
        setCreateSerie({
          name: '',
          image: 'image.png',
        });
        setErrors({
          disableButton: true,
        });
      } catch (error) {
        setErrors({ error: `La serie ${createSerie.name} ya esta creada` });
      }
    }
  };

  return (
    <div className='create-main-containerX'>
      <div className='create-containerX'>
        <form
          onSubmit={handleSubmit}
          className='create-formX'
        >
          <label htmlFor='name'>Nombre:</label>
          <input
            type='text'
            name='name'
            value={createSerie.name}
            required
            placeholder='Nombre'
            className='custom-inputX'
            onChange={handleChange}
          />
          <p className='error'>{errors.name}</p>
          <button
            type='submit'
            className='submit-buttonzX'
            disabled={Object.keys(errors).length === 0 ? false : true}
          >
            Crear
          </button>
          <p className='error'>{errors.error}</p>
          <div className='createdElementsListContainer'>
            <h2>Series Creadas:</h2>
            <ol>
              {series.map((serie) => (
                <li>{serie.name}</li>
              ))}
            </ol>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSerie;
