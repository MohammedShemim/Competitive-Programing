/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = module.exports  = function(A) {

    let n = A.length;
    let inc = Array(n).fill(0);
    let dec = Array(n).fill(0);
    
    for(let i = 0; i < n; i++){

        if(i == 0 || A[i] <= A[i - 1]){
            inc[i] = 0;
        }
        else{
            inc[i] = inc[i - 1] + 1;
        }

    }

    for(let i = n - 1; i >= 0; i--){
        
        if(i == n - 1 || A[i] <= A[i + 1]){
            dec[i] = 0;
        }
        else{
            dec[i] = dec[i + 1] + 1;
        }

    }

    let m = 0;
    for(let i = 0; i < n; i++){

        if(inc[i] > 0 && dec[i] > 0)
        {
            m = Math.max(m, inc[i] + dec[i] + 1);
        }

    }

    return m;
};
