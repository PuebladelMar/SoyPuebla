const mercadopago = require('mercadopago');

const postCreatePreference = async (req, res) => {
  const { products } = req.body;
  
  const items = products.map(product => ({
    title: product.description,
    description: product.title,
    unit_price: Number(product.price),
    quantity: Number(product.quantity),
  }));


  const preference = {
    items: items,
    back_urls: {
      success: 'http://localhost:3001/mp/success',
      failure: 'http://localhost:3001/mp/failure',
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

