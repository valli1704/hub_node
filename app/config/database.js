module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "hep@123",
    DB: "hub_db",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    development: {
    username: 'root',
    password: 'hep@123',
    database: 'hub_db',
    host: 'localhost',
    dialect: 'mysql',
  },
  };