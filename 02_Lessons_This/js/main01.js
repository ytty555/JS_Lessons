// **********************************************************************
//    Learn.Javascript.ru - уроки
// **********************************************************************

// Объект калькулятор

const calkulator = {
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