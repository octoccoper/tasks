var firstUniqChar = function(s) {
var temp;

if(s.length === 0) {
	return 0;	
}

if(s.length > 0) {
    for(var i = 0; i < s.length; i++) {
		if((s[i]!==s[i+1]) && (s[i+1]!==s[i+2])) {
			return	temp = i+1;
		}
		else temp =-1;
	}
} 

return temp;
};
