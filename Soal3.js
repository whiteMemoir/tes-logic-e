// Buatlah fungsi untuk menampilkan jumlah digit angka tergantung dimana posisi atau tempat dari angka dalam sebuah string “9.86-A5.321”!
// Contoh: printDigitValue(‘9.86-A5.321’);
// Hasil :
// 9865321
// 9000000
// 800000
// 60000
// 5000
// 300
// 20
// 1

function printDigitValue(string) {
	let getNumber = string.replace(/\D/g, "");
	let newString = "";
	for (let i = 0; i < getNumber.length; i++) {
		newString += getNumber[i];
		for (let j = string.length - 1; j > i; j--) {
			newString = newString + "0";
		}
		newString += "\n";
	}
	getNumber += "\n";
	console.log(getNumber, newString);
}

const result = printDigitValue("9.86-A5.321");
console.log(result);
