"use strict"

const arr = [1, 2, 3, 6, 8];

arr.pop(); //удаляет последнее значение в массиве
arr.push(10); //добавляем 10 в конец массива

const str = prompt("", "");
const products = str.split(", "); //ПРЕВРАЩАЕТ СТРОКУ В МАССИВ
products.sort(compareNum); //СОРТИРУЕТ ЭЛЕМЕНТЫ КАК СТРОКИ
console.log(products.join('; ')); //ПРЕВРААЩАЕТ МАСИВ В СТРОКУ

function compareNum(a, b) {
	return a - b;
}

//Гибко перебираем массив, можем настроить. Принимает 3 аргуммента: 1. элемент, который мы перебираем. 2.Номер по порядку (с 0). 3.Ссылка на массив, который перебираем
arr.forEach(function(item, i, arr) {
	console.log(`${i}: ${item} внутри массива ${arr}`);
});

console.log(arr);

//ПЕРЕБОР МАССИВА
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
//ПЕРЕБОР МАССИВА
for (let value of arr) {
	console.log(value);
}


