var longestCommonPrefix = function(strs) {
var newStr, currentIndex = 0;

strs.find(function(value, index) {
console.log("we are in find cycle");
console.log("currentIndex = ", currentIndex);
console.log("value.substring(currentIndex = ",value.substring(currentIndex));
if(value.substring(currentIndex) === value.substring(currentIndex+1)){
console.log("currentIndex in cycle = ", currentIndex);
console.log("value.substring(currentIndex)= ", value.substring(currentIndex));
console.log("value.substring(currentIndex+1)", value.substring(currentIndex+1));
    newStr = value.substring(currentIndex);

}
currentIndex++;
});
    return newStr;
};
