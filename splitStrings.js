const solution = (str) => {
  let result = [], array;
  
  array = str.split('');
  
  for(let i = 0; i < array.length; i+=2) {
    if(!array[i+1]) {
        result.push(array[i]+'_');
        return result;
    }
     result.push(array[i]+array[i+1]);
  }

  return result;
}
