module.exports = (sequelize, Sequelize) => {
  const Concepto = sequelize.define("sa_conceptos", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: Sequelize.STRING,
    },
  });
  return Concepto;
};
