
function evenNumbers(num:number) :number[]{ 
    let arrayImpares: number[] = [];
    for(let i = 1; i <= num; i+=2){
        arrayImpares.push(i);
        }
        return arrayImpares;
    }

    console.log(evenNumbers(10)); // [1, 3, 5, 7, 9]

function myRevert(array: string[]): string[]{
    let arrayAlReves: string[] = [];
    for(let i = array.length - 1; i >= 0; i--){
        arrayAlReves.push(array[i]);
    }
    return arrayAlReves;
}

console.log(myRevert(['hola', 'caracola'])); 

function isRainbow(colors: Array<string>): Array<string>{
  let rainbow: Array<string> = ['rojo', 'naranja', 'amarillo', 'verde','añil', 'azul', 'violeta'];
  let respuesta: Array<string> = [];
  for(let i = 0; i < colors.length; i++){
      if((colors[i] === rainbow[0]) || (colors[i] === rainbow[1]) || (colors[i] === rainbow[2]) || (colors[i] === rainbow[3]) || (colors[i] === rainbow[4]) || (colors[i] === rainbow[5]) || (colors[i] === rainbow[6])){
          respuesta.push('si');
      } else {
          respuesta.push('no');
  }
}
return respuesta;
}

console.log(isRainbow(['negro', 'verde', 'rosa', 'amarillo', 'naranja']));

function add(myWords: string[]):number{
  let contador: number = 0
  for(let i = 0; i < myWords.length; i++){
    contador += myWords[i].length
}
return contador
}

console.log(add(['hola','adios']));