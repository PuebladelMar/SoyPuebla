import { useEffect, useRef, useState } from 'react';
import './multipleImageUpload.css'


const MutipleUploadWidget = ({ onMultipleUpload }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const [uploadedUrls, setUploadedUrls] = useState([]);

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: 'dvmqbow3t',
        uploadPreset: 'SoyPuebla',
      },
      function (error, result) {
        if (!error && result && result.event === 'success') {
          const uploadedUrl = result.info.secure_url;
          setUploadedUrls([uploadedUrl]);
        }
      }
    );
  }, []);

  useEffect(() => {
    if (uploadedUrls.length > 0) {
      onMultipleUpload(uploadedUrls);
    }
  }, [uploadedUrls, onMultipleUpload]);

  return (
    <div>
      <button
      type='button'
      className="multipleImage-upload-button" 
      onClick={() => widgetRef.current.open()}>Cargar Imagenes</button>
      
    </div>
  );
};

export default MutipleUploadWidget;


