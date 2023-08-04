import Slider from '../../componentes/slider/Slider';
import Newsletter from '../../componentes/newsletter/newsletter';
import SeriesContainer from '../../componentes/seriesContainer/SeriesContainer';
import Reseñas from '../../componentes/reseñas/Reseñas';
import PopUpNews from '../../componentes/newsletter/popupNewsletter';

const Home = () => {
  return (
    <div>
      <PopUpNews />
      <br />
      <Slider />
      <br />
      <SeriesContainer />
      <br />
      <Reseñas />
      <br />
      <Newsletter />
    </div>
  );
};
export default Home;
