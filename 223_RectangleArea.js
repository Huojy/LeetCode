/**
 * Find the total area covered by two rectilinear rectangles in a 2D plane.
 * Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.
 * Assume that the total area is never beyond the maximum possible value of int.
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
 var computeArea = function(A, B, C, D, E, F, G, H) {
    var s1=(C-A)*(D-B);
    var s2=(G-E)*(H-F);
    function overlap(A,B,C,D,E,F,G,H){
      var long1=Math.max(A,E);
      var long2=Math.min(C,G);
      var long=long2-long1;
      var width1=Math.max(B,F);
      var width2=Math.min(D,H);
      var width=width2-width1;
      if(long<=0||width<=0){
          return 0;
      }else{
          return width*long;
      }
    }
    var myarea=overlap(A,B,C,D,E,F,G,H);
    return s1+s2-myarea;
};
 