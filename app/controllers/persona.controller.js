const db = require("../models");
const Persona = db.Persona;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req, res) => {
  const persona = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    documento: req.body.documento,
  };
  console.log("test");
  // Guardamos a la base de datos
  Persona.create(persona)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ha ocurrido un error al guardar la persona.",
      });
    });
};

exports.findAll = (req, res) => {
    const documento = req.query.documento;
    var condition = documento ? { documento: { [Op.iLike]: `%${documento}%` } } : null;
    if (documento) {
        Persona.findAll({ where: {documento:documento}})
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Ocurrio un error al obtener las personas."
                });
            });
    } else {
        Persona.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al obtener las personas."
            });
        });
    }
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Persona.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error al obtener persona con id=" + id,
      });
    });
};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Persona.update(req.body, { where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "La persona se ha actualizado correctamente.",
        });
      } else {
        res.send({
          message: `Ocurrio un error. No se pudo actualizar la persona con id= ${id}.!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error actualizando la Persona con id= " + id,
      });
    });
};

exports.findOneDocumento = (req, res) => {
    const documento = req.params.documento;
    Persona.findAll({where: {documento:documento}})
        .then(data => {
            if (data.length===0) {
                res.send(false);
            } else {
                res.send(true);
            }
            
        })
        .catch(err => {
            res.status(500).send({
                message: "Error "
            });
        });
};



exports.delete = (req, res) => {
  const id = req.params.id;

  Persona.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "La persona fue borrada correctamente!",
        });
      } else {
        res.send({
          message: `Ocurrio un error. No se pudo borar la Persona con id= ${id}.!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error borrando la Persona con id= " + id,
      });
    });
};

exports.findDocumento = (req, res) => {
  const documento = req.params.documento;
  Persona.findAll({where: {documento:documento}})
      .then(data => {
              res.send(data[0]);
  
      })
      .catch(err => {
          res.status(500).send({
              message: "Error "
          });
      });
};