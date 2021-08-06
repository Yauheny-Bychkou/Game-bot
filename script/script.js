"use strict";

let number;
let x;
let count;

function one(argument) {
  x = Math.floor(Math.random() * 101);
  console.log("Первая игра, нужно отгадать число: ", x);
  count = 10;
  count--;
  function two() {
    number = prompt("Угадай число от 1 до 100");
    if (count === 0) {
      alert("Попытки закончились, хотите сыграть еще?");
      x = Math.floor(Math.random() * 101);
      console.log("Другая игра, нужно отгадать число: ", x);
      count = 9;
      two();
    } else if (number === "") {
      alert("Введи число!");
      count++;
      count--;
      two();
    } else if (number === null) {
      alert("Игра закончена!");
      return;
    } else if (number > x) {
      alert(`Загаданное число меньше, осталось попыток: ${count}`);
      count--;
      two();
    } else if (number < x) {
      alert(`Загаданное число больше, осталось попыток: ${count}`);
      count--;
      two();
    } else if (number == x) {
      alert("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
      x = Math.floor(Math.random() * 101);
      console.log("Другая игра, нужно отгадать число: ", x);
      count = 9;
      two();
    } else if (typeof number !== "number") {
      alert("Введи число!");
      count++;
      count--;
      two();
    }
  }
  two();
}
one();
