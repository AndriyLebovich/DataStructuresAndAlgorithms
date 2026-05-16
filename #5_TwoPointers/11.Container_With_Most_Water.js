function moreWater (height) {
	let left = 0;
	let right = height.length - 1;
	let maxWater = 0;

	while (left < right) {
		// Width between lines
		let width = right - left;

		// Height is limited by smaller line
		let h = Math.min(height[left], height[right]);

		// Calculate area
		let area = width * h;

		// Update maximum area
		maxWater = Math.max(maxWater, area);

		// Move pointer with smaller height
		if (height[left] < height[right]) {
			left++
		} else {
			right--
		}
	}
	return maxWater;
}

console.log(moreWater([1,8,6,2,5,4,8,3,7]))