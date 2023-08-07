import './Create.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  postProducts,
  postColor,
  getSizes,
  getCategories,
  getSeries,
} from '../../redux/Actions';

const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const color = useSelector((state) => state.colorList);
  const size = useSelector((state) => state.sizesList);
  const categories = useSelector((state) => state.categories);
  const series = useSelector((state) => state.series);
  // const [errors, setErrors] = useState({});

  // const Validations = (createProduct) => {
  //   let errors = {};

  //   if (!createProduct.name)
  //     errors.name = 'Debes proveer un nombre al producto.';
  //   else if (createProduct.name.length > 30)
  //     errors.name = 'Demasiados caracteres.';
  //   else if (
  //     /[^a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+/g.test(
  //       createProduct.name
  //     )
  //   )
  //     errors.name = 'Nombre debe tener solo letras.';

  //   if (!createProduct.description) {
  //     errors.description = 'Descripcion vacia.';
  //   } else if (createProduct.description.length > 300) {
  //     errors.description = 'Demasiados caracteres.';
  //   }

  //   if (!createProduct.price) {
  //     errors.price = 'Sin precio';
  //   } else if (createProduct.price < 0) {
  //     errors.createProduct = 'No puede ser un numero negativo';
  //   }

  //   if (createProduct.color.length === 0) {
  //     errors.color = 'Selecciona por lo menos un color';
  //   }

  //   if (
  //     !createProduct.mainImage &&
  //     !createProduct.mainImage.match(
  //       /(http[s]*:\/\/)([a-z\-_0-9/.]+)\.([a-z.]{2,3})\/([a-z0-9\-_/._~:?#[\]@!$&'()*+,;=%]*)([a-z0-9]+\.)(jpg|jpeg|png|gif)/i
  //     )
  //   ) {
  //     errors.mainImage = 'Invalid image, must be a URL';
  //   }

  //   if (createProduct.size.length === 0) {
  //     errors.size = 'Selecciona por lo menos un talle';
  //   }

  //   if (createProduct.category.length === 0) {
  //     errors.category = 'Seleccione una categoría';
  //   }
  //   if (createProduct.series.length === 0) {
  //     errors.series = 'Seleccione una coleccion';
  //   }
  //   return errors;
  // };

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

  useEffect(() => {
    // if (Validations(createProduct)) {
    //   setErrors(Validations(createProduct));
    // }

    if (!color.length) {
      dispatch(postColor());
    }
  }, [dispatch, color, createProduct]);

  useEffect(() => {
    // if (Validations(createProduct)) {
    //   setErrors(Validations(createProduct));
    // }

    if (!size.length) {
      dispatch(getSizes());
    }
  }, [dispatch, size, createProduct]);

  useEffect(() => {
    // if (Validations(createProduct)) {
    //   setErrors(Validations(createProduct));
    // }

    if (!series.length) {
      dispatch(getSeries());
    }
  }, [dispatch, series, createProduct]);

  useEffect(() => {
    // if (Validations(createProduct)) {
    //   setErrors(Validations(createProduct));
    // }

    if (!categories.length) {
      dispatch(getCategories());
    }
  }, [dispatch, categories, createProduct]);

  const handleChange = (event) => {
    // const { name, value } = event.target;
    setCreateProduct({
      ...createProduct,
      [event.target.name]: event.target.value,
    });
    // setErrors(
    //   Validations({
    //     ...createProduct,
    //     [event.target.name]: event.target.value,
    //   })
    // );
    // };
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !createProduct.name ||
      !createProduct.mainImage ||
      !createProduct.description ||
      !createProduct.price ||
      !createProduct.category.length === 0 ||
      !createProduct.series.length === 0 ||
      !createProduct.color.length === 0 ||
      !createProduct.size.length === 0
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
    // setErrors(
    //   Validations({
    //     ...createProduct,
    //     [event.target.name]: event.target.value,
    //   })
    // );
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
    // setErrors(
    //   Validations({
    //     ...createProduct,
    //     [event.target.name]: event.target.value,
    //   })
    // );
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
    // setErrors(
    //   Validations({
    //     ...createProduct,
    //     [event.target.name]: event.target.value,
    //   })
    // );
  };

  const handleSelectSize = (event) => {
    setCreateProduct((state) => {
      if (event.target.name === 'size') {
        if (!createProduct.size.includes(event.target.value)) {
          return {
            ...state,
            size: [...state.size, event.target.value],
          };
        } else {
          return { ...state, size: [...state.size] };
        }
      }
    });
    // setErrors(
    //   Validations({
    //     ...createProduct,
    //     [event.target.name]: event.target.value,
    //   })
    // );
  };

  const handleDeleteColor = (event) => {
    setCreateProduct({
      ...createProduct,
      color: createProduct.color.filter((el) => el !== event),
    });
  };

  const handleDeleteSize = (event) => {
    setCreateProduct({
      ...createProduct,
      size: createProduct.size.filter((el) => el !== event),
    });
  };

  const handleDeleteCategories = (event) => {
    setCreateProduct({
      ...createProduct,
      category: createProduct.category.filter((el) => el !== event),
    });
  };

  const handleDeleteSeries = (event) => {
    setCreateProduct({
      ...createProduct,
      series: createProduct.series.filter((el) => el !== event),
    });
  };

  return (
    <div className='create-container'>
      <form className='create-form'>
        <label htmlFor='name'>Nombre: </label>
        <input
          type='string'
          name='name'
          value={createProduct.name}
          placeholder='Nombre'
          required
          className='custom-input'
          onChange={(event) => handleChange(event)}
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
        {/* <p className='error'>Emulamos error</p> */}

        <label htmlFor='sale'>Oferta: </label>
        <select
          name='sale'
          className='custom-select'
          defaultValue={createProduct.sale} // Establece el valor predeterminado correctamente
          onChange={handleChange}
        >
          <option
            value={false}
            key='def'
          >
            False
          </option>
          <option
            value={true}
            key='def1'
          >
            True
          </option>
        </select>
        {/* <p className='error'>Emulamos error</p> */}

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
                value={el.name}
                key={el.id}
              >
                {el.name}
              </option>
            );
          })}
        </select>
        <p className='error'>Emulamos error</p>

        <div>
          {createProduct.color.length > 0 ? (
            createProduct.color.map((col) => (
              <div key={col}>
                <p>{col}</p>
                <button onClick={() => handleDeleteColor(col)}>X</button>
              </div>
            ))
          ) : (
            <p className='no-dietTypes'>No hay colores seleccionados.</p>
          )}
        </div>

        <label htmlFor='size'>Talle: </label>
        <select
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
                value={el.name}
                key={el.id}
              >
                {el.name}
              </option>
            );
          })}
        </select>
        <p className='error'>Emulamos error</p>

        <div>
          {createProduct.size.length > 0 ? (
            createProduct.size.map((si) => (
              <div key={si}>
                <p>{si}</p>
                <button onClick={() => handleDeleteSize(si)}>X</button>
              </div>
            ))
          ) : (
            <p className='no-dietTypes'>No hay talles seleccionados.</p>
          )}
        </div>

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
            Selecciona coleccion.
          </option>
          {series.map((el) => {
            return (
              <option
                value={el.name}
                key={el.id}
              >
                {el.name}
              </option>
            );
          })}
        </select>
        <p className='error'>Emulamos error</p>

        <div>
          {createProduct.series.length > 0 ? (
            createProduct.series.map((ser) => (
              <div key={ser}>
                <p>{ser}</p>
                <button onClick={() => handleDeleteSeries(ser)}>X</button>
              </div>
            ))
          ) : (
            <p>No hay coleccion seleccionada.</p>
          )}
        </div>

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
                value={el.name}
                key={el.id}
              >
                {el.name}
              </option>
            );
          })}
        </select>
        <p className='error'>Emulamos error</p>

        <div>
          {createProduct.category.length > 0 ? (
            createProduct.category.map((cat) => (
              <div key={cat}>
                <p>{cat}</p>
                <button onClick={() => handleDeleteCategories(cat)}>X</button>
              </div>
            ))
          ) : (
            <p className='no-dietTypes'>No hay categoria seleccionada.</p>
          )}
        </div>

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
      <div className='div-button'>
        <button
          className='submit-button'
          type='submit'
          onClick={handleSubmit}
        >
          Crear
        </button>
      </div>
    </div>
  );
};

export default Create;
