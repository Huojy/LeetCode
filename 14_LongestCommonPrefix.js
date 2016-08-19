/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    if(strs.length===0){
        return "";
    }else if(strs.length===1){
        return strs[0];
    }else{
        strs=strs.sort(strs.length);
        var str="";
        for(i=0;i<strs[0].length;i++){
            var temp=strs[0][i];
            for(var j=1;j<strs.length;j++){
                if(strs[j][i]!==temp){
                    return str;
                }
            }
            str += temp;
        }
       return str; 
    }
};
