
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let array = [];

    if (!matrix || matrix.length === 0) {
        return array;
    }

    matrix.map(function(item,index) {
        if ( index % 2 == 0) {
            array.push(item);
        } else 
        array.push(item.reverse());
    })
    return array.flat();
    console.log(array);
}
