var longestCommonPrefix = function(arr) { 
    var prefix = (arr.length) ? arr[0] : '';
    var i = 1;
    
    while (prefix && i < arr.length) {
        var next = arr[i];   
        while (next.indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
        }
        i++;
    }
    return prefix;
}
