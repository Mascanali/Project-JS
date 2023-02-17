'use strict';

//Циклы

let num = 50;

while (num < 55) {
	console.log(num);
	num++;
}


let num1 = 50;
do {
	console.log(num1);
	num1++;
}
while (num1 < 55);

let num2 = 50;

for (let i = 1; i < 10; i++) {
	if (i === 6){
		//break;  //прерівает программу когда доходит до єтого условия
		continue; //позволяет пропустить шаг не прерівая программу
	}
	console.log(i);
}