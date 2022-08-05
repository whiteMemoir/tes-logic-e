// Buatlah fungsi untuk menentukan bilangan terkecil dan terbesar dari sebuah array
// Contoh : array [4,2,6,88,3,11]
// Maka outputnya adalah low : 2, high : 88
// dilarang menggunakan built in function

let high, low;
function findhighAndlow(arrNumber) {
	(high = arrNumber[0]), (low = arrNumber[0]);
	for (let i = 0; i < arrNumber.length; i++) {
		if (arrNumber[i] > high) {
			high = arrNumber[i];
		}

		if (arrNumber[i] < low) {
			low = arrNumber[i];
		}
	}
	console.log(low);
	console.log(high);
}

const arrNumber = [4, 2, 6, 88, 3, 11];
const result = findhighAndlow(arrNumber);
