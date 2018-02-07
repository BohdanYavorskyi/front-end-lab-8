//main function
function myFunction() {
    
    let p, result;
    
    const error = "Incorrect data";
    const notTriangle = "It's not a triangle";
    
    //input values
    var a = Number(prompt("Please enter a", ));
    var b = Number(prompt("Please enter b", ));
    var c = Number(prompt("Please enter c", ));
    
    //checking if values have a number type
    if(isCorrect(a, b, c)){    
        //check if it can be a triangle
        if(!isTriangle(a, b, c))
            console.log(notTriangle);
        else{

            //find a square using Heron's formula
            p = (a+b+c)/2;
            result = Math.round(Math.sqrt((p*(p-a)*(p-b)*(p-c)))*100)/100;

            //output a result
            console.log("Type of triangle is " + typeOfTriangle(a, b, c) + " and square is " + result + '\n');
        }
    }
    else{
        console.log(error);
    }
}

//determine a type of triangle
function typeOfTriangle(a, b, c){
    
    const equ = "Equilateral";
    const iso = "Isosceles";
    const sca = "Scalene";
    const rt = "Right triangle"; 
    
    if( (a*a) + (b*b) == (c*c) )
        return rt;
    else if(a == b && a == c)
        return equ;
    else if( a!=b && a!=c && b!=c)
        return sca;
    else return iso;
       
}
                
//check if data is correct
function isCorrect(a, b, c){
    
    if(a <= 0 || b <= 0 || c <= 0 || isNaN(a) || isNaN(b) || isNaN(c))
    {
        return false;
    }       
    
    return true;
}

function isTriangle(a, b, c){
    
    if(a <= (b+c) && b <= (a+c) && c <= (a+b))
        return true;
        
    return false;
}