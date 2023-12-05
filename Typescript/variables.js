// var movieTitle = 'don';
// movieTitle = '9';
// var count = 0;
function check(A, B, C) {
	let i = B;
	let j = C;
	while (i < j) {
		[A[i], A[j]] = [A[j], A[i]];
		i++;
		j++;
	}
	return A;
}

console.log(check([1, 2, 3, 4], 2, 3));
