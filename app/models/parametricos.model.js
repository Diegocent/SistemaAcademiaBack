module.exports = (sequelize, Sequelize) => {
    const Parametricos = sequelize.define("sa_parametricos", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descripcion: {
            type: Sequelize.STRING
        },
        monto: {
            type: Sequelize.INTEGER
        }
    });
    return Parametricos;
  };