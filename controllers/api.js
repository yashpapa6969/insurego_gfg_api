const GetAllTypes = require('../controllers/Type/getalltypes');
const NewInsuranceTypes = require('../controllers/Type/newtype');



var apis = {
    GetAllTypes : GetAllTypes,
    NewInsuranceTypes : NewInsuranceTypes,

}

module.exports = apis;
