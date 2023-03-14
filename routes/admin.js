const express = require('express');
const router = express.Router();
const apis = require("../controllers/api")
const file_upload = require('../middleware/multer/FileUpload');



//router.post('/getalltyeps',(req,res) => {apis.GetAllTypes(req,res)});
router.post('/newInsuranceType',file_upload.array('profile_pic',1),(req,res) => {apis.NewInsuranceTypes(req, res)});




module.exports = router;
