// Окрестность Мура
function countNeighbours(data, row, col) {
    let allRow, allCol;

    allRow = data.length;
    allCol = data[0].length;
    let count = 0;
    let rowLimitA = (row - 1 < 0) ? 0 : row - 1;
    let rowLimitB = (row + 1 > allRow - 1) ? allRow - 1 : row + 1;
    let colLimitA = (col - 1 < 0) ? 0 : col - 1;
    let colLimitB = (col + 1 > allCol - 1) ? allCol - 1 : col + 1;

    let currCol;
    let currRow;
    for (currRow = rowLimitA; currRow <= rowLimitB; currRow++) {
        for (currCol = colLimitA; currCol <= colLimitB; currCol++) {
            count = (currCol == col && currRow == row) ? count : count + data[currRow][currCol];
        }
    }
    return count;
}

let A = countNeighbours([[1, 0, 0, 1, 0],
[0, 1, 0, 0, 0],
[0, 0, 1, 0, 1],
[1, 0, 0, 0, 0],
[0, 0, 1, 0, 0]], 1, 2); // 3

let B = countNeighbours([[1, 0, 0, 1, 0],
[0, 1, 0, 0, 0],
[0, 0, 1, 0, 1],
[1, 0, 0, 0, 0],
[0, 0, 1, 0, 0]], 0, 0); // 1

let C = countNeighbours([[1, 1, 1],
[1, 1, 1],
[1, 1, 1]], 0, 2); // 3

let D = countNeighbours([[0, 0, 0],
[0, 1, 0],
[0, 0, 0]], 1, 1); // 0

console.log(A);
console.log(B);
console.log(C);
console.log(D);