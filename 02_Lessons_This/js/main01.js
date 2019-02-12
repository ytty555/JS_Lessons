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
    up: function() { // вверх по лестнице
      this.step++;
      return this;
    },
    down: function() { // вниз по лестнице
      this.step--;
      return this;
    },
    showStep: function() { // вывести текущую ступеньку
      alert( this.step );
      return this;
    }
  };


//   Функция sum()()

function sum (a) {
    let currentRes = a;

    function f (b) {
        currentRes += b;
        return f;
    }

    f.toString = function () {
        return currentRes;
    };

    return f;
}


// Калькулятор при помощи конструктора

function Calculator () {
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

let calc = new Calculator ();


// Аккумулятор при помощи конструктора

function Accumulator (startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt('Введите слагаемое', 0);
  };
}

let acc = new Accumulator (4);
acc.read();
alert(acc.value);