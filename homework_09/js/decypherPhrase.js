var charactersMap = {a: "o", c: "d", t: "g"}

function decypherPhrase(chars, str){
    
    //invert an object
    var invertedObj = invertObj(chars);
    
    var res = cypherPhrase(invertedObj, str);
    
    //convert a string to the array
    return res.split('');
}

//invert property value to property
function invertObj(obj) {

  var newObj = {};

  for (var property in obj) {
    if(obj.hasOwnProperty(property)) {
        newObj[obj[property]] = property;
    }
  }

  return newObj;
};