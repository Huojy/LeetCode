/**
 * Given a positive integer, return its corresponding column title as appear in an Excel sheet.
 * For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
	
 * @param {number} n
 * @return {string}
 */
 //十进制转为二十六进制
 var convertToTitle = function(n) {
    var str="";
    if(n<=26){
        str=String.fromCharCode(n-1+65);
    }else{
        while(n>0){
            str=String.fromCharCode((n-1)%26+65)+str;
            n=Math.floor((n-1)/26);
        }
    }
     return str;
};