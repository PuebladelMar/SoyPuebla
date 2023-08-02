import './Landing.css'
// import style from '../landing/Landing.css';
import { NavLink } from 'react-router-dom';

function Landing() {
  return (
    <div className='landing-container'>
      {/* <img src='../../assets/images/landingGif.webp' alt="" className='' /> */}
      <img src='src/assets/images/landingGif.webp' alt="" className='landing-image' />
      
      <NavLink to='/home'>
        <button className='boton-landing'>Ingresar</button>
      </NavLink>
    </div>
  );
}

export default Landing;