const { Concepto } = require("../models");
const db = require("../models");
const montoConcepto = db.montoConcepto;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req, res) => {
    const montoconcepto = {
        monto : req.body.monto,
        id_concepto: req.body.id_concepto,
    };
    // Guardamos a la base de datos
    montoConcepto.create(montoconcepto)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error al guardar."
            });
        });
  
};
// obtiene todos los pagos
exports.findAll = (req, res) => {
    montoConcepto.findAll({include: {model: Concepto}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al obtener."
            });
        });
  
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    montoConcepto.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener el monto concepto con id=" + id
            });
        });
  
};

exports.update = (req, res) => {
    const id = req.params.id;
  
    montoConcepto.update(req.body, { where: { id: id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "el monto concepto se ha actualizado correctamente."
                });
            } else {
                res.send({
                    message: `Ocurrio un error. No se pudo actualizar el monto concepto con id= ${id}.!`
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
    montoConcepto.destroy({ where: { id: id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Monto concepto fue borrado correctamente!"
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