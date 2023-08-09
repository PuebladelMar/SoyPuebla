// import { useState } from "react";
// import axios from "axios";
// import React from "react";
// import { Link } from "react-router-dom";
// import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";


// function MercadoPago() {
//   const [preferenceId, setPreferenceId] = useState(null);
//   initMercadoPago("TEST-617b343c-694c-44b2-a447-349bcd889b8b");

//   const createPreference = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:3001/create_preference",
//         {
//           description: "pantalon",
//           price: 100,
//           quantity: 1,
//           currency_id: "ARS"
//         }
//       );
//       const { id } = response.data;
//       return id;
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleBuy = async () => {
//     const id = await createPreference();
//     if (id) {
//       setPreferenceId(id);
//     }
//   };

//   return (
//     <div className="not-found">
//       <p className="notFound-text">pantalon </p>
//       <p>100 pesos</p>
//       <button onClick={handleBuy}>click aqui para pagar</button>
//       {preferenceId &&  <Wallet initialization={{ preferenceId }} />}
//       <p>y compra exitosa</p>
//       <Link to="/home">Click aquí para volver al home</Link>
//     </div>
//   );
// }

// export default MercadoPago;
