
// Sliding Window #Lesson2

// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ "121 Best Time To And Sell Stock"

var slidingWindow = function (arr) {

   let max = 0;

	let left = 0;

	for (let right = 1; right < arr.length; right++ ) {
		if (arr[right] < arr[left]) {
			left = right;
		}

		max = Math.max(max, arr[right] - arr[left])
	}
	return max;
}

console.log(slidingWindow([7,1,3,5,6,4]))