module.exports = app => {
    const montoConcepto = require("../controllers/monto_concepto.controller.js");
    var router = require("express").Router();
    router.post("/", montoConcepto.create);
    router.get("/", montoConcepto.findAll);
    router.get("/:id", montoConcepto.findOne);
    router.put('/:id', montoConcepto.update);
    router.delete('/:id', montoConcepto.delete);
    app.use('/api/monto_concepto', router);
};