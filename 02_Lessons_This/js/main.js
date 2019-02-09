function makeCounter () {
    let counter = 0;
    return function() {
        return counter++;
    }
}

let counter = makeCounter();
console.log(counter());