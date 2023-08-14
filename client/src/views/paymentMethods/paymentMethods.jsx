import React from "react";
import "./paymentMethods.css";

const PaymentMethodsView = () => {
  return (
    <div className="payment-methods-container">
      <div className="payment-container">
        <div className="payment-header">
          <h2 className="payment-title">Medios de Pago</h2>
          <span className="payment-text-underline"></span>
        </div>
      </div>
      <div />
      <div className="payment-row">
        <div className="payment-method">
          <p>Efectivo</p>
          <div className="payment-img-container">
            <img src="src/assets/payMethods/4.png" alt="Efectivo" />
          </div>
        </div>
        <div className="payment-method">
          <p>Mercado Pago</p>
          <div className="payment-img-container">
            <img src="src/assets/payMethods/1.png" alt="Mercado Pago" />
          </div>
        </div>

        <div className="payment-method">
          <p>Transferencia</p>
          <div className="payment-img-container">
            <img
              src="src/assets/payMethods/2.png"
              alt="Transferencia Bancaria"
            />
          </div>
        </div>
        <div className="payment-method">
          <p>Tarjetas</p>
          <div className="payment-img-container">
            <img src="src/assets/payMethods/3.png" alt="Tarjetas" />
          </div>
        </div>
      </div>
      <div className="additional-container">
        <div>
          <p>
            En nuestro eCommerce, te ofrecemos una amplia gama de opciones de
            medios de pago diseñadas para brindarte comodidad y seguridad al
            realizar tus compras en línea. A continuación, te presentamos los
            medios de pago disponibles:
          </p>
          <br />
          <ol>
            <li>
              <strong>Tarjetas de Crédito:</strong> Aceptamos las principales
              tarjetas de crédito como Visa, MasterCard y American Express.
            </li>
            <br />
            <li>
              <strong>Tarjetas de Débito:</strong> También puedes utilizar tus
              tarjetas de débito asociadas a redes locales e internacionales
              para realizar tus compras.
            </li>
            <br />
            <li>
              <strong>MercadoPago:</strong> Te brindamos la opción de pagar a
              través de MercadoPago, una plataforma de pagos en línea muy
              popular en Argentina. Puedes utilizar tu saldo en MercadoPago,
              vincular tus tarjetas o incluso generar un cupón de pago en
              efectivo.
            </li>
            <br />
            <li>
              <strong>Transferencias Bancarias:</strong> Si prefieres pagar a
              través de una transferencia bancaria, te proporcionamos nuestros
              datos bancarios para que puedas completar la transacción desde tu
              banco en línea o en persona en la sucursal luego de tu compra.
            </li>
            <br />
            <li>
              <strong>Pagos en Efectivo:</strong> Si no tienes acceso a medios
              electrónicos, también puedes optar por la modalidad de pago en
              efectivo. Generaremos un código de barras o un número de
              referencia para que puedas abonar en locales autorizados, como
              PagoFácil o Rapipago.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodsView;
