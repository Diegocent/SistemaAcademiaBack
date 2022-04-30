const db = require("../models");
const Usuario = db.Usuario;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req, res) => {
    const usuario = {
        username: req.body.username,
        contraseña: req.body.contraseña
    };
    // Guardamos a la base de datos
    Usuario.create(usuario)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error al guardar el usuario."
            });
        });
  
};
// obtiene todos los usuarios
exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Usuario.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al obtener los usuarios."
            });
        });
  
};
// obtener uno con el id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Usuario.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener usuario con id=" + id
            });
        });
  
};
// actualizar por id
exports.update = (req, res) => {
    const id = req.params.id;
  
    Usuario.update(req.body, { where: { id: id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "La usuario se ha actualizado correctamente."
                });
            } else {
                res.send({
                    message: `Ocurrio un error. No se pudo actualizar la usuario con id= ${id}.!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error actualizando la usuario con id= " + id
            });
        });
  
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Usuario.destroy({ where: { id: id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El usuario fue borrado correctamente!"
                });
            } else {
                res.send({
                    message: `Ocurrio un error. No se pudo borrar el usuario con id= ${id}.!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error borrando el usuario con id= " + id
            });
        });
  
};