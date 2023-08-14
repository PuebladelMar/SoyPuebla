import { useEffect, useRef, useState } from 'react';

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
          setSecureUrl(result.info.secure_url);
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



