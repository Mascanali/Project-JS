"use strict"

const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	},
	makeTest: function() {
		console.log("test");
	}
};

//console.log(options["colors"]["border"]);

//delete options.name;

//console.log(options);

//ВАРИАНТ 1 Перебор всех ключей и их значение

/* let counter = 0;
for (let key in options) {
	if (typeof(options[key]) === 'object') {
		for (let i in options[key]) {
			console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
			counter++;
		}
	} else {
		console.log(`Свойство ${key} имеет значение ${options[key]}`)
		counter++;
	}
}
console.log(counter); */

//ВАРИАНТ 2 Перебор всех ключей и их значение

//console.log(Object.keys(options).length);
options.makeTest();


//ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТА
const {border, bg} = options.colors;
console.log(border);

