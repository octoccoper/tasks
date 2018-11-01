
var romanToInt = function (s) {
    var output = 0;
    var result = 0;
    if (s.length > 0) {
        for (var i = 0; i < s.length; i++) {
            switch (s[i]) {
                case "I":
                    result = result + 1;
                    break;
                case "V":
                    result = result + 5;
                    break;
                case "X":
                    result = result + 10;
                    break;
                case "L":
                    result = result + 50;
                    break;
                case "C":
                    result = result + 100;
                    break;
                case "D":
                    result = result + 500;
                    break;
                case "M":
                    result = result + 1000;
                    break;
                default:
                    result = 0;
            }
        }

        if (s.indexOf("IV") !== -1) {
            result = result - 2;
        }

        if (s.indexOf("IX") !== -1) {
            result = result - 2;
        }

        if (s.indexOf("XL") !== -1) {
            result = result - 20;
        }

        if (s.indexOf("XC") !== -1) {
            result = result - 20;
        }

        if (s.indexOf("CD") !== -1) {
            result = result - 200;
        }

        if (s.indexOf("CM") !== -1) {
            result = result - 200;
        }

        if (s.indexOf("DM") !== -1) {
            result = result - 1000;
        }
        return console.log(result);
    }
}
