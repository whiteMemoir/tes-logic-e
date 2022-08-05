function reverseArrayTwoElements(a, b) {
	a = a + b;
	b = a - b;
	a = a - b;
	return [a, b];
}

let a = 3;
let b = 7;
const result = reverseArrayTwoElements(a, b);
console.log(result);
