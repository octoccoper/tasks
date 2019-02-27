function beautifyString(org, excl) { 
  let temp = org.split(" ");
  let newString = "";
  for (let i = 0; i < temp.length; i++) {
	console.log("temp[",i,"]", temp[i]);
    if (temp[i].match(/[^a-zA-Z]/g)) {
      let some = temp.splice(i, 1);
		console.log("remove ", some);
		i--;
    } else { 
      newString += temp[i] + " ";
    }
  }
  return newString;
}