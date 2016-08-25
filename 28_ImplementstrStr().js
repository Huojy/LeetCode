/**
 * Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 //迄今为止最简单的一道题
 var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};