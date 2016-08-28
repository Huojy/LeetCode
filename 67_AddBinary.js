/**
 * Given two binary strings, return their sum (also a binary string).
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 //第一个AC过100%诶！
 var addBinary = function(a, b) {
    if(a.length<b.length){
        return addBinary(b,a);
    }
    for(var i=b.length;i<a.length;i++){
        b='0'+b;
    }
    var carry=0;
    var result='';
    for(var j=a.length-1;j>=0;j--){
        var sum=parseInt(a[j])+parseInt(b[j])+carry;
        if(sum===0){
            result='0'+result;
        }else if(sum==1){
            result='1'+result;
            carry=0;
        }else if(sum==2){
            result='0'+result;
            carry=1;
        }else{
            result='1'+result;
            carry=1;
        }
    }
    if(carry==1){
        result='1'+result;
    }
    return result;
};