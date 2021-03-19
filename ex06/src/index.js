var myArray =[
    [2],
    [5, 6, 7],
    [8, 9]

];
var sum = 0;
function multiplyArrayFunction(myArray){
    for(var i = 0; i < myArray.length; i++){
     for(var j = 0; j < myArray[i].length; j++) {
        sum += myArray[i][j];
    }
    }
    
  }console.log(multiplyArrayFunction(sum));
  module.exports = multiplyArrayFunction;