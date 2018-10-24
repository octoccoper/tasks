var reverse = function (x) {
    if ((x > Math.pow(2, 31)) || (x < -Math.pow(2, 31) - 1)) {
        return 0;
    }
    else {
        var sign = Math.sign(x);
        var currentString = x.toString();
        var splitString = [];
        for (var i = currentString.length; i >= 0; i--) {
            if (!isNaN(currentString[i])) {
                splitString.push(currentString[i]);
            }
        }

        joinString = splitString.join("");
        var splittedNumber = parseInt(joinString);

        if (sign === -1) {
            splittedNumber = -Math.abs(splittedNumber);
        }
        if ((splittedNumber > Math.pow(2, 31)) || (splittedNumber < -Math.pow(2, 31) - 1)) {
            return 0;
        } else {
            return splittedNumber;
        }
    }

