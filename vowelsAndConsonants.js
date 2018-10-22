function vowelsAndConsonants(s) {
    var arr = s, arrVowels = [], arrConsonants = [];
    
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i].match(/[aeiou]/g)) {            
            arrVowels.push(arr[i]);
        }
        else { 
            arrConsonants.push(arr[i]);
        }
    }
    
    for (let i = 0; i < arrVowels.length; i++) { 
        console.log(arrVowels[i]);
    }

    for (let i = 0; i < arrConsonants.length; i++) {
        console.log(arrConsonants[i]);
    }
}
