const fibonacci = function(index) {
  if( index < 0 ) return 'OOPS';
  if( index < 2 ) return 1;

  let arr = [1, 1];
  for( let i = 0; i < index - 2; i++ ){
      let tempNum = arr[i] + arr[i + 1];
      arr.push(tempNum);
      console.log(arr);
  }
  return arr[index - 1];
};

// Do not edit below this line
module.exports = fibonacci;
