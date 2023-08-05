import './Create.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { postProducts, postColor } from '../../redux/Actions';

const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const color = useSelector((state) => state.colorList);

  const [createProduct, setCreateProduct] = useState({
    name: '',
    price: 0,
    mainImage: '',
    image: [''],
    sale: false,
    color: [''],
    size: [''],
    description: '',
    series: [''],
    category: [''],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCreateProduct((createProduct) => ({
      ...createProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !createProduct.name ||
      !createProduct.mainImage ||
      !createProduct.description
    ) {
      alert('Debes llenar todos los campos');
    } else {
      dispatch(postProducts(createProduct));
      alert('Su producto se creo correctamente');
      setCreateProduct({
        name: '',
        price: 0,
        mainImage: '',
        image: [''],
        sale: false,
        color: [''],
        size: [''],
        description: '',
        series: [''],
        category: [''],
      });
    }
  };

  useEffect(() => {
    if (!color.length) {
      dispatch(postColor());
    }
  }, [dispatch, color, createProduct]);

  const handleSelect = (event) => {
    setCreateProduct((state) => {
      if (event.target.name === 'color') {
        if (!createProduct.color.includes(event.target.value)) {
          return {
            ...state,
            color: [...state.color, event.target.value],
          };
        } else {
          return { ...state, color: [...state.color] };
        }
      }
    });
  };

  return (
    <div className='create-container'>
      {console.log(createProduct)}
      <form
        className='create-form'
        // onSubmit={(event) => handleSubmit(event)}
      >
        <label htmlFor='name'>Nombre: </label>
        <input
          type='string'
          name='name'
          value={createProduct.name}
          placeholder='Nombre'
          required
          className='custom-input'
          onChange={handleChange}
        />
        <p className='error'>Emulamos error</p>

        <label htmlFor='price'>Precio: </label>
        <input
          type='decimal'
          name='price'
          value={createProduct.price}
          placeholder='Precio'
          // required
          className='custom-input'
          onChange={handleChange}
        />
        <p className='error'>Emulamos error</p>

        <label htmlFor='mainImage'>Imagen Principal: </label>
        <textarea
          type='text'
          name='mainImage'
          value={createProduct.mainImage}
          placeholder='Main Image'
          required
          className='custom-textarea'
          onChange={handleChange}
        />
        <p className='error'>Emulamos error</p>

        <label htmlFor='image'>Imagen: </label>
        <input
          type='json'
          name='image'
          value={createProduct.image}
          placeholder='Imagen'
          // required
          className='custom-input'
          onChange={handleChange}
        />
        <p className='error'>Emulamos error</p>

        <label htmlFor='sale'>Oferta: </label>
        <select
          name='sale'
          type='boolean'
          // value={createProduct.sale}
          placeholder='Oferta'
          className='custom-select'
          defaultValue='def'
          onChange={handleChange}
        >
          <option
            value='def'
            key='def'
          >
            False
          </option>
          <option
            value='def'
            key='def1'
          >
            True
          </option>
        </select>
        <p className='error'>Emulamos error</p>

        <label htmlFor='color'>Color: </label>

        <select
          name='color'
          placeholder='Colores'
          defaultValue='def'
          onChange={handleSelect}
          required
        >
          <option
            value='def'
            key='def'
            disabled
          >
            Selecciona uno o varios colores.
          </option>
          {color.map((el) => {
            return (
              <option
                value={el.id}
                key={el.id}
              >
                {el.name}
              </option>
            );
          })}
        </select>
        <p className='error'>Emulamos error</p>

        <label htmlFor='size'>Talle: </label>
        <input
          type='json'
          name='size'
          value={createProduct.size}
          placeholder='Talle'
          // required
          className='custom-input'
          onChange={handleChange}
        />
        <p className='error'>Emulamos error</p>

        <label htmlFor='series'>Coleccion: </label>
        <input
          type='json'
          name='series'
          value={createProduct.series}
          placeholder='Coleccion'
          // required
          className='custom-input'
          onChange={handleChange}
        />
        <p className='error'>Emulamos error</p>

        <label htmlFor='category'>Categoria: </label>
        <input
          type='json'
          name='category'
          value={createProduct.category}
          placeholder='Categoria'
          // required
          className='custom-input'
          onChange={handleChange}
        />
        <p className='error'>Emulamos error</p>

        <label htmlFor='description'>Descripcion: </label>
        <textarea
          type='text'
          name='description'
          placeholder='Descripcion'
          required
          className='custom-textarea'
          onChange={handleChange}
        />
        <p className='error'>Emulamos error</p>
      </form>
      <button
        className='submit-button'
        type='submit'
        onClick={handleSubmit}
      >
        Crear
      </button>
    </div>
  );
};

export default Create;
