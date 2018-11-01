var output = 0;
var result = 0;
var romanToInt = function(s) {
var romanNumber = s.split("");
if(romanNumber.length > 0) {
for(var i = 0; i < romanNumber.length; i++) {
switch(romanNumber[i]) {
    case "I":
        romanNumber[i] = 1;
result = result + romanNumber[i];
		break;
    case "V":
        romanNumber[i]= 5;
result = result + romanNumber[i];
		break;
    case "X":
        romanNumber[i] = 10;
result = result + romanNumber[i];
		break;
    case "L":
        romanNumber[i] = 50;
result = result + romanNumber[i];
		break;
    case "C":
        romanNumber[i] = 100;
result = result + romanNumber[i];
		break;
    case "D":
        romanNumber[i] = 500;
result = result + romanNumber[i];
		break;
    case "M":
        romanNumber[i] = 1000;
result = result + romanNumber[i];
		break;
    default:
	romanNumber = undefined;
       }

for (var j = 1; j < romanNumber.length; j++) {

if(romanNumber[j] < romanNumber[i]) {
output = (romanNumber[i] + romanNumber[j]) - (romanNumber[i] - romanNumber[j]);
result = result - output;
}
}
}
}
 else if (romanNumber.length < 0){
	result = -1;
}
if((s.length == 2) && (romanNumber[1] > romanNumber[0])) {
result = romanNumber[1] - romanNumber[0];
}

return result;
};
