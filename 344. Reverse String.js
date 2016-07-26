/*
 Write a function that takes a string as input and returns the string reversed.
 Example:
 Given s = "hello", return "olleh".
 @param {string} s
 @return {string}
 */
var reverseString = function(s) {
    var result="";
    for(var i=s.length;i>0;i--){
        result=result+s.charAt(i-1);
    }
    return result;
};
//另一种实现方式
var reverseString = function(s) {
    return s.split('').reverse().join('');
}; //reverse()方法是数组中的，不能直接使用