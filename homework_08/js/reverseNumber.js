function reverseNumber(num){
    
    let minus = '-',
        res = '', 
        r;
    
    //check if an integer
    if(!isInteger(num)){
        return "It's not an integer";
    }
    
    //check if the number is less than 0
    if(num < 0){
        res += minus;
    }
    
    var n = Math.abs(num);
    
    //reverse a number
    do{
        r = n%10;
        n = parseInt((n/10), 10);
        
        res+= r;   
    } while(n != 0);
        
    return Number(res);
}

function isInteger(num){
    if(num %1 != 0){
        return false;
    }
        
    return true;
}