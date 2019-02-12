function makeCounter() {
    let counter = 0;
    return function () {
        return counter++;
    };
}

let counter = makeCounter();

// let module = (function () {
//     let counter = 0;

//     function setCounter(value) {
//         counter = value;
//         return counter;
//     }

//     function plusCounter() {
//         counter++;
//         return counter;
//     }

//     function getCounter() {
//         return counter;
//     }

//     function reset() {
//         counter = 0;
//         return counter;
//     }

//     return {
//         setCounter: setCounter,
//         getCounter: getCounter,
//         plusCounter: plusCounter,
//         reset: reset
//     }
// })();

// console.log(module.getCounter());


// Домашняя работа this

// this #1.

const rectangle = {
    width: 11,
    height: 3,
    getSquare: function () {
        return this.width * this.height;
    }
}

// this #2.

const goods = {
    price: 10,
    discount: '15%',
    getPrice: function () {
        return price;
    },
    getPriceWithDiscount: function () {
        discountInt = parseInt(this.discount) / 100;
        return this.price * (1 - discountInt);
    }
}

// this #3.

const user = {
    name: 'Abraham',
    getName: function () {
        return getUserName(this);
    }
};

function getUserName(Obj) {
    return Obj.name;
}


// this #4.

let Obj = {
    height: 10,
    incHeight: function () {
        return ++this.height;
    }
}

// this #5.

const numerator = {
    value: 1,
    double: function () {
        this.value = this.value * 2;
        return this;
    },
    plusOne: function () {
        this.value++;
        return this;
    },
    minusOne: function () {
        this.value--;
        return this;
    }
}


let numbers = [4, 12, 0, 10, -2, 4];
let minNumber = Math.min.apply(numbers, numbers);

// Урок this #6

const element = {
    height: '15px',
    marginTop: '5px',
    marginBottom: '5px',
    getFullHeight: function () {
        return parseInt(this.height) + parseInt(this.marginTop) + parseInt(this.marginBottom);
    }
}

const block = {
    height: '5px',
    marginTop: '3px',
    marginBottom: '3px',
}

let blockFullHeight = element.getFullHeight.call(block);

// Урок this #7

let element01 = {
    height: 25,
    getHeight: function () {
        return this.height;
    }
}

let getElemtntHeight = element01.getHeight.bind(element01);

// Урок Замыкания #1

getBigName(userName);
function getBigName(name) {
    name = name + '';
    // console.log(name.toUpperCase());
    return name.toUpperCase();
}
var userName;

// Урок Замыкания #3

var food = 'cucumber';

(function () {
    var food = 'bread';
    getfood();
})

function getfood() {
    console.log(food);
}

// Урок Замыкания 
let dollar, getDollar;

(function () {
    let dollar = 0;
    getDollar = function () {
        return dollar;
    }
}());

dollar = 30;
getDollar();

// Урок Замыкания 

var greet = 'Hello';

(function () {
    var text = 'World';
    // console.log(greet + text);
}())

// Урок Замыкания 

function minus(a = 0) {
    return function (b) {
        if (!b) b = 0;
        return a - b;
    }
}

// Урок Замыкания 

function MultiplyMaker(num) {
    return function (multiply) {
        return num *= multiply;
    };
}

let multiply = MultiplyMaker(2);

// Урок Замыкания 

let module = (function () {
    let ResStr = '';

    function SetStr(Str) {
        if (!Str) Str = '';
        if (typeof Str == 'number') {
            Str += '';
        }
        this.ResStr = Str;
        return this;
    };

    function GetStr() {
        return this.ResStr;
    };

    function GetLengthStr() {
        return this.ResStr.length;
    };

    function GetReversStr() {
        let reversStr = '';

        for (let i = this.ResStr.length - 1; i >= 0; i--) {
            reversStr += this.ResStr[i];
        }
        return reversStr;
    };

    return {
        SetStr: SetStr,
        GetStr: GetStr,
        GetLengthStr: GetLengthStr,
        GetReversStr: GetReversStr
    }
})();

// Урок Замыкания 
let CalcResultat = 0;

let Calc = (function () {
    function SetValue(Value) {
        CalcResultat = Value;
        return this;
    };

    function Plus(Value) {
        CalcResultat += Value;
        return this;
    };

    function Multiply(Value) {
        CalcResultat *= Value;
        return this;
    };

    function GetValue() {
        return CalcResultat.toFixed(2);
    };

    return {
        SetValue: SetValue,
        Plus: Plus,
        Multiply: Multiply,
        GetValue: GetValue
    }
})();

// Урок Замыкания 

function makeBuffer() {
    let buf = '';

    function buffer(Value) {
        if ((!(typeof Value === 'undefined'))) {
            buf += Value;
            return this;
        } else {
            return buf;
        };
    };

    buffer.clear = function () {
        buf = '';
        return this;
    }

    return buffer;
};

let buffer = makeBuffer();

buffer('строка');
buffer.clear();
buffer();

// Урок Замыкания 

var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
}, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
}, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
}];

function byField(field) {
    return (function (a, b) {
        return a[field] > b[field] ? 1 : -1;
    });
};


// Урок Замыкания 

let arr = [1, 2, 3, 4, 5, 6, 7];

function filter(arr, handler) {
    let resArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (handler(arr[i])) {
            resArr.push(arr[i]);
        }

    }
    return resArr;
};

function inBetween(a, b) {
    return (function (Value) {
        if (Value >= a && Value <= b) {
            return true;
        } else {
            return false;
        };
    });
};

function inArray(array) {
    return function (x) {
        return array.indexOf(x) != -1;
    }
}


// console.log(filter(arr, inArray([1, 2, 3, 40])));

// Квест задача 01

const palmTree = (n = 1) => typeof n == 'number' && n > 0 ? 'n'.repeat(n) : false;

// Квест задача 02

function autoReplace(needless, change, haystack) {
    if ((typeof needless != 'object') || (typeof change != 'string') || (typeof haystack != 'string')) {
        return false;
    }

    haystack = haystack.split(' ');

    for (let j = 0; j < needless.length; j++) {
        for (let i = 0; i < haystack.length; i++) {
            if (needless[j].toUpperCase() == haystack[i].toUpperCase()) {
                haystack[i] = change;
            }
        }
    }

    haystack = haystack.join(' ');

    return haystack;
}


// Урок Замыкания 

function makeArmy() {

    var shooters = [];
    let nbr = [];
    

    for (var i = 0; i < 10; i++) {
        nbr[i] = i;
        var shooter = function () { // функция-стрелок
            alert(nbr[i]); // выводит свой номер
        };
        shooters.push(shooter);
    }

    return shooters;
}

var army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10...
  // .. все стрелки выводят 10 вместо 0,1,2...9
