import NavBar from "../../componentes/navbar/NavBar";
import CardContainer from "../../componentes/cardContainer/CardContainer";
import Footer from "../../componentes/footer/Footer";
import Slider from "../../componentes/slider/Slider";
import Newsletter from "../../componentes/newsletter/newsletter";
import SeriesContainer from '../../componentes/seriesContainer/SeriesContainer';
import Reseñas from "../../componentes/reseñas/Reseñas"



const Home = () => {
  return (
    <div>
      <NavBar />
      <Slider />
      <SeriesContainer />
      <CardContainer />
      <Reseñas />
      <Newsletter />
      <Footer />
    </div>
  );
};
export default Home;
