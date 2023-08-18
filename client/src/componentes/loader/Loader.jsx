
import "./Loader.css";
import loadingImage from '../../assets/images/tortugaRosa.png'
const Loader = () => {
  return (
   <div className='loadContainer'>
      <div className='loadingBackground' />
      <div className='loaderContent'>
        <div className='loaderText'>Cargando...</div>
        <img className='circle' src= {loadingImage} alt="" />
      </div>
    </div>
  );
};

export default Loader;