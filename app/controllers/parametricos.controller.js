const db = require("../models");
const Parametricos = db.Parametricos;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req, res) => {
    const parametricos = {
        descripcion: req.body.descripcion,
        monto: req.body.monto
    };
    // Guardamos a la base de datos
    Parametricos.create(parametricos)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error al guardar los parametricos."
            });
        });
  
};
// obtiene todos los Parametricos
exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Parametricos.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al obtener los Parametricos."
            });
        });
  
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Parametricos.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener Parametricos con id=" + id
            });
        });
  
};

exports.update = (req, res) => {
    const id = req.params.id;
  
    Parametricos.update(req.body, { where: { id: id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Los Parametricos se ha actualizado correctamente."
                });
            } else {
                res.send({
                    message: `Ocurrio un error. No se pudo actualizar el Parametrico con id= ${id}.!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error actualizando el Parametricos con id= " + id
            });
        });
  
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Parametricos.destroy({ where: { id: id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El parametrico fue borrado correctamente!"
                });
            } else {
                res.send({
                    message: `Ocurrio un error. No se pudo borrar el parametrico con id= ${id}.!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error borrando el Parametrico con id= " + id
            });
        });
  
};