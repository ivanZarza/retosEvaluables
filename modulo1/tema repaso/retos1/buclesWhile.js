function hasEven(myNums) {
    var i = 0;
    while (i < myNums.length) {
        if (myNums[i] % 2 === 0) {
            return true;
        }
        i++;
    }
    return false;
}
console.log(hasEven([1, 3, 5, 7]));
function startWhitM(myNames) {
    var i = 0;
    while (i < myNames.length) {
        var palabra = myNames[i];
        if (palabra.charAt(0) === 'M') {
            return true;
        }
        i++;
    }
    return false;
}
console.log(startWhitM(['mario', 'pedro']));
console.log(startWhitM(['Mario', 'pedro']));
