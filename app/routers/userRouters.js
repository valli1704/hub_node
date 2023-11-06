const { createUser, logInUser} = require("../controller/userController");
const { checkEmail, validateSchema } = require("../middleware");


module.exports = function (app) {
    app.use(function(req,res,next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
            
        );
        next();
    })
   // app.post("/api/survivorSignUp", [verifySignUp.checkDuplicateEmail, verifySignUp.checkRolesExisting],controller.SurvivorSignUp)
    app.post("/api/createUser", checkEmail,createUser,);
    app.post("/api/logInUser", logInUser,);
}