/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    let mem = new Array();
    var max_num = 0;

    for (let i = 0; i < nums.length; i++) {
        mem[i] = new Array(nums.length).fill(0);
    }

    return 2 * find_max(0, nums.length - 1, nums, mem) >= sum;

    function find_max(left, right, nums, mem) {
   
        if (left < 0 || right < 0 || left > right) return 0;
        if (mem[left][right] !== 0) return mem[left][right];

        if (left === right) {
            mem[left][right] = nums[left];
            return nums[left];
        }
        max_num = Math.max(nums[left] +
            Math.min(find_max(left + 2, right, nums, mem), find_max(left + 1, right - 1, nums, mem)),
            nums[right] +
            Math.min(find_max(left + 1, right - 1, nums, mem), find_max(left, right - 2, nums, mem))
        );
        mem[left][right] = max_num;
        return max_num;
    }

};
