// import React from 'react';
// import Dropzone from 'react-dropzone';
// import { Container } from 'reactstrap';
// import { useState } from 'react';
// import './Cloudinary.css';
// import axios from 'axios';

// const Cloudinary = (props) => {
//   const [image, setImage] = useState({ array: [] });
//   const [Loading, setLoading] = useState('');

//   const handledrop = (files) => {
//     const upLoaders = files.map((file) => {
//       const formData = new FormData();
//       formData.append('file', file);
//       formData.append('tags', 'codeindfuse, medium, gist');
//       formData.append('upload_preset', 'SoyPuebla');
//       formData.append('api_key', '552124565222155');
//       formData.append('timestamp', (Date.now() / 1000) | 0);
//       setLoading('true');
//       return axios
//         .post(
//           'https://api.cloudinary.com/v1_1/dvmqbow3t/image/upload',
//           formData,
//           {
//             headers: { 'x-Requested-With': 'XMLHttpRequest' },
//           }
//         )
//         .then((response) => {
//           const data = response.data;
//           const fileUrl = data.secure_url;
//           let specificArrayInObject = image.array;
//           specificArrayInObject.push(fileUrl);
//           const newObj = { ...image, specificArrayInObject };
//           setImage(newObj);
//           console.log(image);
//         });
//     });
//     axios.all(upLoaders).then(() => {
//       setLoading('false');
//     });
//   };

//   const ImagePreview = () => {
//     if (Loading === "true") {
//       return <h3>Cargando imágenes...</h3>;
//     }
//     if (Loading === "false") {
//       return (
//         <div>
//           <h3>
//             {image.array.length <= 0
//               ? "No hay imágenes"
//               : image.array.map((item, index) => (
//                   <img
//                     key={index}
//                     alt="Imagen"
//                     style={{ width: "125px", height: "70px", objectFit: "cover" }}
//                     src={item}
//                   />
//                 ))}
//           </h3>
//         </div>
//       );
//     }
//   };

//   return (
//     <div>
//       <h1 className='text-center'>Cloudinary</h1>
//       <Container>
//         <Dropzone
//           className='dropzone'
//           onChange={(e) => setImage(e.target.value)}
//           value={image}
//           onDrop={handledrop}
//         >
//           {({ getRootProps, getInputProps }) => (
//             <section>
//               <div {...getRootProps({ className: 'dropzone' })}>
//                 <input {...getInputProps()} />
//                 <span>loguito</span>
//                 <p>Coloca tus imagenes aqui</p>
//               </div>
//             </section>
//           )}
//         </Dropzone>
//         {ImagePreview()}
//       </Container>
//     </div>
//   );
// };

// export default Cloudinary;

import React from 'react';
import Dropzone from 'react-dropzone';
import { Button, Container } from 'reactstrap';
import { useState } from 'react';
import './Cloudinary.css';
import axios from 'axios';

const Cloudinary = (props) => {
  const [image, setImage] = useState({ array: [] });
  const [loading, setLoading] = useState('');

  const handledrop = async (files) => {
    setLoading('true');

    const upLoaders = await Promise.all(
      files.map(async (file) => {
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

    setLoading('false');
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
      <h1 className='text-center'>Cloudinary</h1>
      <Container>
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

// const ImagePreview = () => {
//   if (loading === 'true') {
//     return (
//       <div>
//         <h3>Cargando imágenes...</h3>
//       </div>
//     );
//   }

//   if (loading === 'false') {
//     return (
//       <div>
//         <h3>
//           {image.array.length <= 0
//             ? 'No hay imágenes'
//             : image.array.map((item, index) => (
//                 <img
//                   key={index}
//                   alt='Imagen'
//                   style={{
//                     width: '125px',
//                     height: '70px',
//                     objectFit: 'cover',
//                   }}
//                   src={item}
//                 />
//               ))}
//         </h3>
//       </div>
//     );
//   }
// };

//   return image.length > 0 ? (
//     image.map((img) => (
//       <div key={img}>
//         <p>{img}</p>
//         <button onClick={() => /handle}>X</button>
//       </div>
//     ))
//   ) : (
//     <p></p>
//   );

// ))}

//   return (
//     <div>
//       <h1 className='text-center'>Cloudinary</h1>
//       <Container>
//         <Dropzone onDrop={handledrop}>
//           {({ getRootProps, getInputProps }) => (
//             <section>
//               <div {...getRootProps({ className: 'dropzone' })}>
//                 <input {...getInputProps()} />
//                 <span>loguito</span>
//                 <p>Coloca tus imágenes aquí</p>
//                 <br></br>
//               </div>
//             </section>
//           )}
//         </Dropzone>
//         <div>
//           {ImagePreview()}
//           {/* <button onClick={upLoaders}></button> */}
//         </div>
//       </Container>
//     </div>
//   );
// };
