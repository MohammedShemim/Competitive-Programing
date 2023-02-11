var rotate = function(nums, k) {
    const temp = [...nums];
    if (k >= nums.length) {
        k = k % nums.length;
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        nums[i + k > nums.length - 1 ? (i + k - nums.length) : (i + k) ] = temp[i];
    }
    return nums;
};
