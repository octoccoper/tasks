function reverse(str){
    let newStr, tempStr;   

    newStr = str.substring(str.length - 1, str.length);

    tempStr =  str.substring(0, str.length - 1);

    if(tempStr.length === 0) {
        return newStr+tempStr;
    } else {
        return newStr+reverse(tempStr);
    }

}
