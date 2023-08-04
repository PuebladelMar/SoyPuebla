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

      <h1 className="series-text">SERIES</h1>
      <h1 className="series-text-underline">_________________</h1>
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

{
  /* <img className="serie1" src={R1} alt="INDUSTRIA" />
            <img className="serie2"  src={R2} alt="ESCAPE" />
            <img className="serie3"  src={R3} alt="LIGHT" />
            <img className="serie4"  src={R4} alt="SCRAPES" />
            <img className="serie5"  src={R5} alt="BEACH" />
            <img className="serie6"  src={R6} alt="CLEAR" />
            <img className="serie7"  src={R7} alt="FORCE" />
            <img className="serie8"  src={R8} alt="PURE" />
            <img className="serie9"  src={R9} alt="URBAN" />
            <img className="serie10"  src={R10} alt="ZEN" /> */
}

// function SeriesContainer() {

//     return (
//       <div className="seriesContainer">
//           <div className="line">
//               <img className="serie" src={R1} alt="INDUSTRIA" />
//               <img className="serie"  src={R2} alt="ESCAPE" />
//               <img className="serie"  src={R3} alt="LIGHT" />
//           </div>
//           <div className="line">
//               <img className="serie"  src={R4} alt="SCRAPES" />
//               <img className="serie"  src={R5} alt="BEACH" />
//           </div>
//           <div className="line">
//               <img className="serie"  src={R6} alt="CLEAR" />
//               <img className="serie"  src={R7} alt="FORCE" />
//           </div>
//           <div className="line">
//               <img className="serie"  src={R8} alt="PURE" />
//               <img className="serie"  src={R9} alt="URBAN" />
//               <img className="serie"  src={R10} alt="ZEN" />
//           </div>

//       </div>
//     );
//   }

//   export default SeriesContainer;

// import React from 'react';
// import "./SeriesContainer.css";

// const imagesPath = '../../assets/images/imagesSeries/';

// function CardContainer() {
//   return (
//     <div className="row">
//       <div className="column">
//         <img src={imagesPath + 'R1 INDUSTRIA.png'} alt="INDUSTRIA" />
//       </div>
//     </div>
//   );
// }

// export default CardContainer;
