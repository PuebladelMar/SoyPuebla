import React from 'react';
import Dropzone from 'react-dropzone';
import { Container } from 'reactstrap';
import { useState } from 'react';
import './Cloudinary.css';
import axios from 'axios';

const Cloudinary = (props) => {
  const [image, setImage] = useState({ array: [] });
  const [Loading, setLoading] = useState('');

  const handledrop = (files) => {
    const upLoaders = files.map((file) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('tags', 'codeindfuse, medium, gist');
      formData.append('upload_preset', 'SoyPuebla');
      formData.append('api_key', '552124565222155');
      formData.append('timestamp', (Date.now() / 1000) | 0);
      setLoading('true');
      return axios
        .post(
          'https://api.cloudinary.com/v1_1/dvmqbow3t/image/upload',
          formData,
          {
            headers: { 'x-Requested-With': 'XMLHttpRequest' },
          }
        )
        .then((response) => {
          const data = response.data;
          const fileUrl = data.secure_url;
          let specificArrayInObject = image.array;
          specificArrayInObject.push(fileUrl);
          const newObj = { ...image, specificArrayInObject };
          setImage(newObj);
          console.log(image);
        });
    });
    axios.all(upLoaders).then(() => {
      setLoading('false');
    });
  };


  const ImagePreview = () =>{
    if(Loading === "true"){
        return <h3>Cargando imagenes...</h3>
    } 
    if(Loading === "false"){
        return (
            <h3>
                {image.array.Length <= 0 ? "No hay imagenes" : image.array.map(item, index) => (
                    <img
                    alt='Imagen'
                    style={{width="125px", height="70px"}}
                    src={item}/>
                )}
            </h3>
        )
    }
  }

  return (
    <div>
      <h1 className='text-center'>Cloudinary</h1>
      <Container>
        <Dropzone
          className='dropzone'
          onChange={(e) => setImage(e.target.value)}
          value={image}
          onDrop={handledrop}
        >
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <span>loguito</span>
                <p>Coloca tus imagenes aqui</p>
              </div>
            </section>
          )}
        </Dropzone>
      </Container>
    </div>
  );
};

export default Cloudinary;
