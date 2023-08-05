import './Create.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { postProducts, postColor, getSizes, getCategories, getSeries } from '../../redux/Actions';

const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const color = useSelector((state) => state.colorList);
  const size = useSelector((state) => state.sizesList);
  const categories = useSelector((state) => state.categories);
  const series = useSelector((state) => state.series);

  const [createProduct, setCreateProduct] = useState({
    name: '',
    price: 0,
    mainImage: '',
    image: [],
    sale: false,
    color: [],
    size: [],
    description: '',
    series: [],
    category: [],
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
        image: [],
        sale: false,
        color: [],
        size: [],
        description: '',
        series: [],
        category: [],
      });
    }
  };

  useEffect(() => {
    if (!color.length) {
      dispatch(postColor());
    }
  }, [dispatch, color, createProduct]);

  useEffect(() => {
    if (!size.length) {
      dispatch(getSizes());
    }
  }, [dispatch, size, createProduct]);

  useEffect(() => {
    if (!series.length) {
      dispatch(getSeries());
    }
  }, [dispatch, series, createProduct]);

  useEffect(() => {
    if (!categories.length) {
      dispatch(getCategories());
    }
  }, [dispatch, categories, createProduct]);


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

  const handleSelectSeries = (event) => {
    setCreateProduct((state) => {
      if (event.target.name === 'series') {
        if (!createProduct.series.includes(event.target.value)) {
          return {
            ...state,
            series: [...state.series, event.target.value],
          };
        } else {
          return { ...state, series: [...state.series] };
        }
      }
    });
  };


  const handleSelectCategories = (event) => {
    setCreateProduct((state) => {
      if (event.target.name === 'category') {
        if (!createProduct.category.includes(event.target.value)) {
          return {
            ...state,
            category: [...state.category, event.target.value],
          };
        } else {
          return { ...state, category: [...state.category] };
        }
      }
    });
  };

  // const handleSelectSize = (event) => {
  //   setCreateProduct((state) => {
  //     if (event.target.name === 'size') {
  //       if (!createProduct.size.includes(event.target.value)) {
  //         return {
  //           ...state,
  //           size: [...state.size, event.target.value],
  //         };
  //       } else {
  //         return { ...state, size: [...state.size] };
  //       }
  //     }
  //   });
  // };

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
        {/* <select
          name='size'
          placeholder='Talles'
          defaultValue='def'
          onChange={handleSelectSize}
          required
        >
          <option
            value='def'
            key='def'
            disabled
          >
            Selecciona uno o varios talles.
          </option>
          {size.map((el) => {
            return (
              <option
                value={el.id}
                key={el.id}
              >
                {el.name}
              </option>
            );
          })}
        </select> */}
        <p className='error'>Emulamos error</p>

        <label htmlFor='series'>Coleccion: </label>
        <select
          name='series'
          placeholder='Coleccion'
          defaultValue='def'
          onChange={handleSelectSeries}
          required
        >
          <option
            value='def'
            key='def'
            disabled
          >
            Selecciona uno o varios talles.
          </option>
          {series.map((el) => {
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

        <label htmlFor='category'>Categoria: </label>
        <select
          name='category'
          placeholder='Categoria'
          defaultValue='def'
          onChange={handleSelectCategories}
          required
        >
          <option
            value='def'
            key='def'
            disabled
          >
            Selecciona uno o varios talles.
          </option>
          {categories.map((el) => {
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
