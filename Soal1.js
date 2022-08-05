// Buatlah fungsi sebagai berikut :
// 	Apabila terdapat int = 4, maka outputnya 24 (prosesnya : 4*3*2*1)
// 	Apabila terdapat int = 8, maka outputnya 40320 (prosesnya : 8*7*6*5*4*3*2*1)

function factorialOfNumber(number) {
	let multipled = 1;
	for (let i = 1; i <= number; i++) {
		multipled *= i;
	}
	return multipled;
}

const result1 = factorialOfNumber(4);
const result2 = factorialOfNumber(8);
console.log(result1);
console.log(result2);
