import Slider from '../../componentes/slider/Slider';
import Newsletter from '../../componentes/newsletter/newsletter';
import SeriesContainer from '../../componentes/seriesContainer/SeriesContainer';
import Reviews from '../../componentes/reviews/Reviews';

const Home = () => {
  return (
    <div>
      <br />
      <Slider />
      <br />
      <SeriesContainer />
      <br />
      <Reviews />
      <br />
      <Newsletter />
    </div>
  );
};
export default Home;
