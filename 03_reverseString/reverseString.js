const reverseString = function(str) {
  let arr = str.split('');
  let newStr = '';
  for( let i = arr.length - 1; i >= 0; i-- ){
    newStr += arr[i];
  }
  return newStr;
};

// Do not edit below this line
module.exports = reverseString;
