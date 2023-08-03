const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const port = process.env.PORT;

conn.sync({ force: false }).then(() => {
  server.listen(port, () => {
    console.log(`%s listening at ${port}`);
  });
});