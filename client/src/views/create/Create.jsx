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

        <label htmlFor='mainImage'>Main Image: </label>
        <textarea
          type='text'
          name='mainImage'
          placeholder='Main Image'
          required
        />
      </form>
    </div>
  );
};

export default Create;
