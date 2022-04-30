module.exports = app => {
    const parametricos = require("../controllers/parametricos.controller.js");
    var router = require("express").Router();
    router.post("/", parametricos.create);
    router.get("/", parametricos.findAll);
    router.get("/:id", parametricos.findOne);
    router.put('/:id', parametricos.update);
    router.delete('/:id', parametricos.delete);
    app.use('/api/parametricos', router);
};