console.log("EJERCICIO 1");
console.log("1");
document.getElementById("botonPrueba11").addEventListener("click", () =>{
  console.log("botonPruebaPulsado");
})

console.log("2");
let enlace12 = document.getElementById("enlace12");
enlace12.addEventListener("mouseover", (event) =>{
  event.target.style.backgroundColor = "red";  
})


console.log("3");
document.body.addEventListener("mousemove",(event)=>{
  document.getElementById("mousePosition").textContent = `Posicion respecto cliente: x=${event.clientX} / y=${event.clientY}`;
  document.getElementById("mousePosition2").textContent = `Posicion pantalla: x=${event.screenX} / y=${event.screenY}`;
})

console.log("EJERCICIO 2");
console.log("1 y 2");
document.body.addEventListener("keypress",(event) =>{
  //La vd que poner una alerta es un poco caca, asi que mejor un clg y asi no molesta tanto
  console.log(event.key);
  console.log(event.keyCode);
})


console.log("EJERCICIO 3");
console.log("1");
document.getElementById("testList").addEventListener('click', (event) =>{
  if(event.target.tagName === "LI")
   console.log(event.target.textContent);

},true)
console.log("2");
document.getElementById("testList").addEventListener('click', (event) =>{
  if(event.target.tagName === "LI")
   console.log("Nivel 2");
  else
    console.log("Nivel 1");

},true)


console.log("EJERCICIO 4");

console.log("1");
document.getElementById("submitForm").addEventListener("click",(event) =>{
  event.preventDefault();
  if(document.getElementById("emailInput1").value == "" && document.getElementById("textInput1").value == ""){
    alert("campo vacio");
  }else{
    document.getElementById("submitForm").click();

  }
})