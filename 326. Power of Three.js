/**
 * Given an integer, write a function to determine if it is a power of three.
 * Follow up:
 * Could you do it without using any loop / recursion?
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    //找到范围内3的幂最大值
    var maxPower=parseInt(Math.pow(3,parseInt(Math.log(2147483647)/Math.log(3))));
    //如果n为此最大值的公约数，那么n为3的幂
    if(n>0 && maxPower % n === 0 ){
            return true;
    }else{
            return false;
    }
};