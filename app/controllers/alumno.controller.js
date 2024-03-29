const { Persona, Cursos, Concepto, montoConcepto } = require("../models");
const db = require("../models");
const Alumno = db.Alumno;
const Op = db.Sequelize.Op;
const dbConfig = require("../config/db.config");
const { sequelize } = require("../models");

// Create and Save a new Tutorial
exports.create = (req, res) => {
  const alumno = {
    descuento: req.body.descuento,
    cantidad_materias: req.body.cantidad_materias,
    vestuario: req.body.vestuario,
    entrada: req.body.entrada,
    cantidad_cuotas: req.body.cantidad_cuotas,
    id_persona: req.body.id_persona,
    id_curso: req.body.id_curso,
  };
  // Guardamos a la base de datos
  Alumno.create(alumno)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ha ocurrido un error al guardar la alumno.",
      });
    });
};
// obtiene todos los alumnos
exports.findAll = (req, res) => {
  const CursoId = req.query.curso;

  Alumno.findAll({ include: [{model: Persona},{model: Cursos,include:[{model: montoConcepto}]}]})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocurrio un error al obtener los alumnos.",
      });
    });
};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Alumno.findByPk(id, {include:  [{model: Persona},{model: Cursos,include:[{model: montoConcepto}]}] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error al obtener alumno con id=" + id,
      });
    });
};

// exports.findDocumento = (req, res) => {
//   const documento = req.params.documento;
//   Persona.findAll({where: {documento:documento}})
//       .then(data => {
//               res.send(data[0]);
  
//       })
//       .catch(err => {
//           res.status(500).send({
//               message: "Error "
//           });
//       });
// };
// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Alumno.update(req.body, { where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "El alumno se ha actualizado correctamente.",
        });
      } else {
        res.send({
          message: `Ocurrio un error. No se pudo actualizar la alumno con id= ${id}.!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error actualizando la alumno con id= " + id,
      });
    });
};

exports.findAlumnoByCI = (req, res) => {
  Persona.findAll({ where: { documento: req.params.doc } })
    .then((data) => {
      Alumno.findAll({
        where: {
          id_persona: data[0].dataValues.id,
        },
      }).then((data) => {
        res.status(500).send(data[0]);
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error ",
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Alumno.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "El alumno fue borrado correctamente!",
        });
      } else {
        res.send({
          message: `Ocurrio un error. No se pudo borrar el alumno con id= ${id}.!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error borrando el alumno con id= " + id,
      });
    });
};
