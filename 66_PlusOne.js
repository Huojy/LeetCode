/**
 * Given a non-negative number represented as an array of digits, plus one to the number.
 * The digits are stored such that the most significant digit is at the head of the list.
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    var n=digits.length;
    var x=1;
    for(var i=n-1;i>=0;i--){
       var sum=digits[i]+x;
       x=Math.floor(sum/10);
       digits[i]=sum%10;
       if(x===0){
           break;
       }
    }
    if(x===1){
           digits.splice(0,0,1);
    } 
    return digits;
};