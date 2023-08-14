import "./SeriesContainer.css";
import R1 from "../../assets/images/imagesSeries/R1 INDUSTRIA.png";
import R2 from "../../assets/images/imagesSeries/R2 ESCAPE.png";
import R3 from "../../assets/images/imagesSeries/R3 LIGHT.png";
import R4 from "../../assets/images/imagesSeries/R4 SCRAPES.png";
import R5 from "../../assets/images/imagesSeries/R5 BEACH.png";
import R6 from "../../assets/images/imagesSeries/R6 CLEAR.png";
import R7 from "../../assets/images/imagesSeries/R7 FORCE.png";
import R8 from "../../assets/images/imagesSeries/R8 PURE.png";
import R10 from "../../assets/images/imagesSeries/R10 ZEN.png";
import { Link } from "react-router-dom";

function SeriesContainer() {
  return (
    <div>
      <h1 className="series-text">
        SERIES<span className="series-text-underline"></span>
      </h1>
      <br />

      <div className="seriesContainer">
        <div className="s1">
          <div className="image-container">
            <Link to={`/products`}>
              <img className="serie-image" src={R1} alt="INDUSTRIAL" />
              <div className="image-text">INDUSTRIAL</div>
            </Link>
          </div>
        </div>

        <div className="s2">
          <div className="image-container">
            <Link to={`/products`}>
              <img className="serie-image" src={R6} alt="CLEAR" />
              <div className="image-text">CLEAR</div>
            </Link>
          </div>
        </div>

        <div className="s3">
          <div className="image-container">
            <Link to={`/products`}>
              <img className="serie-image" src={R4} alt="SCRAPES" />
              <div className="image-text">SCRAPES</div>
            </Link>
          </div>
        </div>

        <div className="s4">
          <div className="image-container">
            <Link to={`/products`}>
              <img className="serie-image" src={R5} alt="BEACH" />
              <div className="image-text">BEACH</div>
            </Link>
          </div>
        </div>

        <div className="s5">
          <div className="image-container">
            <Link to={`/products`}>
              <img className="serie-image" src={R2} alt="ESCAPE" />
              <div className="image-text">ESCAPE</div>
            </Link>
          </div>
        </div>

        <div className="s6">
          <div className="image-container">
            <Link to={`/products`}>
              <img className="serie-image" src={R10} alt="ZEN" />
              <div className="image-text">ZEN</div>
            </Link>
          </div>
        </div>

        <div className="s7">
          <div className="image-container">
            <Link to={`/products`}>
              <img className="serie-image" src={R3} alt="LIGHT" />
              <div className="image-text">LIGHT</div>
            </Link>
          </div>
        </div>

        <div className="s8">
          <div className="image-container">
            <Link to={`/products`}>
              <img className="serie-image" src={R7} alt="FORCE" />
              <div className="image-text">FORCE</div>
            </Link>
          </div>
        </div>

        <div className="s9">
          <div className="image-container">
            <Link to={`/products`}>
              <img className="serie-image" src={R8} alt="PURE" />
              <div className="image-text">PURE</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeriesContainer;
