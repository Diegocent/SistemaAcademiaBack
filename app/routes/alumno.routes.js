module.exports = (app) => {
  const alumno = require("../controllers/alumno.controller.js");
  var router = require("express").Router();
  router.post("/", alumno.create);
  router.get("/", alumno.findAll);
  router.get("/:id", alumno.findOne);
  router.put("/:id", alumno.update);
  router.delete("/:id", alumno.delete);
  router.get("/ci/:doc", alumno.findAlumnoByCI);
  app.use("/api/alumno", router);
};
