module.exports = (sequelize, Sequelize) => {
    const Alumno = sequelize.define("sa_alumno", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cantidad_materias: {
            type: Sequelize.INTEGER
        },
        cuota_anual: {
            type: Sequelize.INTEGER
        },
        derecho_examen: {
            type: Sequelize.INTEGER
        },
        vestuario: {
            type: Sequelize.INTEGER
        },
        curso: {
            type: Sequelize.STRING
        }
    });
    return Alumno;
  };