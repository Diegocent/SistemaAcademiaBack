module.exports = (sequelize, Sequelize) => {
  const Curso = sequelize.define("sa_cursos", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: Sequelize.STRING,
    },
    timestamps: false,

  });
  return Curso;
};
