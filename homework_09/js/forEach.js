var numbers = [3,5,2,1];

function forEach(arr, output){
    
    var res = new Array();
    
    //call a function for each element
    for(var i = 0; i < arr.length; i++){
        res[i] = output(arr[i]);
    }
    
    return res;
}

function output(item){
    console.log(item);    
    return item;
}