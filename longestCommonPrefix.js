var longestCommonPrefix = function(strs) {
var resultStr="";
var tempStr=[];
if(strs.length === 1) {
	resultStr = strs[0];
	return resultStr;
} 
else {
var sortStr = strs.sort(function(a, b){return a.length - b.length});
var strFirst = sortStr[0];
for(var i = 0; i < sortStr.length; i++) {
resultStr = "";

for(var j = 0; j < strFirst.length; j++){
if(sortStr[i + 1]!== undefined && sortStr[i]!== undefined){
		if(sortStr[i][j] === sortStr[i + 1][j]) {
			resultStr = resultStr + sortStr[i][j];
			console.log("sortStr[i][j] = ",sortStr[i][j],"resultStr=", resultStr);
        }
		else {
			resultStr = "";
			break;
		}
	}

	}
if(resultStr.length > 0) {
tempStr.push(resultStr);
console.log("tempStr",tempStr);
}
}
resultStr = "";
for(var k = 0; k < tempStr.length; k++){
if(tempStr[k + 1]!== undefined) {
	if(tempStr[k] < tempStr[k + 1]){
		resultStr = tempStr[k];
		console.log("resultStr",resultStr);
	}
	else {
		resultStr = tempStr[k + 1];
		console.log("resultStr",resultStr);
	}
}
	if(tempStr[k] === tempStr[k + 1] || tempStr.length === 1) {
	resultStr = tempStr[k];
		console.log("resultStr",resultStr);
	}
}

return resultStr; 
}	
};
