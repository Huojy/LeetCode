/**
 * Given two strings s and t, write a function to determine if t is an anagram of s.
 * For example,
	s = "anagram", t = "nagaram", return true.
	s = "rat", t = "car", return false.
 * Note:
 * You may assume the string contains only lowercase alphabets.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    function sortFun(str){
        var a=str.split("");
        a.sort();
        var b=a.join("");
        return b;        
    }
    s=sortFun(s);
    t=sortFun(t);
    while(s.length===t.length){
        if(s===t){
            return true;
        }else{
            return false;
        }
    }
    return false;
};