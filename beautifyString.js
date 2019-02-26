function beautifyString(org, excl) { 
  let pattern = new RegExp(/[^A-z]*/g);
  let newString = org.replace(pattern, '');
  for (let i = 0; i < temp.length; i++) {
    if (org[i].match(/\\d+\\.?\\d*/g)) {
      org.splice(i, 1);
    } else { 
      newString += org[i];
    }
  }
  return newString;
}