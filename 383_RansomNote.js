/**
 * Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines; otherwise, it will return false.
 * Each letter in the magazine string can only be used once in your ransom note.
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
  //不排序也可以实现
var canConstruct = function(ransomNote, magazine) {
    var rlen=ransomNote.length;
    var mlen=magazine.length;
    function sortFun(str){
        var a=str.split("");
        a.sort();
        var b=a.join("");
        return b;        
    }
    if(rlen>mlen){
        return false;
    }
    if(rlen===0&&mlen===0){
        return true;
    }
    if(rlen<=mlen){
        var sortran=sortFun(ransomNote);
        var sortmag=sortFun(magazine);
        var temp=0,ran,pos;
        for(var i=0;i<rlen;i++){
            ran=ransomNote.charAt(i);
            pos=magazine.indexOf(ran);
            if(pos>-1){
                magazine=magazine.replace(magazine[pos],"");
                temp++;
            }else{
                return false;
            }
        }
        if(temp===rlen){
            return true;
        }else{
            return false;
        }
    } 
};