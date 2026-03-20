

// HashMap

// Find duplicate with method set()

const containsDuplicate = function(nums) {
	let seen = new Set ();

	for(const n of nums){
		if(seen.has(n)) {
			return true;
		} seen.add(n)
	} return false;
}

console.log(containsDuplicate(nums))