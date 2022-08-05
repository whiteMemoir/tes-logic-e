// Apabila terdapat int = 15, maka akan mencetak output berikut :
// 1
// 2
// Edu
// 4
// Work
// 6
// 7
// 8
// Edu
// 10
// 11
// Edu
// 13
// 14
// EduWork

// keterangan : string edu untuk kelipatan 3, string work untuk kelipatan 5, string eduwork untuk kelipatan 3 dan 5

function fizzBuzz(number) {
	for (let i = 1; i <= number; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log("eduwork");
		} else if (i % 3 === 0) {
			console.log("edu");
		} else if (i % 5 === 0) {
			console.log("work");
		} else {
			console.log(i);
		}
	}
}

const result = fizzBuzz(15);
console.log(result);
