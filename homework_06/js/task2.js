function convertTo(){

    let resUsd, resEuro, resUsdAndEuro;
    
    const perOneEuro = 34.5116;
    const perOneUsd = 27.7424;
    const error = "Incorrect data";
    
    //input values
    var euro = Number(prompt("Please input amount of EURO", ));
    var usd = Number(prompt("Please input amount of USD", ));
    
    //check the correctness of data
    if(isCorrect(euro, usd))
    {
        resEuro = Math.round((euro*perOneEuro)*1000)/1000;
        resUsd = Math.round((usd*perOneEuro)*1000)/1000;
        resUsdAndEuro = Math.round((perOneEuro/perOneUsd)*1000)/1000;
        
        console.log(euro + " euros are equal " + resEuro + " UAH, " + usd + " dollars are equal " + resUsd + " UAH, one euro is equal " + resUsdAndEuro  + " dollars.");
    }
    else console.log(error);
}

//check if data is correct
function isCorrect(eu, usd){
    
    if(eu < 0 || usd < 0 || isNaN(eu) || isNaN(usd))
    {
        return false;
    }       
    
    return true;
}
