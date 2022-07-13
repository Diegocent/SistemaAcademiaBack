const db = require("../models");
const Concepto_pago = db.Concepto_pago;
const Op = db.Sequelize.Op;
const { Pagos } = require("../models");
// Create and Save a new Tutorial
exports.create = (req, res) => {
    const concepto_pago = {
        concepto: req.body.concepto,
        monto: req.body.monto,
        id_pagos: req.body.id_pagos,
    };
    // Guardamos a la base de datos
    Concepto_pago.create(concepto_pago)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error al guardar el Concepto de pago."
            });
        });
  
};
// obtiene todos los Concepto_pago
exports.findAll = (req, res) => {
    const nombre = req.query.nombre;

    Concepto_pago.findAll({ include: {model: Pagos} })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al obtener los Conceptos de pago."
            });
        });
  
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Concepto_pago.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener el Concepto de pago con id=" + id
            });
        });
  
};

exports.update = (req, res) => {
    const id = req.params.id;
  
    Concepto_pago.update(req.body, { where: { id: id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El Concepto de pago se ha actualizado correctamente."
                });
            } else {
                res.send({
                    message: `Ocurrio un error. No se pudo actualizar el Concepto de pago con id= ${id}.!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error actualizando el Concepto de pago con id= " + id
            });
        });
  
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Concepto_pago.destroy({ where: { id: id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El concepto de pago fue borrado correctamente!"
                });
            } else {
                res.send({
                    message: `Ocurrio un error. No se pudo borrar el concepto de pago con id= ${id}.!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error borrando el concepto de pago con id= " + id
            });
        });
  
};