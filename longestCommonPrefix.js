var longestCommonPrefix = function(strs) {
var resultStr=[];
var tempStr=[];
var sortStr = strs.sort(function(a, b){return a.length - b.length});
var strFirst = sortStr[0];
for(var i = 0; i < sortStr.length; i++) {

for(var j = 0; j < strFirst.length; j++){
if(sortStr[i + 1]!== undefined){
		if(sortStr[i][j] === sortStr[i + 1][j]) {
			resultStr.push(sortStr[i][j]);
			console.log("sortStr[i][j] = ",sortStr[i][j],"resultStr=", resultStr);
        }
	}

	}
resultStr = resultStr.join("");
tempStr.push(resultStr);
console.log("tempStr",tempStr);
resultStr=[];
  }
tempStr.filter(function (x, i, a) { 
    return a.indexOf(x) == i; 
console.log("tempStr",tempStr);
});
return resultStr;	
};
