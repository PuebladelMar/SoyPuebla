import React from 'react';
import Dropzone from 'react-dropzone';
import { Container } from 'reactstrap';
import { useState } from 'react';
import './Cloudinary.css';
import axios from 'axios';

const Cloudinary = (props) => {
  const [image, setImage] = useState({ array: [] });
  const [loading, setLoading] = useState('');

  const handledrop = (acceptedFiles) => {
    setImage(acceptedFiles);
  };

  const handlesubmit = async (event) => {
    s;
    event.preventDefault();

    const upLoaders = await Promise.all(
      image.array.map(async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('tags', 'codeindfuse, medium, gist');
        formData.append('upload_preset', 'SoyPuebla');
        formData.append('api_key', '552124565222155');
        formData.append('timestamp', Math.floor(Date.now() / 1000));

        try {
          const response = await axios.post(
            'https://api.cloudinary.com/v1_1/dvmqbow3t/image/upload',
            formData,
            {
              headers: { 'x-Requested-With': 'XMLHttpRequest' },
            }
          );

          const data = response.data;
          const fileUrl = data.secure_url;

          setImage((prevImage) => ({
            array: [...prevImage.array, fileUrl],
          }));
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      })
    );

    setLoading('true');
  };

  const handleDelete = (imageUrlToDelete) => {
    setImage((prevImage) => ({
      array: prevImage.array.filter(
        (imageUrl) => imageUrl !== imageUrlToDelete
      ),
    }));
  };

  return (
    <div>
      <h1 className='text-center'>Imagen Principal</h1>
      <Container onSubmit={handlesubmit}>
        <Dropzone onDrop={handledrop}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <span>loguito</span>
                <p>Coloca tus imágenes aquí</p>
                <br />
              </div>
            </section>
          )}
        </Dropzone>
        <button type='submit'>Subir imagenes</button>

        <div>
          {loading === 'true' ? (
            <h3>Cargando imágenes...</h3>
          ) : (
            <div>
              {image.array.length <= 0 ? (
                <h3>No hay imágenes</h3>
              ) : (
                image.array.map((imageUrl, index) => (
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

                    <button onClick={() => handleDelete(imageUrl)}>
                      Eliminar
                    </button>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Cloudinary;
