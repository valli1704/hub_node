const { users } = require("../models");
const user = require("../models/user")
const Jwt = require("jsonwebtoken");
const config = require("../config/config");
var bcrypt = require("bcryptjs");
const { userValidate, userLoginValidate } = require("../validator/user_validate");


exports.createUser = async (req, res) => {
    try {

      const userData = req.body;
      const { error, value } = userValidate.validate(userData);
      if (error) {
        return res.status(400).json({ error: error.details.map(detail => detail.message) });
      } else {
          var _users= await users.create({
            userName:  req.body.userName,
            email: req.body.email,
            password:bcrypt.hashSync(req.body.password,8)
          });
        res.status(200).send({message:"Users created successfully",users:_users})
      }
    }
    catch (err) {
        res.status(500).send({message:err.message})
    }
  }

  /**
   * Check Valid User*/
  exports.logInUser = async(req, res) => {
    try {
       const userData = req.body;
       const { error, value } = userLoginValidate.validate(userData);
        if (error) {
          return res.status(400).json({ error: error.details.map(detail => detail.message) });
        } else {
            const data = await users.findAll({where:{ 'email':  req.body.email}})
            const jsonData =  data.map(user => user.toJSON());
            if(Object.keys(jsonData).length === 0){
              
              res.status(400).send({message:"user not found"})
            }else{
              //check the password
              const passwordMatch = bcrypt.compareSync(req.body.password, jsonData[0]['password']);
              if (passwordMatch) {
                res.status(200).send({message:"userLogin successfully", "user_id" : jsonData[0]['id']})
              } else {
                res.status(400).send({message:"Invalid password"})
              }
            }
        }
      }
      catch (err) {
        res.status(500).send({message:err.message})
    }
  }