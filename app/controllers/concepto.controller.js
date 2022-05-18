const db = require("../models");
const Concepto = db.Concepto;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req, res) => {
    const Concepto = {
        nombre: req.body.nombre,
    };
    // Guardamos a la base de datos
    Concepto.create(concepto)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error al guardar el concepto."
            });
        });
  
};
// obtiene todos los pagos
exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Concepto.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al obtener los conceptos."
            });
        });
  
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Concepto.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener concepto con id=" + id
            });
        });
  
};

exports.update = (req, res) => {
    const id = req.params.id;
  
    Concepto.update(req.body, { where: { id: id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El concepto se ha actualizado correctamente."
                });
            } else {
                res.send({
                    message: `Ocurrio un error. No se pudo actualizar el concepto con id= ${id}.!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error actualizando el concepto con id= " + id
            });
        });
  
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Concepto.destroy({ where: { id: id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El concepto fue borrado correctamente!"
                });
            } else {
                res.send({
                    message: `Ocurrio un error. No se pudo borrar el conce´tp con id= ${id}.!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error borrando el concepto con id= " + id
            });
        });
  
};