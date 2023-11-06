const Joi = require('joi');

// module.exports=userValidate
exports.userValidate = Joi.object().keys({
    country_id: Joi.required(),
})