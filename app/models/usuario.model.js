module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("sa_usuarios", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING
        },
        contrasena: {
            type: Sequelize.STRING
        }
    });
    return Usuario;
  };