const { montoConcepto } = require("../models");
const db = require("../models");
const Cursos = db.Cursos;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req, res) => {
    const cursos = {
        nombre : req.body.nombre,
        cuota: req.body.cuota,
        examen: req.body.examen,
    };
    // Guardamos a la base de datos
    Cursos.create(cursos)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error al guardar la pagos."
            });
        });
  
};
// obtiene todos los pagos
exports.findAll = (req, res) => {
    Cursos.findAll({ include: {model: montoConcepto} })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al obtener los Cursos."
            });
        });
  
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Cursos.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener curso con id=" + id
            });
        });
  
};

exports.update = (req, res) => {
    const id = req.params.id;
  
    Cursos.update(req.body, { where: { id: id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "el curso se ha actualizado correctamente."
                });
            } else {
                res.send({
                    message: `Ocurrio un error. No se pudo actualizar el curso con id= ${id}.!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error actualizando el curso con id= " + id
            });
        });
  
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Cursos.destroy({ where: { id: id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El curso fue borrado correctamente!"
                });
            } else {
                res.send({
                    message: `Ocurrio un error. No se pudo borrar el curso con id= ${id}.!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error borrando el curso con id= " + id
            });
        });
  
};