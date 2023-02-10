/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */

  var maxSumTwoNoOverlap = function(A, L, M) {
    var sumL = 0;
    var max = 0;
    var tmpSum;
    var window;
    var nextIndex;
    
    var find = function (initSum, from, to, len) {
        tmpSum = initSum;
        window = from ? (len + from) : len;
        for (var i = from; i < to; i++) {
            tmpSum += A[i];
            if (i >= window) {
                tmpSum -= A[i - len];
            }
            if (tmpSum > max) {
                max = tmpSum;
            }
        }
    };
    
    for (var i = 0; i < A.length; i++) {
        sumL += A[i];
        
        if (i >= L) {
            sumL -= A[i - L];
        }
        
        nextIndex = i + 1;
        find(sumL, 0, nextIndex - L, M);
        find(sumL, nextIndex, A.length, M);
    }
    
    return max;
};  
