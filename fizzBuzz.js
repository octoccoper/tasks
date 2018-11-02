/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var arrayNumbers = [];
    for(let i = 1; i <= n ; i++) {
        if(i % 3 === 0) {
            arrayNumbers[i-1] = "Fizz";
        }
       
        if(i % 5 === 0) {
            arrayNumbers[i-1] = "Buzz";
        }
        
        if(!(i % 3 === 0) && (!(i % 5 === 0))) {
          arrayNumbers[i-1] = i.toString();  
        }
        
        if((i % 3 === 0) && (i % 5 === 0)) {
            arrayNumbers[i-1] = "FizzBuzz";
        }
    }
    return arrayNumbers;
};
