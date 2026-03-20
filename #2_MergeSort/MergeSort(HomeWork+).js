

// Merge Sort

const array = [8,9,2,5,1,6,7,4]

const merge = function(left, right){
	let result = [];
	let i = 0;
	let j = 0;

	while(i < left.length && j < right.length){
		if(left[i] <= right[j]){
			result.push(left[i]);
			i++;
		} else {
			result.push(right[j]);
			j++;
		}
	}
	return result;
}

const mergeSort = function(array){
	if(array.length <= 1){
		return array;
	}

	const mid = Math.floor(array.length / 2);

	const left = array.slice(0, mid);
	const right = array.slice(mid);

	const sortLeft = mergeSort(left);
	const sortRight = mergeSort(right);

	return merge(sortLeft, sortRight)
}