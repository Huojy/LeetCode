/**
 * Compare two version numbers version1 and version2.
 * If version1 > version2 return 1, if version1 < version2 return -1, otherwise return 0.
 * You may assume that the version strings are non-empty and contain only digits and the . character.
 * The . character does not represent a decimal point and is used to separate number sequences.
 * For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
  //感觉代码太冗长，不过51.56%稍微心安
var compareVersion = function(version1, version2) {
    function addZero(nums1, nums2){
        var len,i;
        if(nums1.length<nums2.length){
            len=nums2.length;
            for(i=0;i<len;i++){
                nums1.push('0');
            }
        }
        if(nums1.length>nums2.length){
            len=nums1.length;
            for(i=0;i<len;i++){
                nums2.push('0');
            }
        }
    }
    function compare(nums1,nums2){
        var len=nums1.length<=nums2.length?nums1.length:nums2.length;
        for(var i=0;i<len;i++){
            if(parseInt(nums1[i])<parseInt(nums2[i])){
                return -1;
            }else if(parseInt(nums1[i])>parseInt(nums2[i])){
                return 1;
            }else{
                continue;
            }
        }
        return 0;
    }
    if(version1.indexOf('.')==-1&&version2.indexOf('.')==-1){
        if(parseInt(version1)>parseInt(version2)){
            return 1;
        }else if(parseInt(version1)<parseInt(version2)){
            return -1;
        }else{
            return 0;
        }
    }else{
        var nums1=version1.split('.');
        var nums2=version2.split('.');
        if(nums1.length==nums2.length){
            return compare(nums1,nums2);
        }else{
            addZero(nums1, nums2);
            return compare(nums1,nums2);
        }
    }
};