var charactersMap = {a: "o", c: "d", t: "g"}

function cypherPhrase(chars, str){
    var newS = getTransformedArray(str, el => {
        var letter,
            obj = chars;  

        for (var i in obj) {
            if (i == el) {
                letter = obj[i];
                return letter;  
            }
        }

        letter = el;
        return letter;
    });

    //convert to String
    var res = Array.prototype.join.call(newS, '');
    
    return res;
}
