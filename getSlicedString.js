var setLengthStr = 150;
var str = prompt("Please enter the string:");
var strLength =  str.length;
if(strLength > setLengthStr) {
    str.slice(0,setLengthStr);
}
else {
   console.log("You have written " + strLength + ", you have " + (setLengthStr-strLength) + " characters left."); 
}

