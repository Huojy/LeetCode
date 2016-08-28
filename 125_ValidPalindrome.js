/**
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 * For example,
 * "A man, a plan, a canal: Panama" is a palindrome.
 * "race a car" is not a palindrome.
 * Note:
 * Have you consider that the string might be empty? This is a good question to ask during an interview.
 * For the purpose of this problem, we define empty string as valid palindrome.
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
	//solution 1
    if(s.length===0){
        return true;
    }
    var pattern=/[a-z0-9]/gi;
    var matches=s.match(pattern);
    if(matches===null){
        return true;//字符串中没有字母及数字字符时返回null
    }else{
        var left=0;
        var right=matches.length-1;
        while(left<right){
            //大小写字母相同
            if(matches[left].toLowerCase()!==matches[right].toLowerCase()){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
	//solution 2
	if(s.length===0){
        return true;
    }
    var pattern=/[a-z0-9]/gi;
    var matches=s.match(pattern);
    if(matches===null){
        return true;
    }else{
        var str1="";
        for(var i=matches.length-1;i>=0;i--){
            str1 += matches[i];
        }
        var str2=matches.join('');
        if(str1.toLowerCase()==str2.toLowerCase()){
            return true;
        }else{
            return false;
        }
    }
};