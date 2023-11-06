const { users } = require("./models");

exports.checkEmail = async (req,res,next) => {
    try{
        var _users = await users.findOne({
            where: {
              email: req.body.email, 
            },
           
          }); 
        if(_users!=null) {
            res.status(400).send({message:"email is already exists"})
           }
           next()
    }
    catch(err) {
        console.log(err)
    }
};

