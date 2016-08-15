/**
 * Related to question Excel Sheet Column Title
 * Given a column title as appear in an Excel sheet, return its corresponding column number.
 * For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 

 * @param {string} s
 * @return {number}
 */
 var titleToNumber = function(s) {
    var num=0;
    var x,y;
    if(s.length===1){
        num=s.charCodeAt(0)-64;
    }else{
        for(var i=0;i<s.length;i++){
            num =num*26+s.charCodeAt(i)-64;
        }
    }
    return num;
};