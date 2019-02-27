function beautifyString(org, excl) {
  let temp = org.split(" ");
  let exclTemp = excl.split(" ");
  let newString = "";
  for (let i = 0; i < temp.length; i++) {
    console.log("temp[", i, "]", temp[i]);
    if (temp[i].match(/[^a-zA-Z]/g)) {
      let some = temp.splice(i, 1);
      console.log("remove ", some);
      i--;
    } else {
      newString += temp[i] + " ";
    }
  }
  console.log("String before replacing: ", newString);
  for (let j = 0; j < exclTemp.length; j++) {
    let exclTempItem = exclTemp[j];
    console.log("exclTemp[", j, "] = ", exclTempItem);
    let currentString = newString.split(" " + exclTempItem).join("");
    console.log(currentString);
    console.log("String after replacing: ", currentString);
    newString = currentString;
  }
  return newString;
}

// data for checking
beautifyString("I like big 999 kldhg@vui noise bananas butts and I 57 lll` tlh5 $@$% h% can not lie ^fgh &tt @fg 65", "noise bananas");
