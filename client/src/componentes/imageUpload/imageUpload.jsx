import { useEffect, useRef } from 'react';
import './imageUpload.css'


const UploadWidget = ({ onUpload }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: 'dvmqbow3t',
        uploadPreset: 'SoyPuebla',
      },
      function (error, result) {
        if (!error && result && result.event === 'success') {
          onUpload(result.info.secure_url); 
        }
      }
    );
  }, [onUpload]);
    
  return (
    <div>
      <button 
      className="mainImage-upload-button" 
      onClick={() => widgetRef.current.open()}>Cargar Imagen Principal</button>
    </div>
  );
};


export default UploadWidget;