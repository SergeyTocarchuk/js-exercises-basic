const palindromes = function (str) {
  let firstStr = str.toLowerCase().replace(/[^A-Za-z]/g, "");
  let secondStr = '';
  let tempStr = firstStr.split(''); 
  for( let i = firstStr.length - 1; i >= 0; i-- ){
    secondStr += tempStr[i];
  }
  if( firstStr === secondStr ){
    return true;
  } else return false;
};

// Do not edit below this line
module.exports = palindromes;
