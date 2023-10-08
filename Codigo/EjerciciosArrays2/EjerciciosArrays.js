//1
function saludar(name) {
    console.log(name);
}
saludar("pepe")
const saludarAF = (name) =>{
    console.log(name);
}
saludarAF("pepe")


//2 
const potencia = (base = 5, exponente = 2) =>{
    return Math.pow(base, exponente);
}

console.log(potencia(2));

//3
const aplica_fn = (numero, funcion) =>{
    return funcion(numero);
}

console.log(aplica_fn(2,potencia));

//4

let  principal=  [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(principal.filter((numero) => numero%2 == 0)); //se le pasa directamente una funcion con un argumento

console.log(principal.map(number => number*number));

console.log(principal.reduce((total,number) => total += number ));

console.log(principal.every((number) => number > 0));

console.log(principal.some((number) => number>10));

//5
console.log("ejercicio 5");
const persona = {
    nombre: "Juan",
    edad: 30,
    direccion: {
      calle: "Calle Principal",
      ciudad: "Ciudad"
    }
  };

let  persona2 = JSON.parse(JSON.stringify(persona));
console.log(persona.edad);
persona2.edad = 2;
console.log(persona.edad);

console.log(persona.direccion.calle);
persona2.direccion.calle = "calle escopeta";
console.log(persona.direccion.calle);

//6 
const arrayPruebas = [1, 2, 3, 4, 5];

let  [a,b,c,d,e] = arrayPruebas;
console.log(a);

const persona3 = { nombre: "Alice", edad: 25 }

let  {nombre, edad} = persona3;
console.log(nombre);  

//7

const nombres = ["Ana", "Juan", "Luis", "Ana", "Luis", "María"];

let noRepetidos = new Set(nombres);
console.log(noRepetidos);
let arrayNoRepes =  Array.from(noRepetidos);
console.log(arrayNoRepes);

