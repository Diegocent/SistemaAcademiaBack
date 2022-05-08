module.exports = app => {
    const persona = require("../controllers/persona.controller.js");
    var router = require("express").Router();
    router.post("/", persona.create);
    router.get("/", persona.findAll);
    router.get("/:id", persona.findOne);
    router.get("/documento/:documento", persona.findOneDocumento);
    router.get("/doc/:documento", persona.findDocumento);
    router.put('/:id', persona.update);
    router.delete('/:id', persona.delete);
    app.use('/api/persona', router);
};