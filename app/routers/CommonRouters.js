const { countryList , stateList, upload} = require("../controller/CommonController");


module.exports = function (app) {
    app.use(function(req,res,next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
            
        );
        next();
    })
    app.post("/api/countryList", countryList);
    app.post("/api/stateList", stateList);
    app.post("/api/uploadImage", upload);
}