const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
        if (Array.isArray(arr)){
          return count + Math.max(...arr.map(item => calculateDepth(item)));
        }
        else return 0;
    }
};
