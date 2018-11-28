function fibonacciGenerator (n) {
  var newArr = [];
  for(var i = 0; i < n; i++){
      if(i > 1) {
      newArr[i] = newArr[i - 2] + newArr[i - 1];
      }
      else {
      newArr[i] = i;    
      }
  }
  return newArr;
}
