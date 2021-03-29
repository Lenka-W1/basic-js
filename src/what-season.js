const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
 if(date == undefined) return 'Unable to determine the time of year!';
 if(isNaN(date)) throw new Error();
 let season = date.getMonth() + 1;
 if(season == 12 || season == 1 || season == 2)
  return 'winter';
 if(season == 3 || season == 4 || season == 5)
  return 'spring';
 if(season == 6 || season == 7 || season == 8)
  return 'summer';
 if(season == 9 || season == 10 || season == 11)
  return 'autumn';

};
