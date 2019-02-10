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
function getBigName (name) {
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

function getfood () {
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
        return a-b;
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

    function SetStr (Str) {
        if (!Str) Str = '';
        if (typeof Str == 'number') {
            Str += '';
        }
        this.ResStr = Str;
        return this;
    };

    function GetStr () {
        return this.ResStr;
    };
    
    function GetLengthStr () {
        return this.ResStr.length;
    };

    function GetReversStr () {
        let reversStr = '';
        
        for (let i = this.ResStr.length - 1; i >= 0 ; i--) {
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
    function SetValue (Value) {
        CalcResultat = Value;
        return this;
    };

    function Plus (Value) {
        CalcResultat += Value;
        return this;
    };

    function Multiply (Value) {
        CalcResultat *= Value;
        return this;
    };

    function GetValue () {
        return CalcResultat.toFixed(2);
    };

    return {
        SetValue: SetValue,
        Plus: Plus,
        Multiply: Multiply,
        GetValue: GetValue
    }
})();

Calc.SetValue(10.3455);
console.log(CalcResultat);
Calc.Plus(5);
console.log(CalcResultat);
Calc.Multiply(2);
console.log(Calc.GetValue());

console.log(Calc.SetValue(10.3455).Plus(100).Multiply(5).GetValue());

