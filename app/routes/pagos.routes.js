module.exports = app => {
    const pagos = require("../controllers/pagos.controller.js");
    var router = require("express").Router();
    router.post("/", pagos.create);
    router.get("/", pagos.findAll);
    router.get("/:id", pagos.findOne);
    router.put('/:id', pagos.update);
    router.delete('/:id', pagos.delete);
    app.use('/api/pagos', router);
};