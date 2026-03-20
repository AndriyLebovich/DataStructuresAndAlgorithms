// sliding window

// 485. Max Consecutive Ones
// https://leetcode.com/problems/max-consecutive-ones/description/



function findWindow (nums) {
	let left = 0;
	let max = -Infinity;

	for (let right = 0; right < nums.length; right++) {
		if (nums[right] === 0) {
			left = right + 1;
		}

		max = Math.max(max, right - left + 1)
	}
	return max;
}


console.log(findWindow([1,1,0,1,1,1]));