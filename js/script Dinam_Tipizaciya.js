"use strict"

//! В СТРОКУ

// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2) конкатинация
console.log(typeof(5 + ''));
console.log(typeof(null + ''));

// применение
const num = 5;
console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';


//! В ЧИСЛО

// 1)
console.log(typeof(Number('4')));

// 2) унарный +
console.log(typeof(+'4'));

// 3)
console.log(parseInt("15px", 10));

// применение

let answ = +prompt("Hello", "");


//! В БУЛИНОВОЕ ЗНАЧЕНИЕ

// в false. Все остальное True
0, '', null, undefined, NaN

// 1)
let switcher = null;

if (switcher) {
	console.log("Working");
}

switcher = 1;
if (switcher) {
	console.log("Working");
}

// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!"444"));

