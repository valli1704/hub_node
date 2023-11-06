const config = require('../config/database');
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;



try {
     sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  db.users = require('./user')(sequelize,Sequelize);
  db.business = require('./business')(sequelize,Sequelize);
  db.country = require('./country')(sequelize,Sequelize);
  db.state = require('./state')(sequelize,Sequelize);
  db.businessType = require('./business_type')(sequelize,Sequelize);

  module.exports=db;