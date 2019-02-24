function CoffeMachine(power, capacity) {
    'use strict';

    let waterAmount = 0;
    let WATER_HEAT_CAPASITY = 4200;
    let timerID;

    function getBoilTime() {
        return waterAmount * WATER_HEAT_CAPASITY * 80 / power;
    }

    function onReady() {
        alert('Кофе готов!');
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
coffeMachine.addWater(950);
alert(coffeMachine.waterAmount());


alert('До:' + coffeMachine.isRunning());
coffeMachine.run();
alert('В процессе:' + coffeMachine.isRunning());

coffeMachine.setOnReady(function () {
    var amount = coffeMachine.waterAmount();
    alert('Готов кофе: ' + amount + 'мл ' + coffeMachine.isRunning()); // Кофе готов: 150 мл
});
// coffeMachine.stop();