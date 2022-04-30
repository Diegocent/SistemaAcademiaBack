module.exports = (sequelize, Sequelize) => {
    const Concepto_pagos = sequelize.define("sa_concepto_pagos", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        concepto: {
            type: Sequelize.STRING
        },
        monto: {
            type: Sequelize.INTEGER
        }
    });
    return Concepto_pagos;
  };