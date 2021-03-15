module.exports = function repeater(str, options) {
  let repeatTimes  = options.repeatTimes;
  let separator = options.separator || '+';
  let addition = options.addition !== undefined ? '' + options.addition : '';
  let additionStr = '';
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || '';

if  (repeatTimes > 0 ){ 
  (str + additionStr + separator).repeat(repeatTimes - 1) + str + additionStr
}
 else str + additionStr;
  return repeatTimes
};
  
