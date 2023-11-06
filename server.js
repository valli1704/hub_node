const express = require("express");
const cors = require("cors");
const path = require('path');

global.__basedir = __dirname;
console.log(__basedir)
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use('/resources', express.static(path.join(__dirname, 'resources')));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./app/models");
// const Role = db.role;

db.sequelize.sync();

require("./app/routers/userRouters")(app);
require("./app/routers/BusinessRouters")(app);
require("./app/routers/CommonRouters")(app);

app.listen(8000,function(){
  console.log("port is running");
});


