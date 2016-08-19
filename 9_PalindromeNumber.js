/**
 * Determine whether an integer is a palindrome. Do this without extra space.
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if(x>=0&&x<2147483647){
        x=x.toString();
        var i=0;
        while(x.charAt(i)===x.charAt(x.length-1-i)&&i<x.length-1-i){
                i++;
        }
        if(x.length%2===0&&i===x.length/2){
            return true;
        }else if(x.length%2!==0&&i===(x.length-1)/2){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
};