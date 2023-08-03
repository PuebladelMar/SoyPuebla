
import NavBar from '../../componentes/navbar/NavBar';
import CardContainer from '../../componentes/cardContainer/CardContainer';
import Footer from "../../componentes/footer/Footer";
import Slider from '../../componentes/slider/Slider';
import SeriesContainer from '../../componentes/seriesContainer/SeriesContainer';


const Home = () => {
  return (
    <div>
      <NavBar />
      <Slider/>
      <CardContainer />
      <SeriesContainer />
      <Footer />

    </div>
  );
};
export default Home;
