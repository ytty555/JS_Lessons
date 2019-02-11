function makeCounter() {
    let counter = 0;
    return function () {
        return counter++;
    };
}

let counter = makeCounter();

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