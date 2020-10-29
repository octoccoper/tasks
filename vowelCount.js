const getCount = (str) => {
    
  let vowelsCount = 0;
  
  let strVowels = str.match(/[a,e,i,o,u]/g);
  
  if(!strVowels) {
    return vowelsCount = 0;
  }
    
    vowelsCount = strVowels.length;
  
  return vowelsCount;
}
