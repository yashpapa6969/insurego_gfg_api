const schemas = require("../../mongodb/schemas/schemas");
const ImageUtil = require("../../middleware/images/ImageUtil");


const NewType = async (req, res) => {
  if (!req.headers.authorization) {
    res.status(400).json({ message: "token is required" });
    return;
  }
  let profile_pic_filename = ImageUtil.GetFilenameArray(req);
  // a document instance
  var typeInsurance = new schemas.Type({
    title: req.body.title,
    description: req.body.description,
    profile_pic_filename: profile_pic_filename,
  });

  // save model to database
  typeInsurance.save(function (err) {
    if (err) res.status(400).json({ message: error.message });
    else {
      console.log(" saved to insurace type collection.");
      res
        .status(200)
        .json({ message: "successfully registered new insurance type" });
    }
  });
};

module.exports = NewType;