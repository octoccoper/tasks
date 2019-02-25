function beautifyString(org, excl) { 
  let pattern = new RegExp(/[^A-z]*/g);
  let newString = org.replace(pattern,'');
  return newString;
}