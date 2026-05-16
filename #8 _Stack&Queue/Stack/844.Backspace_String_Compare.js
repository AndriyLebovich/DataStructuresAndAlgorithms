var backspaceCompare = function(s, t) {
	return type(s) === type(t)
};

function type(str) {
	const stack = [];

	for ( const c of str){
		if ( c !== "#") {
			stack.push(c)
		} else {
			stack.pop()
		}
	}
	return stack.join("");
}

console.log(backspaceCompare("a#bc", "d#bc"))