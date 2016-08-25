/**
 * Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var getSum = function(a, b) {
    function add(a,b){
        var sum=a^b;//按位异或即按位加
        var carry=(a&b)<<1;//计算进位
        if(carry!==0){
            return add(sum,carry);
        }
        return sum;
    }
    return add(a,b);
};
 