const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Persona = require("./persona.model.js")(sequelize, Sequelize);
db.Alumno = require("./alumno.model.js")(sequelize, Sequelize);
db.Usuario = require("./usuario.model.js")(sequelize, Sequelize);
db.Parametricos = require("./parametricos.model.js")(sequelize, Sequelize);
db.Concepto_pago = require("./concepto_pago.model.js")(sequelize, Sequelize);
db.Pagos = require("./pagos.model.js")(sequelize, Sequelize);
db.montoConcepto = require("./monto_concepto.model")(sequelize, Sequelize);
db.Concepto = require("./concepto.model")(sequelize, Sequelize);
db.Cursos = require("./cursos.model")(sequelize, Sequelize);

db.Alumno.belongsTo(db.Persona, { foreignKey: "id_persona" });
db.Persona.hasOne(db.Alumno, { foreignKey: "id_persona" });

db.Usuario.belongsTo(db.Persona, { foreignKey: "id_persona" });
db.Persona.hasOne(db.Usuario, { foreignKey: "id_persona" });

db.Concepto_pago.belongsTo(db.Pagos, { foreignKey: "id_pagos" });
db.Pagos.hasMany(db.Concepto_pago, { foreignKey: "id_pagos" });

db.Pagos.belongsTo(db.Alumno, { foreignKey: "id_alumno" });
db.Alumno.hasMany(db.Pagos, { foreignKey: "id_alumno" });

db.montoConcepto.belongsTo(db.Concepto, { foreignKey: "id_concepto" });
db.Concepto.hasOne(db.montoConcepto, { foreignKey: "id_concepto" });

module.exports = db;
