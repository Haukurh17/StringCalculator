function lessThan(num) {
    return num < 0;
}
function add (numbers){
    if(numbers == "")
        return 0;

    if(numbers.includes(",")){
        if(numbers.includes("\n")){
            var numberArray = numbers.replace(/\n/g, ",").split(",")
            return sum(numberArray);
        }
        if(numbers.includes("-")){
            let negnumbsArray = [];
            let tempArray = numbers.split(",");
            for(let i = 0; i < tempArray.lenght; i++) {
                if(tempArray[i].includes("-")) {
                    negnumbsArray.push(tempArray[i]);
                }
            }
            return "Negative not allowed: " + negnumbsArray;
        }
        var numberArray = numbers.split(",");
        return sum(numberArray);
    }
    else
        return parseInt(numbers);
}

function sum(numberArray){
    var total = 0;
    for(var i=0 ; i < numberArray.length ; i++){
        total += parseInt(numberArray[i]);
    }
    return total;
}

module.exports = add;