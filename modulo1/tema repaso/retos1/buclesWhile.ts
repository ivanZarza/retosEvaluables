function hasEven(myNums: number[]): boolean {
    let i = 0;
    while (i < myNums.length) {
        if (myNums[i] % 2 === 0) {
            return true;
        }
        i++;
    }
    return false;
}

console.log(hasEven([1,3,5,7]));

function startWhitM(myNames: string[]): boolean {
  let i = 0;
  while (i < myNames.length){
    let palabra: string = myNames[i]
    if (palabra.charAt(0) === 'M'){
      return true;
    }
    i++;
    }
  return false;
}

console.log(startWhitM(['mario', 'pedro']));
console.log(startWhitM(['Mario', 'pedro']));