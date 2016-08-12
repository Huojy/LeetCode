/**
 * Given an integer, write a function to determine if it is a power of two.
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
    if(n<=0||n>2147483647){
        return false;
    }
    while(n>1){
        n /= 2;
    }
    if(n===1){
        return true;
    }else{
        return false;
    }
};