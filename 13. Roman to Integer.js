/**
 * Given a roman numeral, convert it to an integer.
 * Input is guaranteed to be within the range from 1 to 3999.
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    function roman(a){
        switch(a){
            case "I":
                return 1;
            case "X":
                return 10;
            case "C":
                return 100;
            case "M":
                return 1000;
            case "V":
                return 5;
            case "L":
                return 50;
            case "D":
                return 500;
        }
    }
    var result=0;
    var max="I";
    for(var i=s.length-1;i>=0;i--){
        if(roman(s[i])>=roman(max)){
            max=s[i];
            result += roman(s[i]);
        }else{
            result -= roman(s[i]);
        }
    }
    return result;
};