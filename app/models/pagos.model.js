module.exports = (sequelize, Sequelize) => {
    const Pagos = sequelize.define("sa_pagos", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        monto_total: {
            type: Sequelize.INTEGER
        }
    });
    return Pagos;
  };