const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    let n = date.getMonth();
    let m;
    if  (n == 0 || n == null || date.getYear() < 1970 ) return 'Unable to determine the time of year!';
    if (n>=0 && n<=1 && n==11 || m === "winter") return "winter";
    if (n>=2 && n<=4 ||m === "spring") return "spring";
    if (n>=5 && n<=7 ||m ==="summer") return "summer";
    if (n>=8 && n<=10 ||m ==="autumn") return "fall";
    else throw new Error('');
    }
