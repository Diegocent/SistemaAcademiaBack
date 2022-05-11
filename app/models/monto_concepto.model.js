module.exports = (sequelize, Sequelize) => {
  const montoConcepto = sequelize.define("sa_monto_conceptos", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    monto: {
      type: Sequelize.INTEGER,
    },
  });
  return montoConcepto;
};
