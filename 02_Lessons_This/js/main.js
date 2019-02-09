// function makeCounter () {
//     let counter = 0;
//     return function() {
//         return counter++;
//     }
// }

// let counter = makeCounter();

let module = (function() {
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

    return {
        setCounter: setCounter,
        getCounter: getCounter,
        plusCounter: plusCounter
    }
})();

console.log(module.getCounter());
