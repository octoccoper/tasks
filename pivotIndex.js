var pivotIndex = function(nums) {
    var sum = 0;
	var leftSum = 0;
	for(var i = 0; i < nums.length; i++){
		sum = sum + nums[i];
    }
	for(var j = 0; j < nums.length; j++){
		if(leftSum == sum - leftSum - nums[j]) {
            return j;
        }
        leftSum = leftSum + nums[j];
	}
	
	return -1;
};
