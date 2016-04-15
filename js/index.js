// Currently only supports the main modules and the Census module
var CitySDK = require('./citysdk');
var CensusModule = require('./citysdk.census');

// Default
module.exports = CitySDK;

// Sub-modules
module.exports.modules = {
	CensusModule: CensusModule
};
