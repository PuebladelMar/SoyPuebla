import './Create.css';
import { NavLink } from 'react-router-dom';

const Create = () => {
  return (
    <div className='create-container'>
      <form className='create-form'>
        <label htmlFor='name'>Nombre: </label>
        <input
          type='string'
          name='name'
          placeholder='Nombre'
          required
          className='custom-input'
        />
        <p className='error'>Emulamos error</p>

        <label htmlFor='price'>Precio: </label>
        <input
          type='decimal'
          name='price'
          placeholder='Precio'
          required
          className='custom-input'
        />
        <p className='error'>Emulamos error</p>

        <label htmlFor='mainImage'>Imagen Principal: </label>
        <textarea
          type='text'
          name='mainImage'
          placeholder='Main Image'
          required
          className='custom-textarea'
        />
        <p className='error'>Emulamos error</p>

        <label htmlFor='image'>Imagen: </label>
        <input
          type='json'
          name='image'
          placeholder='Imagen'
          required
          className='custom-input'
        />
        <p className='error'>Emulamos error</p>

        <label htmlFor='sale'>Oferta: </label>
        <select
          name='sale'
          type='boolean'
          placeholder='Oferta'
          className='custom-select'
        >
          <option
            value='def'
            key='def'
          >
            False
          </option>
          <option
            value='def'
            key='def'
          >
            True
          </option>
        </select>
        <p className='error'>Emulamos error</p>

        <label htmlFor='description'>Descripcion: </label>
        <textarea
          type='text'
          name='description'
          placeholder='Descripcion'
          required
          className='custom-textarea'
        />
        <p className='error'>Emulamos error</p>
      </form>
      <button className='submit-button'>Crear</button>
    </div>
  );
};

export default Create;
