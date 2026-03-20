
// Two pointers

// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/

const s = "A man, a plan, a canal: Panama";

function isAlphaNumeric(c) {
	return/[a-z0-9]/i.test(c);
}

var isPalindrome = function(s) {
	let left = 0;
	let right = s.length - 1;

	while(left < right) {
		while(left < right && !isAlphaNumeric(s[left])) {
			left++;
		}
		while(left < right && !isAlphaNumeric(s[right])) {
			right--;
		}

		if(s[left].toLowerCase() != s[right].toLowerCase()) {
			return false;
		} else {
			left++;
			right--;
		}
	}
	return true;
}