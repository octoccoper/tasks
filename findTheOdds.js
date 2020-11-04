const findOdd = (array) => {
 
let countedNumbers = array.reduce(function (allNumbers, number) { 
  if (number in allNumbers) {
    allNumbers[number]++;
  }
  else {
    allNumbers[number] = 1;
  }
  return allNumbers;
}, {});

for (const number in countedNumbers) {
	if(countedNumbers[number] % 2 !== 0) {
	  return +number;
	}
}

  return 0;
}
