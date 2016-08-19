/**
 * Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
 * Do not allocate extra space for another array, you must do this in place with constant memory.
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    var n=nums.length;
    for(var i=0;i<n;i++){
        if(nums[i]===nums[i-1]){
            nums.splice(i,1);
            n -= 1;
            i -= 1;
        }
    }
};