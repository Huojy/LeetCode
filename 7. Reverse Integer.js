/**
 * Reverse digits of an integer.
 * Example1: x = 123, return 321
 * Example2: x = -123, return -321
 * @param {number} x
 * @return {number}
 */
 //其实我还不明白这么简单粗暴的防止越界的写法会带来问题
 var reverse = function(x) {
    if(x>=-2147483648&&x<=2147483647){
        var flag;
        var y=0;
        if(x<0){
             flag=true;
        }
        x=Math.abs(x);
        while(x>0){
            y=x%10+y*10;
            x=Math.floor(x/10);
        }
        if(flag){
            y=-y;
        }
        if(y>=-2147483648&&y<=2147483647){
            return y;  
        }else{
            return 0;
        }
    }
};