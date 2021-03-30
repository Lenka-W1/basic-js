const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return Array.isArray(arr) ? 1 + arr.reduce((max, val) =>
     Math.max(max, this.calculateDepth(val)),0) : 0;
}
};
