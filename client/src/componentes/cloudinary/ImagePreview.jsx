import React from 'react';

const ImagePreview = ({ image, handleDelete }) => {
  if (image.length === 0) {
    return <h3>No hay imágenes</h3>;
  }

  return (
    <div>
      {image.map((imageUrl, index) => (
        <div key={index}>
          <img
            alt='Imagen'
            style={{
              width: '125px',
              height: '70px',
              objectFit: 'cover',
            }}
            src={imageUrl}
          />
          <button onClick={() => handleDelete(imageUrl)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default ImagePreview;
