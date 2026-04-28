// Stack 

// Stack - (illustration with pancakes. To take out the first/bottom one, you need to take out the second and third) LIFO - lost in first out
// Queue - stack on the contrary (illustration with a queue, first in - first out) FIFO - first in first out


// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/description/


function createStack (s) {
	
let map = {
	'[' : ']', // key - value (k1)
	'{' : '}', // key - value (k2)
	'(' : ')' // key - value (k3)
};

let stack = [];


for(const b of s) {
	if(map[b]) {
		stack.push(b);
	} else {
		if(map[stack.at(-1)] === b) {
			stack.pop();
		} else {
			return false;
		}
	}
}
	return stack.length === 0;
}

console.log(createStack("({})"));