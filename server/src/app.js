const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const mercadopago = require("mercadopago")

require('./db.js');

const server = express();

mercadopago.configure({
	access_token: "TEST-5636166372425926-080815-a0093603a0ac2c361462f789a373dd94-1432158528",
});

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use(cors())

server.post("/create_preference", (req, res) => {

	let preference = {
		items: [
			{
				title: req.body.description,
				unit_price: Number(req.body.price),
				quantity: Number(req.body.quantity),
			}
		],
		back_urls: {
			"success": "http://localhost:5173/",
			"failure": "http://localhost:5173/pagar",
			"pending": "http://localhost:5173/procesando"
		},
		auto_return: "approved",
	};
  
	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
			console.log(error);
		});
});

server.get('/feedback', function (req, res) {
	res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
});

server.get("/mercadoPago", function(req, res){res.send("servidor de pagos levantado")});

server.use('/', routes);

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;