const sortArray = ( array ) => {

    let oddArr = [],
    evenArr = [],
    resultArr = [];
  
  if(!array.length) {
    return array;
  }
  
  for(let i = 0; i < array.length; i++){
    if(array[i] === 0){
       continue;     
    }

    if(array[i] % 2 === 0) {
       evenArr.push(array[i]);
    }
    else {
       oddArr.push(array[i]);
    }
  }
  
oddArr.sort((a,b) => a - b);


for(let j = 0; j < array.length; j++) {
    if(array[j] === 0) {
        resultArr.push(array[j]);
        continue;
    }

    if(array[j] % 2 === 0) {
       resultArr.push(evenArr.shift());
    }
    else {
       resultArr.push(oddArr.shift());
    }
}

  return resultArr;
}
