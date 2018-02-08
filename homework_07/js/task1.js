//main function
function myFunction() {
    const error = "Incorrect!";
    
    //input values
    var N = Number(prompt("Please enter natural number between 0 and 20", ));
    
    //checking if values have a natural number type
    if(isCorrect(N)){    
       buildPyramid(N);
    }
    else{
        console.error(error);
    }
}
                
//check if data is correct
function isCorrect(N){
    if((N % 1) != 0 || isNaN(N) || N < 0 || N>20 )
    {
        return false;
    }       
    
    return true;
}

//buid a pyramid
function buildPyramid(N){
    let res = '', 
        i = 0, squares = 1, 
        numOfSpaces = (N - 1)*3,
        resSpaces = '',
        resSquares = '';
    
    //if user's inputed 0 not to show anything
    if(N == 0){
        console.log("Pyramid with 0 floors (N = 0)");
        return;
    }
    
    do{
        resSpaces = getSpaces(numOfSpaces);
        resSquares = getSquares(squares);
        res = resSpaces + resSquares;
        
        console.log(res);
        
        i++; squares+=2; numOfSpaces -= 3; 
        res = ''; resSquares = ''; resSpaces = '';
    } while (i < N);
    
    console.log("Pyramid with " + N + " floors (N = " + N + ")");
}

//get number of spaces before squares
function getSpaces(spaces){ 
    var res = '';
    
    for(let i = 0; i < spaces; i++){
        res += ' '; 
    }   
    
    return res;
}

//get number of squares in a row
function getSquares(k){ 
    var res = '';
    
    for(let i = 0; i < k; i++){    
        res += ("[~]");
    }
    
    return res;
}
