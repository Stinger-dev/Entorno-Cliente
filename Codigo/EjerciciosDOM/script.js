console.log("PRIMERA PARTE");
console.log("1");
console.log(document.getElementById("lipsum"));
console.log("2");
console.log(document.getElementsByClassName("error"));
console.log("3");
console.log(document.getElementsByTagName("p"));
console.log("4");
console.log(document.querySelector(".error"));
console.log("5");
console.log(document.querySelectorAll(".error"));
console.log("6");
console.log(document.getElementById("input2"));
console.log(document.querySelector("#input2"));

console.log(document.getElementsByTagName("p"));
console.log(document.querySelectorAll("p"));

console.log(document.querySelectorAll("#lipsum p"));
console.log(document.getElementById("lipsum").getElementsByTagName("p"));

console.log(document.querySelector("form"));
console.log(document.getElementsByTagName("form")[0]);

console.log(document.getElementsByTagName("input"));
console.log(document.querySelectorAll("input"));

console.log(document.querySelectorAll("input[name=sexo]"));
console.log(document.getElementsByName("sexo"));

console.log(document.querySelectorAll("li.important"));
console.log(document.querySelectorAll("ul .important"));


console.log("SEGUNDA PARTE ");

console.log("1");
console.log(document.querySelector("#lipsum p:first-of-type"));

console.log("2");
console.log();
 

console.log("3");
console.log(document.querySelector("#lipsum p:first-of-type").nextElementSibling.parentElement);

console.log("4");

console.log(document.querySelector("#lipsum p:first-of-type"));
console.log(document.getElementById("lipsum").children[0]);

console.log(document.querySelector("#lipsum p:nth-of-type(2)"));
console.log(document.getElementById("lipsum").children[1]);

console.log(document.querySelector("#lipsum p:last-of-type"));
console.log(document.getElementById("lipsum").children[document.getElementById("lipsum").childElementCount-1]);

console.log(document.getElementsByName("sexo")[0].parentElement);
console.log(document.querySelector("label:last-of-type"));


console.log("TERCERA PARTE");
console.log("1");
let div1 = document.querySelector("div#lipsum p");
console.log("2");
console.log(div1.innerHTML);

console.log("3");   
console.log(div1.textContent);

console.log("4");
const campoTexto = document.querySelector("input[type = text");

console.log("5");
console.log(campoTexto.value);
console.log("6");
console.log(document.getElementsByName("sexo")[0].parentElement.innerHTML);

console.log(document.getElementsByName("sexo")[0].parentElement.textContent);

console.log(document.querySelector("input[name=sexo]").value);

console.log(document.querySelector("input[name=sexo]:checked").value); 