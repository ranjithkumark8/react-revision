import React from 'react';
import ReactDOM from 'react-dom/client';
const heading = React.createElement('div', { id: 'parent' }, [
	React.createElement('div', { id: 'child' }, [
		React.createElement('h1', {}, 'H1 Tag'),
		React.createElement('h2', {}, 'H2 Tag'),
	]),
	React.createElement('div', { id: 'child2' }, [
		React.createElement('h1', {}, 'H1 Tag'),
		React.createElement('h2', {}, 'H2 Tag'),
	]),
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
// let x = function (A) {
// 	// Just write your code below to complete the function. Required input is available to you as the function arguments.
// 	// Do not print the result or any output. Just return the result via this function.
// 	let evenMax = -Infinity;
// 	let oddMin = +Infinity;
// 	for (let i = 0; i < A.length; i++) {
// 		console.log(A[i], A[i] % 2 === 0);
// 		if (A[i] % 2 === 0 && A[i] !== 0) {
// 			evenMax = A[i] > evenMax ? A[i] : evenMax;
// 		} else if (A[i] !== 0) {
// 			oddMin = A[i] < oddMin ? A[i] : oddMin;
// 			console.log(oddMin);
// 		}
// 	}
// 	let ans = evenMax - oddMin;
// 	console.log(ans, evenMax, oddMin, 'dafkdj');
// 	return ans;
// };

// x([74, 9, 51, 51, 75, 0, 35, 89, 96, 77]);

// console.log(Object.keys({ a: 1, B: 1 }).length);
