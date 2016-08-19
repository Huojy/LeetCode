/**
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ? n/2 ? times.
 * You may assume that the array is non-empty and the majority element always exist in the array.
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
     function compare(value1,value2){
         if(value1<value2){
             return -1;
         }else if(value1>value2){
             return 1;
         }else{
             return 0;
         }
     }//如何摆脱这个愚蠢的compare()函数/(ㄒoㄒ)/~~
    var n=nums.length;
    if(n===0){
        return 0;
    }else{
        var arr=nums.sort(compare);
        for(var i=0;i<n;i++){
            if(arr[i]===nums[i+Math.floor(n/2)]){
                return nums[i];
            }
        }
        return nums[n-1];
    }
};