module.exports = app => {
    const cursos = require("../controllers/cursos.controller.js");
    var router = require("express").Router();
    router.post("/", cursos.create);
    router.get("/", cursos.findAll);
    router.get("/:id", cursos.findOne);
    router.put('/:id', cursos.update);
    router.delete('/:id', cursos.delete);
    app.use('/api/cursos', router);
};