function predicateFunction(num) { 
    return num > 3;
} // returns boolean value

function getFilteredArray(arr, predFunc){
    
    var count = 0, filteredArr = new Array();
    
    //create a new filtered array where predFunc returns true
    forEach(arr, el => {
        if(predFunc(el)){
            console.log((el));
            
            filteredArr[count] = el;
            count++;
        }
    });
    
    return filteredArr;
}
