module.exports = app => {
    const concepto = require("../controllers/concepto.controller.js");
    var router = require("express").Router();
    router.post("/", concepto.create);
    router.get("/", concepto.findAll);
    router.get("/:id", concepto.findOne);
    router.put('/:id', concepto.update);
    router.delete('/:id', concepto.delete);
    app.use('/api/concepto', router);
};