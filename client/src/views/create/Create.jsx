const Create = () => {
  return (
    <div>
      <form>
        <label htmlFor='name'>Nombre: </label>
        <input
          type='string'
          name='name'
          placeholder='Nombre'
          required
        />
        <p>Emulamos error</p>

        <label htmlFor='price'>Precio: </label>
        <input
          type='decimal'
          name='price'
          placeholder='Precio'
          required
        />
        <p>Emulamos error</p>

        <label htmlFor='mainImage'>Imagen Principal: </label>
        <textarea
          type='text'
          name='mainImage'
          placeholder='Main Image'
          required
        />

        <label htmlFor='image'>Imagen: </label>
        <input
          type='json'
          name='image'
          required
        />
        <p>Emulamos error</p>

        <label htmlFor='sale'>Oferta: </label>
        <select
          name='sale'
          type='boolean'
          placeholder='Oferta'
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
        <p>Emulamos error</p>

        <label htmlFor='description'>Descripcion: </label>
        <textarea
          type='text'
          name='description'
          placeholder='Descripcion'
          required
        />
      </form>
    </div>
  );
};

export default Create;
