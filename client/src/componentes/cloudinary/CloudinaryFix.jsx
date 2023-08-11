import React, { useState, useEffect } from 'react';

const CloudinaryFix = () => {
  const [images, setImages] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState('');

  const handleChange = (e) => {
    setImages(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const upLoadImage = async (e) => {
    e.preventdeafult();
    setIsLoading(true);
    try {
      let imageURL;

      if (
        images &&
        (images.type === 'image/png' || 'image.jpeg' || 'image.jpg')
      ) {
        const image = new FormData();
        image.append('file', images);
        image.append('cloud_name', 'dvmqbow3t');
        image.append('upoad_preset', 'SoyPuebla');

        const response = await fetch(
          'https://api.cloudinary.com/v1_1/dvmqbow3t/image/upload',
          { method: 'POST', body: image }
        );
        const imgData = await response.json();
        imageURL = imgData.url.toString();
        setImagePreview(null);
      }
      alert(imageURL);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <section className='--flex-center'>
      <div>
        <h2>Sube tus imgenes aqui...</h2>
        <div>
          <form
            onSubmit={upLoadImage}
            className='--form-control'
          >
            <p>
              <label>Imagen</label>
              <input
                type='file'
                accept='image/png, image/jpeg'
                name='image'
                onChange={handleChange}
              />
            </p>
            <p>
              {isLoading ? (
                'Cargando...'
              ) : (
                <button
                  type='submit'
                  className='--btn --primary'
                >
                  Subir Imagen
                </button>
              )}
            </p>
          </form>
          <div>
            <div>
              {imagePreview && (
                <img
                  src={imagePreview && imagePreview}
                  alt='profileImage'
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudinaryFix;
