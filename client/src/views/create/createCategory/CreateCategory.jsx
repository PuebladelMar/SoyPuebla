import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../../redux/Actions';
import axios from 'axios';
import categoryValidations from './categoryValidations';
import '../createColor/createColor.css';

const CreateCategory = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  let [count, setCount] = useState(0);
  useEffect(() => {
    dispatch(getCategories());
  }, [count]);

  let [createCategory, setCreateCategory] = useState({
    name: '',
  });
  const [errors, setErrors] = useState({
    disableButton: true,
  });

  const handleChange = (event) => {
    setCreateCategory({
      ...createCategory,
      [event.target.name]: event.target.value,
    });
    setErrors(
      categoryValidations({
        ...createCategory,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!createCategory.name) {
      alert('Debes llenar el nombre');
    } else {
      try {
        await axios.post('/products/category', createCategory);
        setCount(count + 1);

        setCreateCategory({
          name: '',
        });
        setErrors({
          disableButton: true,
        });
      } catch (error) {
        setErrors({
          error: `La categoria ${createCategory.name} ya esta creada`,
        });
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
            value={createCategory.name}
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
            <h2>Categorias Creadas:</h2>
            <ol>
              {categories.map((category) => (
                <li>{category.name}</li>
              ))}
            </ol>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCategory;
