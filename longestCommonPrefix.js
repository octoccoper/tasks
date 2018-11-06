var longestCommonPrefix = function(strs) {
var resultStr="";
var sortStr = strs.sort(function(a, b){return a.length - b.length});
var strFirst = sortStr[0];
for(var i = 0; i < sortStr.length; i++) {
var tempStr = sortStr[i];
for(var j = 0; j < strFirst.length; j++){
if(sortStr[i + 1]!== undefined){
		if(sortStr[i][j] === sortStr[i + 1][j]) {
			resultStr = resultStr.concat(sortStr[i][j]);
			console.log(resultStr);
        }

}
	}

  }
return resultStr;	
};
