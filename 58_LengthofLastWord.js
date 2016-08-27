/**
 * Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
 * If the last word does not exist, return 0.
 * Note: A word is defined as a character sequence consists of non-space characters only.
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    s=s.trim();
    var strs=s.split(' ');
    var num=strs[strs.length-1].length;
    return num;
};