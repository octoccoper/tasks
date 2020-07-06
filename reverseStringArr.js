function reverse(str){
    let newStr = [];
    let tempStr = str.split('');
	while(tempStr.length !== 0) {
    	newStr.push(tempStr[tempStr.length - 1]);
		tempStr.pop();
	} 
		return newStr.join('');
}
