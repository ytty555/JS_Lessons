function biggerPrice(limit, data) {
    // TOP most expensive goods
    // Массив индексов
    let arrIndex = [];
    let arrValue = [];
    let arrRes = [];
    // your code here
    for (let n = 1; n <= limit; n++) {
        let max = 0;
        let indexMax = null;
        for (let i = 0; i < data.length; i++) {
            let currPrice = data[i].price;
            if (!arrValue.includes(currPrice)) {
                indexMax = (currPrice > max) ? i : indexMax;
                max = (currPrice > max) ? currPrice : max;
            }
        }
        arrIndex.push(indexMax);
        arrValue.push(max);
    }
    for (let i = 0; i < arrIndex.length; i++) {
        arrRes.push(data[arrIndex[i]]);
    }
    return arrRes;
}


console.log(biggerPrice(2, [
    {"name": "bread", "price": 100},
    {"name": "wine", "price": 138},
    {"name": "meat", "price": 15},
    {"name": "water", "price": 1}
]));