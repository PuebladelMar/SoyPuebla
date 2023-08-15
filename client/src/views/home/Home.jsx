import Slider from "../../componentes/slider/Slider";
import SeriesContainer from "../../componentes/seriesContainer/SeriesContainer";
import Reviews from "../../componentes/reviews/Reviews";
import FooterContact from "../../componentes/footer/FooterContact";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <br />
      <Slider />
      <br />
      <SeriesContainer />
      <br />
      <FooterContact />
    </div>
  );
};
export default Home;
