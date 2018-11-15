var lengthOfLastWord = function(s) {
if(s.length > 0){
	var temp = s.trim().split(" ");
    return temp[temp.length-1].length;	
}
    else return 0;
};
