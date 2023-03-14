const schemas = require("../../mongodb/schemas/schemas");
const ImageUtil = require("../../middleware/images/ImageUtil");

const GetAllTypes = async (req, res) => {
  try {
    const typeInsurance = await schemas.Type.find({});
    ImageUtil.GetImageUrls(typeInsurance);
    res.status(200).json({ type: typeInsurance });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = GetAllTypes;