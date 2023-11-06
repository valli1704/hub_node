const { country, state } = require("../models");
const user = require("../models/business")
const Jwt = require("jsonwebtoken");
const config = require("../config/config");
const { userValidate } = require("../validator/statelist_validate");
const uploadFile = require("../middleware/upload");
const fs = require('fs');
const path = require('path');

exports.countryList = async (req, res) => {
    try {

       data = await country.findAll();
       res.status(200).send({message:"data retrieved successfully", data:data})
    }
    catch (err) {
        res.status(500).send({message:err.message})
    }
  }


  exports.stateList = async (req, res) => {
    try {

      const userData = req.body;
      const { error, value } = userValidate.validate(userData);
      if (error) {
        return res.status(400).json({ error: error.details.map(detail => detail.message) });
      } else {
        data = await state.findAll({where:{'country_id' : userData.country_id}});
        res.status(200).send({message:"data retrieved successfully", data:data})
      }
    }
    catch (err) {
        res.status(500).send({message:err.message})
    }
  }


   exports.upload = async(req, res) =>{

     try {
      await uploadFile(req, res);

      if (req.file == undefined) {
        return res.status(400).send({ message: "Please upload a file!" });
      }
      const baseUrl = `${req.protocol}://${req.get('host')}`;
      const imagePath = path.join(baseUrl, 'resources/static/assets/uploads/', req.file.originalname);
      res.status(200).send({
        message: "Uploaded the file successfully ", imagePath: imagePath
      });
    } catch (err) {
      res.status(500).send({
        message: `Could not upload the file: ${req.file.originalname}. ${err}`,
      });
    }
    }


   