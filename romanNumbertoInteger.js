var output = 0;
var romanToInt = function(s) {
var romanNumber = s.split("");
if(romanNumber.length > 0) {
for(var i = 0; i < romanNumber.length; i++) {
switch(romanNumber[i]) {
    case "I":
        romanNumber[i] = 1;
console.log(romanNumber[i]);
		break;
    case "V":
        romanNumber[i]= 5;
console.log(romanNumber[i]);
		break;
    case "X":
        romanNumber[i] = 10;
console.log(romanNumber[i]);
		break;
    case "L":
        romanNumber[i] = 50;
console.log(romanNumber[i]);
		break;
    case "C":
        romanNumber[i] = 100;
console.log(romanNumber[i]);
		break;
    case "D":
        romanNumber[i] = 500;
console.log(romanNumber[i]);
		break;
    case "M":
        romanNumber[i] = 1000;
console.log(romanNumber[i]);
		break;
    default:
	romanNumber = undefined;
       }
for (var j = 1; j < romanNumber.length; j++) {
console.log("yes, we are in second for!");
if(romanNumber[j] < romanNumber[i]) {
console.log("romanNumber[i]",romanNumber[i]);
console.log("romanNumber[j]",romanNumber[j]);
output = output + romanNumber[i] - romanNumber[j]; 
console.log(output);
}
}
}
 }
 else {
	output = -1;
}

console.log(romanNumber);
console.log(output);
};
