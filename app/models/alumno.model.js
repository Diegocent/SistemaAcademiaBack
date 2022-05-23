module.exports = (sequelize, Sequelize) => {
  const Alumno = sequelize.define("sa_alumnos", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descuento: {
      type: Sequelize.INTEGER,
    },
    cantidad_materias: {
      type: Sequelize.INTEGER,
    },
    vestuario: {
      type: Sequelize.INTEGER,
    },
    entrada: {
      type: Sequelize.INTEGER,
    }
  });
  return Alumno;
};
