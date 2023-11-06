const Joi = require('joi');

// module.exports=userValidate
exports.Business = Joi.object().keys({
     userId: Joi.required(),
     businessName: Joi.required(),
     businessTypeId: Joi.required(),
     countryId: Joi.required(),
     stateId: Joi.required(),
     city: Joi.required(),
     pincode: Joi.required(),
     phoneNumber: Joi.required(),
     latitude: Joi.required(),
     longitude: Joi.required(),
     emailId: Joi.required(),
     address: Joi.required(),
     description: Joi.required(),
     websiteUrl: Joi.required(),
     logoImg: Joi.string().uri().required(),
     headerImg: Joi.string().uri().required(),
     businessImg: Joi.string().uri().required(),
})
