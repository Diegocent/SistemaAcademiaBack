const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./app/models");


db.sequelize.sync();

var corsOptions = {
  origin: "http://localhost:4200"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route




/* db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  }); */

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/alumno.routes")(app);
require("./app/routes/pagos.routes")(app);
require("./app/routes/concepto_pago.routes")(app);
require("./app/routes/parametricos.routes")(app);
require("./app/routes/persona.routes")(app);
require("./app/routes/usuario.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

