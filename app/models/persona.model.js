module.exports = (sequelize, Sequelize) => {
    const Persona = sequelize.define("sa_personas", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      documento: {
        type: Sequelize.STRING
      }
    });
    return Persona;
  };