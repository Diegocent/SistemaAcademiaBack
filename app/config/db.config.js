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
        idle: 10000
    }
};