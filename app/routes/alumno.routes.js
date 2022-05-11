module.exports = app => {
    const alumno = require("../controllers/alumno.controller.js");
    var router = require("express").Router();
    router.post("/", alumno.create);
    router.get("/", alumno.findAll);
    router.get("/:id", alumno.findOne);
    // router.get("/id/:id_persona", alumno.findOnePersona);
    router.put('/:id', alumno.update);
    router.delete('/:id', alumno.delete);
    app.use('/api/alumno', router);
};