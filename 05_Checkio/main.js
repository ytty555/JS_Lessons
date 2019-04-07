function weakPoint(matrix){
    let colWeakPoints = (() => {
        let arr = [];
        for (let i = 0; i < matrix.length; i++) {
            arr.push(0);
        }
        return arr;
    })();
    
    let rowWeakPoints = colWeakPoints.slice();
    let resWeakPoint = [];

    for (let row = 0; row < matrix.length; row++) {
        let sumRowPoints = 0;
        let sumColPoints = 0;
        for (let col = 0; col < matrix[row].length; col++) {
            sumRowPoints += matrix[row][col];
            colWeakPoints[col] += matrix[row][col];
        }
        rowWeakPoints[row] = sumRowPoints;
    }

    
}