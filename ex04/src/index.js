//Create an array here
var monitorsListArray = ["Apple", "Peach", "Berry"];
var monitorsList = [];

//End of creating an array

//Only change code below this line
function myMonitorsFunction(arr){
    for(var i = 0; i < monitorsListArray.length; i++){
        monitorsList.push([monitorsListArray[i], i + 1]);
    }
    return monitorsList;
}
  
//Only change code above this line


console.log(myMonitorsFunction(monitorsList));
module.exports = myMonitorsFunction;