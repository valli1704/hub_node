const { business, businessType, users } = require("../models");
const Jwt = require("jsonwebtoken");
const config = require("../config/config");
const { Business } = require("../validator/business_add_validation");
const condition = { status: 1 };


exports.listBusinessType = async (req, res) => {
    try {
     
     data = await businessType.findAll({where: condition});
     res.status(200).send({message:"data retrieved successfully", data:data})

    }
    catch (err) {
        res.status(500).send({message:err.message})
    }
  }


  exports.addBusiness = async (req, res) => {
    try{

      const userData = req.body;
      const { error, value } = Business.validate(userData);
      if (error) {
        return res.status(400).json({ error: error.details.map(detail => detail.message) });
      } else {
        //CheckValid User
        const data = await users.findAll({where:{ 'id':  req.body.userId}})
        const jsonData =  data.map(user => user.toJSON());
        if(Object.keys(jsonData).length === 0){
          res.status(400).send({message:"user not found"})
        }else{
            console.log("coming")
            var _business= await business.create({
            userId:  req.body.userId,
            businessName: req.body.businessName,
            businessTypeId: req.body.businessTypeId,
            countryId: req.body.countryId,
            stateId: req.body.stateId,
            city: req.body.city,
            pincode: req.body.pincode,
            latitude:req.body.latitude,
            longitude:req.body.longitude,
            email_id:req.body.emailId,
            address: req.body.address,
            description:req.body.description,
            websiteUrl:req.body.websiteUrl,
            logoImg: req.body.logoImg,
            headerImg:req.body.headerImg,
            businessImg:req.body.businessImg,
          });
             res.status(200).send({message:"business created successfully",business:_business})
        }

      }
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
  }