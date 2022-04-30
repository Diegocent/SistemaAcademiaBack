module.exports = app => {
    const concepto_pago = require("../controllers/concepto_pago.controller.js");
    var router = require("express").Router();
    router.post("/", concepto_pago.create);
    router.get("/", concepto_pago.findAll);
    router.get("/:id", concepto_pago.findOne);
    router.put('/:id', concepto_pago.update);
    router.delete('/:id', concepto_pago.delete);
    app.use('/api/concepto_pago', router);
};