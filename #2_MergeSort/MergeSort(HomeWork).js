

// Merge Sort

const arrLeft = [1,3,5,7];
const arrRight = [2,4,6,8];

const merge = function(arrLeft, arrRight){
	let result = [];
	let i = 0;
	let j = 0;

	while(i < arrLeft.length && j < arrRight.length){
		if(arrLeft[i] <= arrRight[j]){
			result.push(arrLeft[i]);
			i++;
		} else {
			result.push(arrRight[j]);
			j++;
		}
	}
	return result;
}