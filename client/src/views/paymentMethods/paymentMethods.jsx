import "./paymentMethods.css";

const PaymentMethodsView = () => {
  return (
    <div className="payment-container">
      <h2>Medios de Pago</h2>
      <div className="payment-row">
        <div className="payment-method">
          <div className="payment-img-container">
            <img src="src/assets/payMethods/4.png" alt="Efectivo" />
          </div>
          <p>Efectivo</p>
        </div>
        <div className="payment-method">
          <div className="payment-img-container">
            <img src="src/assets/payMethods/1.png" alt="Mercado Pago" />
          </div>
          <p>Mercado Pago</p>
        </div>
      </div>
      <div className="payment-row">
        <div className="payment-method">
          <div className="payment-img-container">
            <img
              src="src/assets/payMethods/2.png"
              alt="Transferencia Bancaria"
            />
          </div>
          <p>Transferencia Bancaria</p>
        </div>
        <div className="payment-method">
          <div className="payment-img-container">
            <img src="src/assets/payMethods/3.png" alt="Tarjetas" />
          </div>
          <p>Tarjetas</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodsView;
