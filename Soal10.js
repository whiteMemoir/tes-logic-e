// Buatlah fungsi untuk mengecek tahun kabisat
// input : 2021
// output : 2021 bukan tahun kabisat

// input : 2024
// output : 2024 adalah tahun kabisat

function isLeap(year) {
	if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))
		return `${year} adalah tahun kabisat`;

	return `${year} bukanlah tahun kabisat`;
}

const result = isLeap(1800);
console.log(result);
