import NavBar from "../../componentes/navbar/NavBar";
import CardContainer from "../../componentes/cardContainer/CardContainer";
import Footer from "../../componentes/footer/Footer";
import Slider from "../../componentes/slider/Slider";
import Newsletter from "../../componentes/newsletter/newsletter";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Slider />
      <CardContainer />
      <Newsletter />
      <Footer />
    </div>
  );
};
export default Home;
