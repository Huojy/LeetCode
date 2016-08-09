/**
 * Write an algorithm to determine if a number is "happy".
 * A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    if(n<=0){
        return false;
    }
	//将计算出的每组平方和存在一个数组里面看是否有重复（循环），若有返回false，没有如果为1则返回true
    var ln=n;
    var record=[];
    while(ln<2147483647){
        var x=record.indexOf(ln);
        if(x>0){
            return false;
        }else{
            record.push(ln);
        }
        ln=getSquareSum(ln);
        if(ln===1){
            return true;
        }
    }
    return false;
	//定义一个计算给定数字每组平方和
    function getSquareSum(n){
        var sum=0;
        while(n!==0){
            sum += Math.pow(n%10,2);
            n=Math.floor(n/10);
        }
        return sum;
    }
};