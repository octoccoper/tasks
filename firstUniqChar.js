var firstUniqChar = function(s) {
var indexData;
if(s.length === 0 || (typeof s !== "string")) {
	indexData = -1;
}
else {
    for(var i = 0; i < s.length; i++){
		console.log("current i = ", i );
		console.log("s.charAt(i) = ",s.charAt(i) );
		console.log("s.lastIndexOf(s.charAt(i))",s.lastIndexOf(s.charAt(i)));
        if(s.charAt(i) === s.lastIndexOf(s.charAt(i)){
			indexData = i;
			break;
        }
        
    }
}
return indexData;
};
