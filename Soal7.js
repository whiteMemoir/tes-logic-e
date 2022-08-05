// Dari soal nomor 6, buatlah juga untuk menghasilkan output total ada berapa angka yg termasuk dari bagian low dan high
// array data =  [1,4,7,9,12],
// int low = 2,
// int high = 15,
// maka akan menghasilkan ouput = 4

function findHighAndLowLength(arrNumber, high, low) {
	let newArrNumber = [];
	for (let i = 0; i < arrNumber.length; i++) {
		if (arrNumber[i] <= high && arrNumber[i] >= low) {
			newArrNumber.push(arrNumber[i]);
		}
	}
	return newArrNumber.length;
}
const high = 15,
	low = 2,
	arrNumber = [1, 4, 7, 9, 12],
	result = findHighAndLowLength(arrNumber, high, low);
console.log(result);
