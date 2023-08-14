import React from "react";
import "./shipment.css";

const Shipment = () => {
  return (
    <div className="shipment-methods-container">
      <div className="shipment-container">
        <div className="shipment-header">
          <h2 className="shipment-title">Medios de Envío</h2>
          <span className="shipment-text-underline"></span>
        </div>
      </div>
      <div />
      <div className="shipment-containerAdd">
        <div>
          <strong>
            Los costos y tiempos estimados de entrega son los siguientes:
          </strong>
          <br />
          <br />
          <strong>Envío a domicilio a través de Correo Argentino:</strong> el
          costo del servicio es de $ XXX. El plazo estimado de entrega es entre
          72 - 96hs hábiles desde el despacho del pedido.
          <br />
          <br />
          <strong>Retiro en sucursal de Correo Argentino:</strong> el costo del
          servicio es de $ XXX. El plazo estimado de entrega es entre 72 - 96hs
          hábiles desde el despacho del pedido. Una vez despachado el envío te
          mandamos un correo con el número de seguimiento para que puedas ver el
          estado.
          <br />
          <br />
          <strong>Horarios de entrega Correo Argentino:</strong> lunes a viernes
          de 9 a 18hs y sábados de 9 a 13hs. Los usuarios no podrán elegir el
          día u horario en que se entregará su pedido.
          <br />
          <br />
          <strong>
            Por motomensaje (Sólo en la ciudad de La Plata y alrededores):
          </strong>{" "}
          Envío a domicilio, el costo del servicio es de $ 500 dentro del casco
          urbano y $700 alrededores. El plazo estimado de entrega es entre 48 /
          72hs hábiles desde la acreditación de tu pedido. Una vez acreditado tu
          pago, nos ponemos en contacto para verificar tu dirección y coordinar
          el envío. El plazo puede ser dentro de las 48/72 horas días hábiles,
          salvo excepcionalidades. <strong>NO SE REPARTE DÍAS DOMINGO.</strong>
          <br />
          <br />
          <strong>Puntos de retiro:</strong> Podes retirar tu compra sin cargo
          los siguientes puntos:
          <br />
          <strong>LA PLATA:</strong> Centro
          <br />
          <strong>CABA:</strong> Palermo.
          <br />
          Cuando acreditamos tu pago, el plazo de confirmación para retirar el
          pedido puede ser de 24 - 48hs hábiles, salvo excepcionalidades. La
          información te llega al email utilizado en el proceso de compra.
          Acordate que el número de compra será solicitado a la hora de retirar
          el pedido.
        </div>
      </div>
    </div>
  );
};

export default Shipment;
