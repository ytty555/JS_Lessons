function Machine(power) {
    this._enabled = false;

    this.enable = function () {
        this._enabled = true;
    };
    this.disable = function () {
        this._enabled = false;
    };
}

function Fridge(power) {
    Machine.apply(this, arguments);

    let food = [];
    let maxFood = Math.round(power / 100);
    let parentDisable = this.disable;

    this.disable = function() {
        if (food.length) return console.log('Холодильник не может быть выключен, т.к. в нем есть продукты.');
        parentDisable.call(this);
    }

    this.addFood = function (...arr) {
        if (!this._enabled) {
            console.log('Ошибка. Холодильник выключен');
            return;
        }

        for (let i = 0; i < arr.length; i++) {
            if (food.length < maxFood) {
                food.push(arr[i]);
            } else {
                console.log(`Холодильник переполнен. Количество еды в нем = ${food.length}`);
            }
        }
    };

    this.getFood = function () {
        return food.slice;
    };

}

function CoffeMachine(power, capacity) {
    Machine.apply(this, arguments);

    let waterAmount = 0;
    let WATER_HEAT_CAPASITY = 4200;
    let timerID;
    let disableParent = this.disable;

    this.disable = function (args) {
        disableParent.apply(this, args);
        this.stop();
    };

    function getBoilTime() {
        return waterAmount * WATER_HEAT_CAPASITY * 80 / power;
    }

    function onReady() {
        console.log('Кофе готов!');
    }

    this.waterAmount = function (amount) {
        if (!arguments.length) return waterAmount;

        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить воды больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    this.addWater = function (amount) {
        if (!arguments.length) {
            throw new Error('Значение не передано');
        }
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if ((amount + waterAmount) > capacity) {
            throw new Error("Нельзя залить воды больше, чем " + capacity);
        }

        waterAmount += amount;
    };

    this.getPower = function () {
        return power;
    };

    this.run = function () {
        if (!this._enabled) {
            console.log('Кофемашина выключена');
            return;
        }

        timerID = setTimeout(function () {
                timerID = null;
                onReady();
            },
            getBoilTime());
    };

    this.setOnReady = function (foo) {
        onReady = foo;
    };

    this.stop = function () {
        clearTimeout(timerID);
        timerID = null;
    };

    this.isRunning = function () {
        if (timerID) {
            return true;
        } else {
            return false;
        }
    };

}

let coffeMachine = new CoffeMachine(50000, 1000);

let fridge = new Fridge(600);
fridge.enable();
console.log(fridge._enabled);
fridge.addFood('Пиво')
fridge.disable();
console.log(fridge._enabled);
