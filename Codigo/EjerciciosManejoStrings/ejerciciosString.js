//1
const longitud = (cadena) =>{
    return cadena.length;
}
console.log(longitud("ana"));

//2
const getFirstLetter = (cadena) => {
    return cadena.charAt(0);
}
console.log(getFirstLetter("ana"));


//3
const getLastLetter = (cadena) => {
    return cadena.charAt(cadena.length-1);
}
console.log(getLastLetter("abc"));

//4
const getLetterAt = (cadena,position)=>{
    position = position-1;
    if(position<cadena.length){
        return cadena.charAt(position);

    }
}
console.log(getLetterAt("abc",3));

//5
console.log("wonderful day".substring(3,7));

//6
const getLognerString   =( aString, bString)=>{
    return aString.length>bString.length ? aString:bString;
}
console.log(getLognerString("hola", "buenos dias"));
console.log(getLognerString("estaesmaslarga", "a"));
console.log(getLognerString("hola", "adio"));

//7
const getLongerString2 = (aString, bString, cString) => {
    return aString.length == bString.length || 
            aString.length == cString.length||
            cString.length == bString.length ? "Al menos hay dos iguales" 
        : getLognerString(getLognerString(aString, bString), getLognerString(bString,cString));
}
//Deberia devolver 333
console.log(getLongerString2("1","22","333"));
console.log(getLongerString2("1","333","22"));
console.log(getLongerString2("333","22","1"));

//Deberia devolver iguales
console.log(getLongerString2("1","1","333"));
console.log(getLongerString2("1","333","1"));
console.log(getLongerString2("333","1","1"));

//8
const generarNombre = (name, aLastname, bLastname ) => {
    return name.length < 5 || aLastname.length < 5 || bLastname.length <5?  "error": 
        name.substring(0,3) + aLastname.substring(0,3) + bLastname.substring(0,3);
}
console.log(generarNombre("gonzalo", "callejas", "ro"));
console.log(generarNombre("gonzalo", "callejas", "rojas"));

//9
const generarNombre2 = (name, aLastname, bLastname) =>{
    return name.length < 5 || aLastname.length < 5 || bLastname.length <5?  "error": 
    getLastLetter(name) + getLastLetter(aLastname) + getLastLetter(bLastname);
} 
console.log(generarNombre2("gonzalo", "callejas", "ro"));
console.log(generarNombre2("gonzalo", "callejas", "rojas"));


//10
const generarNombre3 = (name, aLastname, bLastname) =>{
    return name.length < 5 || aLastname.length < 5 || bLastname.length <5?  "error": 
    name.substring(name.length, name.length-3) + aLastname.substring(aLastname.length, aLastname.length-3) 
    + bLastname.substring(bLastname.length, bLastname.length-3);

} 

console.log(generarNombre3("gonzalo", "callejas", "rojas"));
console.log(generarNombre3("gonzalo", "callejas", "ros"));


//11
const tieneLetra = (string, letter) => {
    return string.lastIndexOf(letter) !== -1;
}
console.log(tieneLetra("hola", "a"));
console.log(tieneLetra("hola", "x"));


//12
const tieneLetra2 = (string, letter) => {
    return tieneLetra(string.toLocaleLowerCase(), letter.toLocaleLowerCase()); 
}

console.log(tieneLetra2("hola", "A"));
console.log(tieneLetra2("hola", "a"));
console.log(tieneLetra2("hola", "x"));

//13
const crearPalabra = (letter, times) =>{
    return letter.repeat(times)
} 

console.log(crearPalabra("a",10));

//14
const crearPalabra2 = (letter, times) =>{
    return crearPalabra(letter, times).toLocaleUpperCase();
} 
console.log(crearPalabra2("a",10));


//15 
"".indexOf
const guiones = (string) =>{
    let final = ""
    for (let k = 0; k < string.length; k++) {
        final+=string.charAt(k);
        if(k != string.length-1){
            final+="-";    
        }
    }
    return final;
} 
console.log(guiones("hola"));

// 16
const contarLetra = (string, letra) => {
    let contador = 0;
    for (let k = 0; k < string.length; k++) {
        if(string.charAt(k) == letra){
            contador++;
        }
    }
    return contador;
}

console.log(contarLetra("aaa", "a"));

//17 
const contarLetra2 = (string, letra) => {
    return contarLetra(string.toLocaleLowerCase(), letra.toLocaleLowerCase());
}

console.log(contarLetra2("AAA", "a"));

//18
const devolverRaro  = (string) =>{
    return `${string.toLocaleLowerCase()} - ${string.toLocaleUpperCase()}`
}
console.log(devolverRaro("HoLa"));

//19 
const shortcout  = (stringA, stringB) =>{

    return getFirstLetter(stringA) + getFirstLetter(stringB);
}
console.log(shortcout("Amnistia", "Iternacional"));

//20 
const firstChar = (string) =>{
    return string.trim().charAt(0);
}
console.log(firstChar(" hola"));

//21 

const indexOfIgnoreCase = (string, letras) => {
    return string.toLocaleLowerCase().indexOf(letras.toLocaleLowerCase());
}
console.log(indexOfIgnoreCase("bit","it"));

//22 
const firstWord = (stringA) =>{
    return stringA.trim().substring(0, stringA.trim().indexOf(" "));
}
console.log(firstWord("see and stop"));