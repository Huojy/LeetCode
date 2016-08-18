/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
	P   A   H   N
	A P L S I I G
	Y   I   R
 * And then read line by line: "PAHNAPLSIIGYIR"
 * Write the code that will take a string and make this conversion given a number of rows:
 * string convert(string text, int nRows);
 * convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 //通过找数学规律的方法得出
 var convert = function(s, numRows) {
    if(s.length<=2||numRows===1){
        return s;
    }
    var str="";
    var s1,s2;
    for(var i=0;i<numRows;i++){
        s1=(numRows-i-1)*2;
        s2=i*2;
        var index=i;
        if(index<s.length){
            str += s[index];
        }
        while(1){
            index+=s1;
            if(index>=s.length){
                break;
            }
            if(s1){
                str+=s[index];
            }
            index+=s2;
            if(index>=s.length){
                break;
            }
            if(s2){
                str+=s[index];
            }
        }
    }
    return str;
};