/**
 * Given an integer n, return the number of trailing zeroes in n!.
 * Note: Your solution should be in logarithmic time complexity.
 * @param {number} n
 * @return {number}
 */
  //思路很重要，然而并不是自己想出来的
var trailingZeroes = function(n) {
    var count=0;
    if(n<=0){
        return 0;
    }
    while(n/5!==0){
        n=Math.floor(n/5);
        count+=n;
    }
    return count;
};