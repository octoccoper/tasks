var output = 0;
var romanToInt = function(s) {
s.split("").forEach(function(key) {
if(s.length === 1)
switch(key) {
    case "I":
        output = 1;
		break;
    case "V":
        output = 5;
		break;
    case "X":
        output = 10;
		break;
    case "L":
        output = 50;
		break;
    case "C":
        output = 100;
		break;
    case "D":
        output = 500;
		break;
    case "M":
        output = 1000;
		break;
    default:
	output = 0;
       } 
    });
return sum;
};
