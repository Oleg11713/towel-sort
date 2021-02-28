
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let mas = [];
    if(Array.isArray(matrix) && matrix.length != 0){
    mas = mas.concat(matrix[0]);
    for(let i = 1; i < matrix.length; i++){
        if (i % 2 !== 0){
            mas = mas.concat(matrix[i].reverse());
        }
        else mas = mas.concat(matrix[i]);
    }
    return mas;
    }
    else return [];
}
