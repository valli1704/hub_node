const Joi = require('joi');

// module.exports=userValidate
exports.userValidate = Joi.object().keys({
    userName: Joi.string().required().min(2).max(15),
    password: Joi.string().required().min(2).max(15),
    email:Joi.string().email().required()
})


// module.exports=userValidate
exports.userLoginValidate = Joi.object().keys({
    password: Joi.string().required().min(2).max(15),
    email:Joi.string().email().required()
})