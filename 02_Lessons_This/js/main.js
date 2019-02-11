function makeCounter () {
    let counter = 0;
    return function() {
        return counter++;
    }
}

let counter = makeCounter();

// Квест задача 01

const palmTree = (n = 1) => typeof n == 'number' && n > 0 ? 'n'.repeat(n): false;