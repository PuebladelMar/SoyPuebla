import React from "react";
import "./sizeChart.css";

const SizeChart = () => {
  return (
    <div className="sizeChart-methods-container">
      <div className="sizeChart-container">
        <div className="sizeChart-header">
          <h2 className="sizeChart-title">Tabla de Talles</h2>
          <span className="sizeChart-text-underline"></span>
        </div>
      </div>
      <div />
      <div>
        <p className="sizeChartP">
          En nuestra tienda de ropa, entendemos la importancia de encontrar la
          talla perfecta que se adapte a tu estilo y comodidad. Por eso, hemos
          creado una tabla de talles detallada para ayudarte a elegir la opción
          ideal. Nuestra tabla de talles te proporciona medidas precisas para
          diferentes tallas, desde S hasta XL, permitiéndote tomar decisiones
          informadas al realizar tu compra. Explora la tabla a continuación y
          encuentra el ajuste que te haga sentir seguro y a gusto en cada prenda
          que elijas.
        </p>
      </div>
      <div className="table-container">
        <table className="size-table">
          <thead>
            <tr>
              <th>Talle</th>
              <th>Ancho de Hombros (cm)</th>
              <th>Contorno de Pecho (cm)</th>
              <th>Largo de Mangas (cm)</th>
              <th>Largo Total (cm)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>S</td>
              <td>45</td>
              <td>90</td>
              <td>60</td>
              <td>70</td>
            </tr>
            <tr>
              <td>M</td>
              <td>48</td>
              <td>95</td>
              <td>62</td>
              <td>72</td>
            </tr>
            <tr>
              <td>L</td>
              <td>51</td>
              <td>100</td>
              <td>64</td>
              <td>74</td>
            </tr>
            {/* Puedes agregar más filas según los talles */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SizeChart;
