const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
if(typeof sampleActivity !== 'string') return false;
let carbon = parseFloat(sampleActivity);
if(carbon <=0 || carbon > 15 || isNaN(carbon)) return false;
let result = (Math.log(MODERN_ACTIVITY/carbon))/(0.693/HALF_LIFE_PERIOD);
  return Math.ceil(result);
};
