const express = require('express');
const router = express.Router();
const apis = require("../controllers/api")






router.get('/getalltypes',(req,res) => {apis.GetAllTypes(req,res)});




module.exports = router;
