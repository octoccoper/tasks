var longestCommonPrefix = function(strs) {
var resultStr="";
var sortStr = strs.sort(function(a, b){return a.length - b.length});
for(var i = 0; i < sortStr.length; i++) {
var tempStr = sortStr[i];
for(var j = 0; j < tempStr.length; j++){
		if(sortStr[i][j] === sortStr[i + 1][j]) {
			resultStr = resultStr.concat(sortStr[i][j]);
			console.log(resultStr);
        }
	}
  }
return resultStr;	
};
