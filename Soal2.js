// Buatlah fungsi untuk reverse sebuah string
// Apabila input = “abcde”, maka outputnya = “edcba”
// Dilarang menggunakan function reverse, buatlah logika sendiri

function reversedString(string) {
	let newString = "";
	for (let i = string.length - 1; i >= 0; i--) {
		newString += string[i];
	}
	return newString;
}

const result = reversedString("akutaktau");
console.log(result);
