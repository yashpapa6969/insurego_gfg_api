const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');
const { Schema } = mongoose;

const _Type = new Schema({
  _id: { type: String, default: () => uuidv4() },
  title: String,
  description: String,
  profile_pic_filename : [String]


});
var TypeSchema = _Type;
// compile schema to model
var Type = mongoose.model("Type", TypeSchema, "type");
module.exports = Type;