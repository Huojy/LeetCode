/**
 * The count-and-say sequence is the sequence of integers beginning as follows:
	1, 11, 21, 1211, 111221, ...
	1 is read off as "one 1" or 11.
	11 is read off as "two 1s" or 21.
	21 is read off as "one 2, then one 1" or 1211.
 * Given an integer n, generate the nth sequence.
 * Note: The sequence of integers will be represented as a string.
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
    var result="1";
    for(var i=1;i<n;i++){
        var str="";
        var count=0;
        var index=0;
        var current=result[0];
        while(index<result.length){
            if(result[index]==current){
                count++;
            }else{
                str+=count.toString()+current;
                current=result[index];
                count=1;
            }
            index++;
        }
        str+=count.toString()+current;
        result=str;
    }
   return result; 
};