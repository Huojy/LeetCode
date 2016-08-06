/**
 * Implement atoi to convert a string to an integer.
 * Hint: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.
 * Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.
 * @param {string} str
 * @return {number}
 */
 var myAtoi = function(str) {
    var mystr="";
　  function ltrim(mstr){ //删除左边的空格
　　     return mstr.replace(/(^\s*)/g,"");
　　}
　　str=ltrim(str);
    for(var i=0;i<str.length;i++){
       var num=str.charAt(i);
       if(!(num>="0"&&num<="9")){
            if((str.charAt(i)==="+"||str.charAt(i)==="-")&&(str.charAt(i+1)>="0"&&str.charAt(i+1)<="9")){
                mystr=mystr+num;
            }else{
                break;
            }
        }else{
            mystr += num;
        }
    }
    var result;
    if(mystr!==""){
        var mynumber=parseInt(mystr);
        if(mynumber>2147483647){
            result=2147483647;
        }else if(mynumber<-2147483648){
            result=-2147483648;
        }else{
            result=mynumber;
        } 
    }else{
        result=0;
    }
    return result;
};