
/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {    
    for(let i=0; i<l.length; i++){
       var arr = nums.slice(l[i], r[i] + 1).sort((a,b) => a-b);
        r[i] = checkArr(arr)
        
    }
    return r
};
function checkArr(arr){
    for(let i=1; i< arr.length-1; i++){
        var diff = arr[1] - arr[0];
        if(arr[i+1] - arr[i] !== diff)return false
    }
    return true
}
