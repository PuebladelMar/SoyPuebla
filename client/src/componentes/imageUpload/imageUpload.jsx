// import { useEffect, useRef } from 'react'

// const UploadWidget = () => {
// const cloudinaryRef = useRef();
// const widgetRef = useRef();

// useEffect(() => {
//     cloudinaryRef.current = window.cloudinary;
//     widgetRef.current = cloudinaryRef.current.createUploadWidget({
//         cloudName:'dvmqbow3t',
//         uploadPreset: 'SoyPuebla',
//     }, function (error, result) {
//         console.log(result);
//         console.log(result.info.secure_url)
//     })
// }, [])
// return (
//     <button onClick={() => widgetRef.current.open()}>
//         Upload
//     </button>
// )

// }

// export default UploadWidget;


import React, { useEffect, useRef, useState } from 'react';

const UploadWidget = ({ onUpload }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const [secureUrl, setSecureUrl] = useState(null);

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: 'dvmqbow3t',
        uploadPreset: 'SoyPuebla',
      },
      function (error, result) {
        if (!error && result && result.event === 'success') {
            console.log(result)
          setSecureUrl(result.info.secure_url);

          // You can also call a callback here to pass the secure_url to a parent component
          if (onUpload) {
            onUpload(result.info.secure_url);
          }
        }
      }
    );
  }, [onUpload]);

  return (
    <div>
      <button onClick={() => widgetRef.current.open()}>Upload</button>
      
    </div>
  );
};

export default UploadWidget;



