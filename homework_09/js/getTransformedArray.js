function increment(num) { 
    return num + 1;
} 

function getTransformedArray(arr, incFunc){
    
    //create a new transformed array
    var newArr = forEach(arr, el => {
        //console.log(incFunc(el));
        return incFunc(el);
    });
    
    return newArr;
}
