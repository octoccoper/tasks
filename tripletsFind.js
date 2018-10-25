var threeSum = function (nums) {
    var arr = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let z = i + 2; z < nums.length; z++) {
                if (nums[i] + nums[j] + nums[z] == 0) {
                    arr.push(nums[i]);
                    arr.push(nums[j]);
                    arr.push(nums[z]);
                    var uniqueItems = Array.from(new Set(arr));
                    return uniqueItems;
                }
                else {
                    arr.length = 0;
                }
            }
        }
    }
};
