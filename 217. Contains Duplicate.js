/**
 * Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
     function compare(value1,value2){
         if(value1<value2){
             return -1;
         }else if(value1>value2){
             return 1;
         }else{
             return 0;
         }
     }     
     var arr=nums.sort(compare);
     var i=1;
     while(i<arr.length){
        if(arr[i]===arr[i-1]){
            return true;
        }
         i++;
     }
     return false;
	/*for循环遍历超时
	var arr=[];
    for(var i=0;i<nums.length;i++){
        for(var j=0;j<nums.length;j++){
            if(i!==j){
                if(nums[i]===nums[j]){
                    arr=nums[i];
                }
            }
        }
    }
     if(arr.length===0){
        return false;
     }else{
        return true;
     }*/
};