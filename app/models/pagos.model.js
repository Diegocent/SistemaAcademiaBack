module.exports = (sequelize, Sequelize) => {
    const Pagos = sequelize.define("sa_pagos", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fecha: {
            type: Sequelize.DATE
        },
        monto_total: {
            type: Sequelize.INTEGER
        }
    });
    return Pagos;
  };