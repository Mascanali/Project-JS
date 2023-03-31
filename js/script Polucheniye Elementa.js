"use strict"

const box = document.getElementById('box'); //! Получаем єлемент по ID
console.log(box);

const btns = document.getElementsByTagName('button'); //! Получаем псевдомассив (HTML коллекцию)
console.log(btns);

const btns1 = document.getElementsByTagName('button')[1]; //! Получаем одну кнопку под индексом 1
console.log(btns1);

//const btns1 = document.getElementsByTagName('button'); 
//console.log(btns1[1]); //! Получаем одну кнопку под индексом 1 второй вариант

const circles = document.getElementsByClassName('circle');//! Получаем єлемент по классу
console.log(circles);


//?НОВЫЙ СПОСОБ

const hearts = document.querySelectorAll('.heart'); //!в скобки указываем css селектор. ВЫВОДИТ псевдомассив
hearts.forEach(item => { //! Тут выводит каждый элемент по отдельности!!!
	console.log(item);
}); 

const oneHeart = document.querySelector('.heart'); //! Позволяет получить ПЕРВЫЙ элемент (не массив)
console.log(oneHeart);

