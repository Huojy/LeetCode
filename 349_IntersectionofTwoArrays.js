/**
Given two arrays, write a function to compute their intersection.
Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].
Note:
Each element in the result must be unique.
The result can be in any order.
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var nums3=[];
    var result=[];
  	for(var i=0;i<nums1.length;i++){
		for(var j=0;j<nums2.length;j++){
			if(nums1[i] == nums2[j]){
				nums3.push(nums1[i]);
			    for(var k in nums3){
                   if(result.indexOf(nums3[k])==-1){
                      result.push(nums3[k]);
                   }
                }
			}
		}
	}
	return result;
};