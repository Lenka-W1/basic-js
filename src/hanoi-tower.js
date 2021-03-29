const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  disksNumber = 2**disksNumber-1;
  turnsSpeed = Math.floor((disksNumber * 3600)/turnsSpeed);
  return {
   turns: disksNumber,
   seconds: turnsSpeed
 }
};
