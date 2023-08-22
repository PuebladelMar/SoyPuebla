import Slider from "../../componentes/slider/Slider";
import SeriesContainer from "../../componentes/seriesContainer/SeriesContainer";
import FooterContact from "../../componentes/footer/FooterContact";
import { useLayoutEffect } from "react";
import "./Home.css";

const Home = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
