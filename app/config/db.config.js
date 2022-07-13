module.exports = {
  HOST: "localhost",
  USER: "user_academia",
  PASSWORD: "Admin.12345",
  DB: "SistemaAcademia",
  dialect: "mysql",
  pool: {
    max: 30,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
// module.exports = {
//   HOST: "sql716.main-hosting.eu",
//   USER: "u592463271_user_academia",
//   PASSWORD: "Admin.12345",
//   DB: "u592463271_sistemaacademi",
//   dialect: "mysql",
//   pool: {
//     max: 30,
//     min: 0,
//     acquire: 30000,
//     idle: 10000,
//   },
// };