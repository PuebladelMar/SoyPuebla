const mercadopago = require('mercadopago');

const postCreatePreference = async (req, res) => {
  const { description, price, quantity, currency_id } = req.body;

  const preference = {
    items: [
      {
        title: description,
        unit_price: Number(price),
        quantity: Number(quantity),
      },
    ],
    back_urls: {
      success: 'http://localhost:5173/',
      failure: 'http://localhost:5173/pagar',
      pending: 'http://localhost:5173/procesando',
    },
    auto_return: 'approved',
  };

  try {
    const response = await mercadopago.preferences.create(preference);
    res.json({
      id: response.body.id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Ocurrió un error' });
  }
};

module.exports = postCreatePreference;