"use strict";
let number;
let win;
let x;

function one(argument) {
  x = argument;
  function two() {
    number = prompt("Угадай число от 1 до 100");
    if (number === "") {
      alert("Введи число!");
      one(10);
    } else if (number === null) {
      alert("Игра закончена!");
      return (x = null);
    } else if (number > x) {
      alert("Загаданное число больше, осталось 9 попыток");
    } else if (number < x) {
      alert("Загаданное число меньше, осталось 9 попыток");
    } else if (number == x) {
      win = alert("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
      one(15);
    } else if (typeof number !== "number") {
      alert("Введи число!");
      one(10);
    }
    function three() {
      number = prompt("Угадай число от 1 до 100");
      if (number === "") {
        alert("Введи число!");
        three(10);
      } else if (number === null) {
        alert("Игра закончена!");
        return (x = null);
      } else if (number > x) {
        alert("Загаданное число больше, осталось 8 попыток");
      } else if (number < x) {
        alert("Загаданное число меньше, осталось 8 попыток");
      } else if (number == x) {
        win = alert("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
        one(25);
      } else if (typeof number !== "number") {
        alert("Введи число!");
        three(10);
      }
      function four() {
        number = prompt("Угадай число от 1 до 100");
        if (number === "") {
          alert("Введи число!");
          four(10);
        } else if (number === null) {
          alert("Игра закончена!");
          return (x = null);
        } else if (number > x) {
          alert("Загаданное число больше, осталось 7 попыток");
        } else if (number < x) {
          alert("Загаданное число меньше, осталось 7 попыток");
        } else if (number == x) {
          win = alert("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
          one(35);
        } else if (typeof number !== "number") {
          alert("Введи число!");
          four(10);
        }
        function five() {
          number = prompt("Угадай число от 1 до 100");
          if (number === "") {
            alert("Введи число!");
            five(10);
          } else if (number === null) {
            alert("Игра закончена!");
            return (x = null);
          } else if (number > x) {
            alert("Загаданное число больше, осталось 6 попыток");
          } else if (number < x) {
            alert("Загаданное число меньше, осталось 6 попыток");
          } else if (number == x) {
            win = alert("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
            one(45);
          } else if (typeof number !== "number") {
            alert("Введи число!");
            five(10);
          }
          function six() {
            number = prompt("Угадай число от 1 до 100");
            if (number === "") {
              alert("Введи число!");
              six(10);
            } else if (number === null) {
              alert("Игра закончена!");
              return (x = null);
            } else if (number > x) {
              alert("Загаданное число больше, осталось 5 попыток");
            } else if (number < x) {
              alert("Загаданное число меньше, осталось 5 попыток");
            } else if (number == x) {
              win = alert("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
              one(55);
            } else if (typeof number !== "number") {
              alert("Введи число!");
              six(10);
            }
            function seven() {
              number = prompt("Угадай число от 1 до 100");
              if (number === "") {
                alert("Введи число!");
                seven(10);
              } else if (number === null) {
                alert("Игра закончена!");
                return (x = null);
              } else if (number > x) {
                alert("Загаданное число больше, осталось 4 попытки");
              } else if (number < x) {
                alert("Загаданное число меньше, осталось 4 попытки");
              } else if (number == x) {
                win = alert("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
                one(65);
              } else if (typeof number !== "number") {
                alert("Введи число!");
                seven(10);
              }
              function eight() {
                number = prompt("Угадай число от 1 до 100");
                if (number === "") {
                  alert("Введи число!");
                  eight(10);
                } else if (number === null) {
                  alert("Игра закончена!");
                  return (x = null);
                } else if (number > x) {
                  alert("Загаданное число больше, осталось 3 попытки");
                } else if (number < x) {
                  alert("Загаданное число меньше, осталось 3 попытки");
                } else if (number == x) {
                  win = alert("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
                  one(75);
                } else if (typeof number !== "number") {
                  alert("Введи число!");
                  eight(10);
                }
                function nine() {
                  number = prompt("Угадай число от 1 до 100");
                  if (number === "") {
                    alert("Введи число!");
                    nine(10);
                  } else if (number === null) {
                    alert("Игра закончена!");
                    return (x = null);
                  } else if (number > x) {
                    alert("Загаданное число больше, осталось 2 попытки");
                  } else if (number < x) {
                    alert("Загаданное число меньше, осталось 2 попытки");
                  } else if (number == x) {
                    win = alert("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
                    one(85);
                  } else if (typeof number !== "number") {
                    alert("Введи число!");
                    nine(10);
                  }
                  function ten() {
                    number = prompt("Угадай число от 1 до 100");
                    if (number === "") {
                      alert("Введи число!");
                      ten(10);
                    } else if (number === null) {
                      alert("Игра закончена!");
                      return (x = null);
                    } else if (number > x) {
                      alert("Загаданное число больше, осталось 1 попытки");
                    } else if (number < x) {
                      alert("Загаданное число меньше, осталось 1 попытки");
                    } else if (number == x) {
                      win = alert("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
                      one(95);
                    } else if (typeof number !== "number") {
                      alert("Введи число!");
                      ten(10);
                    }
                    function eleven() {
                      number = prompt("Угадай число от 1 до 100");
                      if (number === "") {
                        alert("Введи число!");
                        eleven(10);
                      } else if (number === null) {
                        alert("Игра закончена!");
                        return (x = null);
                      } else if (number > x) {
                        alert("Попытки закончились, хотите сыграть еще?");
                        one(40);
                      } else if (number < x) {
                        alert("Попытки закончились, хотите сыграть еще?");
                        one(30);
                      } else if (number == x) {
                        win = alert("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
                        one(20);
                      } else if (typeof number !== "number") {
                        alert("Введи число!");
                        eleven(10);
                      }
                    }
                    eleven();
                  }
                  ten();
                }
                nine();
              }
              eight();
            }
            seven();
          }
          six();
        }
        five();
      }
      four();
    }
    three();
  }
  two();
}
one(10);
