function isPrime(num){
   
    var r,
        div = 2,
        n = num;
    
    if(!isInteger(num)){
        return "It's not an integer";
    }
    
    if(n < 2){
        return false;
    } else if(num == 2){
        return true;
    }
    
    //check if it is а prime number
    do{
        r = n%div;
        if(r == 0){
            return false;
        }
        
        div++;
    } while(div != n);
    
    return true;
}

function isInteger(num){
    if(num % 1 != 0){
        return false;
    }
        
    return true;
}