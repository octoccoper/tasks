function add(n){
  var total = n;
  
  function addingFunction(m) {
    total += m;
    return addingFunction;
  }
  
  addingFunction.toString = function() {
    return total;
  };
  
  return addingFunction;
}
