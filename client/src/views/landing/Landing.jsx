import landing from '../../assets/images/landing.gif';
import style from '../landing/Landig.css';
import { NavLink } from 'react-router-dom';

function Landing() {
  return (
    <div>
      <div>
        <video
          src={landing}
          className={style.landing}
          autoPlay
          loop
          muted
        ></video>
      </div>
      <NavLink to='/home'>
        <button className={style.home}>Ingresar</button>
      </NavLink>
    </div>
  );
}

export default Landing;
