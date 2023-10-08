//1 
console.log("EJERCICIO - 1 TODO");
const capitalizarPalabras = (cadena) =>  {
    let resultado = "";
     cadena = cadena.trim().split(" ");

     for(let i  = 0; i< cadena.length; i++){
        cadena[i] = cadena[i].replace(cadena[i][0],cadena[i][0].toLocaleUpperCase())
     }
     

    return cadena.join(" ");
}
console.log(capitalizarPalabras(" hola mundo"));
//2 
console.log("EJERCICIO - 2");

const invertirCadena = (cadena) =>{
    let resultado = ""
    for(let i = cadena.length-1; i >= 0; i--){
        resultado+=cadena[i];
    }
    return resultado;
}
console.log(invertirCadena("hola"));


//3 
console.log("EJERCICIO - 3");

const contarVocales = (cadena) =>{
    cadena  = cadena.toLowerCase();
    let contador = 0;
    for (let i =0 ; i< cadena.length; i++){
        if(["a","e", "i", "o", "u"].indexOf(cadena[i]) != -1){
            contador++;
        }
    }
    return contador;
}
console.log(contarVocales("hOla"));

//4
console.log("EJERCICIO - 4");

const eliminarDuplicados = (cadena) =>{
    let tmpArray = [];
    for(let i = 0; i< cadena.length; i++){
        if (tmpArray.indexOf(cadena[i]) == -1){
            tmpArray.push(cadena[i])
        }
    }    
    return tmpArray.toString().replaceAll(",", "");
}
console.log(eliminarDuplicados("programming"));


//5
console.log("EJERCICIO - 5");

const validarEmail = (cadena) =>{
    let resultado =false;
    if(cadena.includes("@") && cadena.includes(".") && 
    !cadena.startsWith(".") && !cadena.startsWith("@") &&
    !cadena.endsWith(".") && !cadena.endsWith("@")){

        resultado = true
    }

    return resultado;
}
console.log(validarEmail("hola@asdf.com"));

//6
console.log("EJERCICIO - 6");

const esTelefono = (cadena) =>{
    let resultado = true;
    let filtrado = "";
    let numerosValidos = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    let elementosValidos = ["(", ")", ".", " ", "-"]
    for (let index = 0; index < cadena.length; index++) {
        if(numerosValidos.indexOf(cadena[index]) != -1){
            filtrado+= cadena[index];
        }else if (elementosValidos.indexOf(cadena[index]) ==-1) {
            resultado = false;
        }
    }
    resultado = resultado && filtrado.length == 10
    return resultado;
} 

console.log(esTelefono("(123) 456-7890"));
console.log(esTelefono("1234567890"));


//8
console.log("EJERCICIO - 8");

const esPalindromoFrase = (cadena) =>{
    let resultado = true;
    let contador = 0;
    cadena = cadena.toLowerCase().replaceAll(" ", "");
    cadena = cadena.replaceAll(",", "");
    cadena = cadena.replaceAll(".", "");


    while (resultado && contador < cadena.length) {
        if (cadena[contador] != cadena[cadena.length-contador-1]){
            resultado = false;
        }
        contador++;
    }
    return resultado;
} 
console.log(!esPalindromoFrase("abcbx"));
console.log(esPalindromoFrase("abcba"));
console.log(esPalindromoFrase("Anita lava la tina"));




//9
console.log("EJERCICIO - 9");

const encontrarPalindromos = (cadena) => {
    cadena = cadena.trim().split(" ");
    return cadena.filter(palabra => esPalindromoFrase(palabra));
}

console.log(encontrarPalindromos("radar nivel hola mundo"));
