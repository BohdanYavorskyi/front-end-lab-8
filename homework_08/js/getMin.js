function getMin(){
    
    var min = arguments[0];
    var n = arguments.length;
    
    if(n == 0){
        return "Array is empty";
    }
    
    for(var i = 1; i < n; i++){
        min = Math.min(arguments[i], min);
    }
    
    return min;
}
