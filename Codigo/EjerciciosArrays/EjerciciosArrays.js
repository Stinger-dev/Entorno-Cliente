//1
const listaCompra  = ["peras", "manzanas", "kiwis", "platanos", "mandarinas"]

console.log(listaCompra.splice(listaCompra.indexOf("manzanas"),1));
console.log(listaCompra);

console.log(listaCompra.splice(listaCompra.indexOf("platanos"),0,"naranjas", "sandia"));
console.log(listaCompra);

console.log(listaCompra.splice(listaCompra.indexOf("kiwis"),1,"cerezas", "nisperos"));
console.log(listaCompra);

//2
const arrayNumeros = [2,4,6,8];

const copia = arrayNumeros.slice()

copia[0] = 20;
console.log(arrayNumeros);
console.log(copia);