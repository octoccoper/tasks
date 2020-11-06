const persistence = (num) => {
  let result = 1, arr, persistVal = 0;
  
  arr = num.toString().split('');

    while(arr.length !== 1) {
        for(let i = 0; i < arr.length; i++) {
            result *= arr[i]; 
        }

        persistVal++;
        arr = result.toString().split('');
        result = 1;
    }
 
  return persistVal;
}
