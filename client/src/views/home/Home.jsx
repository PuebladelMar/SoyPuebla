import Slider from "../../componentes/slider/Slider";
import Newsletter from "../../componentes/newsletter/newsletter";
import SeriesContainer from "../../componentes/seriesContainer/SeriesContainer";
import Reviews from "../../componentes/reviews/Reviews";
import FooterContact from "../../componentes/footer/FooterContact";
import "./Home.css"

const Home = () => {
  return (
    <div className="home-container">
      <br />
      <Slider />
      <br />
      <SeriesContainer />
      <br />
      <Reviews />
      <br />
      <FooterContact />
    </div>
  );
};
export default Home;
