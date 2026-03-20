

// 704. Binary Search
// https://leetcode.com/problems/binary-search/description/

// Binary search O(log n)


function binarySearch(nums, target) {
	let left = 0;
	let right = nums.length - 1;

	while(left <= right) {
		let middle = Math.floor(left + right) / 2;

		if(nums[middle] === target) {
			return true;
		} 

		if(nums[middle] < target){
			left = middle + 1;
		} else {
			right = middle - 1;
		}
	}
	return false;
}

console.log(binarySearch([1,2,3,4,5,6,7,8], 6))


