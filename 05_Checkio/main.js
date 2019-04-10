function weakPoint(matrix) {
    let arrRow = [];
    let arrCol = [];
    let wRow = 0;
    let minWRow = 0;
    let minWCol = 0;

    for (let i = 0; i < matrix.length; i++) {
        arrCol.push(0);
    }

    for (let row = 0; row < matrix.length; row++) {
        wRow = 0;
        for (let col = 0; col < matrix[row].length; col++) {
            wRow += matrix[row][col];
            arrCol[col] += matrix[row][col];
        }
        arrRow.push(wRow);
    }

    let cloneRow = arrRow.slice();
    let cloneCol = arrCol.slice();

    minWRow = arrRow.sort((a,b) => a - b)[0];
    minWCol = arrCol.sort((a,b) => a - b)[0];

    return [cloneRow.indexOf(minWRow), cloneCol.indexOf(minWCol)];
}

console.log(weakPoint([[7, 2, 7, 2, 8],
    [2, 9, 4, 1, 7],
    [3, 8, 6, 2, 4],
    [2, 5, 2, 9, 1],
    [6, 6, 5, 4, 5]]
    ));