/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
var isPalindrome = function(x) {
var startVar = x + '' ;    
return startVar == (x + '').split("").reverse().join("");
};
