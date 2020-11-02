function isStringPalindrome(str){

let reverseStr;

 if(typeof str !== "string") {
    return false;
 }

reverseStr = str.split('').reverse().join('');

if(str === reverseStr) {
    return true;
} else {
    return false;
}

} 
