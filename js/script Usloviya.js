'use strict';

if (4 == 4) {
	console.log('OK');
} else {
	console.log('Error');
}

const num = 101;

if (num < 49) {
	console.log('Error');
} else if (num > 100) {
	console.log('Mnogo');
} else {
	console.log('OK');
}

(num === 50) ? console.log('OK') : console.log('Error');

const num1 = 51;

switch (num1) {
	case 49:
		console.log('Neverno');
		break;
	case 100:
		console.log('Neverno');
		break;
	case 50:
		console.log('Verno');
		break;
	default:
		console.log('Ne v etot raz');
}