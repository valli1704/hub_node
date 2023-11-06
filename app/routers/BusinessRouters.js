const { listBusinessType, addBusiness } = require("../controller/BusinessController");


module.exports = function (app) {
    app.use(function(req,res,next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
            
        );
        next();
    })
    app.post("/api/listBusinessType", listBusinessType,);
    app.post("/api/addBusiness", addBusiness,);
}