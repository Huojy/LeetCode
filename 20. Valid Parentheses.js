/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 * @param {string} s
 * @return {boolean}
 */
 //stack
 var isValid = function(s) {
    var lstr=[];
    for(var i=0;i<s.length;i++){
        if(s[i]==='('||s[i]==='['||s[i]==='{'){
            lstr.push(s[i]);
        }else{
            if(lstr.length===0){
                return false;
            }
            var temp=lstr[lstr.length-1];
            if(temp==='('&&s[i]===')'||temp==='['&&s[i]===']'||temp==='{'&&s[i]==='}'){
                lstr.pop();
            }else{
                return false;
            }
        }
    }
    if(lstr.length===0){
        return true;
    }else{
        return false;
    }
};