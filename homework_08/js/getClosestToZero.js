function getClosestToZero(){
    
    var closest = arguments[0];
    var n = arguments.length;
    
    if(n == 0){
        return "Array is empty";
    }
    
    //get the closest one
    for(var i = 1; i < n; i++){
        if(Math.abs(arguments[i]) < Math.abs(closest)){
            closest = arguments[i];    
        }
    }
    
    return closest;
}
