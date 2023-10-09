//--------------------------------------------------------------------------

console.log("EJERCICIO 1");

console.log("1");
let nuevoDiv =document.createElement("div");

console.log("2");
let textoNuevo = document.createTextNode("Nuevo elemento de la lista");

console.log("3");
nuevoDiv.appendChild(textoNuevo);
document.querySelector("#lipsum").appendChild(nuevoDiv);

console.log("4");
let negritas = document.createElement("p");
negritas.innerHTML = "Nuevo parrafo <strong>añadido</strong> por javascript"
document.querySelector("#lipsum").appendChild(negritas);

console.log("4.1");
let inputbis = document.createElement("input");
inputbis.id = "input1bis";
inputbis.value = "hola";
let labeldatobis = document.createElement("label");
labeldatobis.appendChild(document.createTextNode("Dato 1 bis"))
labeldatobis.appendChild(inputbis);
document.querySelector("label").after(labeldatobis)

//--------------------------------------------------------------------------

console.log("EJERCICIO 2");

console.log("1");
let primerParrafo = document.querySelector("#lipsum p");

console.log("2");
let nuevoParrafo = document.createElement("p");
nuevoParrafo.appendChild(document.createTextNode("Este es el segundo parrafo"));
console.log("3");
primerParrafo.before(nuevoParrafo);

//--------------------------------------------------------------------------

console.log("EJERCICIO 3");

console.log("1");
let primerElemento = document.querySelector("li");

console.log("2");
let nuevoElemento = document.createElement("li");
nuevoElemento.appendChild(document.createTextNode("Nuevo Elemento de la lista"));

console.log("3");
primerElemento.replaceWith(nuevoElemento);

console.log("4");
nuevoElemento.remove();

//--------------------------------------------------------------------------

console.log("EJERCICIO 4");

console.log("1");
let primerId = document.querySelector("[id]");

console.log("2");
primerId.setAttribute("data-nuevo","123");

console.log("3");
primerId.removeAttribute("data-nuevo");

console.log("4");
primerId.style.backgroundColor = "beige"

//--------------------------------------------------------------------------

console.log("EJERCICIO 5");

console.log("1");
let tmpElemento = document.querySelector("h1");
tmpElemento.className = "destacado";

console.log("2");
tmpElemento.classList.add("nuevo-estilo");

console.log("3");
tmpElemento.classList.remove("destacado");

console.log("4");
console.log(tmpElemento.classList.contains("nuevo-estilo"));