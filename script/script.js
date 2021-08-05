"use strict";

let number;
let x = Math.floor(Math.random() * 101);
console.log("x: ", x);
let count = 10;

function one(argument) {
  count--;
  function two() {
    number = prompt("Угадай число от 1 до 100");
    if (count === 0) {
      alert("Попытки закончились, хотите сыграть еще?");
      count = 10;
      x = Math.floor(Math.random() * 101);
      console.log("x: ", x);
      one();
    } else if (number === "") {
      alert("Введи число!");
      one();
    } else if (number === null) {
      alert("Игра закончена!");
      return (x = null);
    } else if (number > x) {
      alert(`Загаданное число больше, осталось попыток: ${count}`);

      one();
    } else if (number < x) {
      alert(`Загаданное число меньше, осталось попыток: ${count}`);
      one();
    } else if (number == x) {
      alert("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
      x = Math.floor(Math.random() * 101);
      console.log("x: ", x);
      one();
    } else if (typeof number !== "number") {
      alert("Введи число!");
      one();
    }
  }
  two();
}
one();
