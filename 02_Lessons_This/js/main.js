let module = (function () {
    let counter = 0;

    function setCounter(value) {
        counter = value;
        return counter;
    }

    function plusCounter() {
        counter++;
        return counter;
    }

    function getCounter() {
        return counter;
    }

    function reset() {
        counter = 0;
        return counter;
    }

    return {
        setCounter: setCounter,
        getCounter: getCounter,
        plusCounter: plusCounter,
        reset: reset
    }
})();

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
