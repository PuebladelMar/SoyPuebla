import './Landing.css';
// import style from '../landing/Landing.css';
import { NavLink } from 'react-router-dom';

function Landing() {
  return (
    <div className='landing-container'>
      <img
        src='src/assets/images/1.png'
        alt=''
        className='landing-image'
      />

      <NavLink to='/home'>
        <button className='boton-landing'>Ingresar</button>
      </NavLink>
    </div>
  );
}

export default Landing;
