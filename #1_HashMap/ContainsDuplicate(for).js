

// HashMap

// Find duplicate with method for()

const nums = [3,1,3,2];

const containsDuplicate = function (nums) {
	for(let i=0; i<nums.length; i++){
		for(let j=i+1; j<nums.length; j++){
			if(nums[i] === nums[j]){
				return true;
			}
		}
	}
	return false;
}

console.log(containsDuplicate(nums));