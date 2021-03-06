'use strict';
// **********************************************************************
//    Learn.Javascript.ru - уроки
// **********************************************************************

// Объект калькулятор

const calculator = {
  read: function () {
    this.a = +prompt('Input namber A', 0);
    this.b = +prompt('Input namber B', 0);
    return this;
  },
  sum: function () {
    return this.a + this.b;
  },
  mul: function () {
    return this.a * this.b;
  }
};

// Цепочка вызовов

var ladder = {
  step: 0,
  up: function () { // вверх по лестнице
    this.step++;
    return this;
  },
  down: function () { // вниз по лестнице
    this.step--;
    return this;
  },
  showStep: function () { // вывести текущую ступеньку
    alert(this.step);
    return this;
  }
};


//   Функция sum()()

function sum(a) {
  let currentRes = a;

  function f(b) {
    currentRes += b;
    return f;
  }

  f.toString = function () {
    return currentRes;
  };

  return f;
}


// Калькулятор при помощи конструктора

function Calculator() {
  let a = 0;
  let b = 0;

  this.read = function () {
      a = +prompt('Input namber A', 0);
      b = +prompt('Input namber B', 0);
      return this;
    },

    this.sum = function () {
      return a + b;
    },

    this.mul = function () {
      return a * b;
    };
}

let calc = new Calculator();


// Аккумулятор при помощи конструктора

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt('Введите слагаемое', 0);
  };
}

let acc = new Accumulator(4);
acc.read();
alert(acc.value);


// Напишите конструктор Calculator, который создаёт расширяемые объекты-калькуляторы. 
// Эта задача состоит из двух частей, которые можно решать одна за другой.

// 1. Первый шаг задачи: вызов calculate(str)  принимает строку, например «1 + 2», с жёстко заданным форматом 
// «ЧИСЛО операция ЧИСЛО» (по одному пробелу вокруг операции), и возвращает результат. Понимает плюс + и минус -.

// var calc = new Calculator;
// alert( calc.calculate("3 + 7") ); // 10

// 2.Второй шаг – добавить калькулятору метод addMethod(name, func), который учит калькулятор новой операции. 
// Он получает имя операции name и функцию от двух аргументов func(a,b), которая должна её реализовывать.
// Например, добавим операции умножить *, поделить / и возвести в степень **:

// var powerCalc = new Calculator;
// powerCalc.addMethod("*", function(a, b) {
//   return a * b;
// });
// powerCalc.addMethod("/", function(a, b) {
//   return a / b;
// });
// powerCalc.addMethod("**", function(a, b) {
//   return Math.pow(a, b);
// });
// var result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8

// Поддержка скобок и сложных математических выражений в этой задаче не требуется.
// Числа и операции могут состоять из нескольких символов. Между ними ровно один пробел.
// Предусмотрите обработку ошибок. Какая она должна быть – решите сами.