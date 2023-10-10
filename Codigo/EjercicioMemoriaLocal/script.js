const htmlUserList = document.getElementById("userList");
const htmlForm = document.getElementById("userForm");
const inputEmail = document.getElementById("email");
const inputName = document.getElementById("name");
const inputaddress = document.getElementById("address");


// localStorage.setItem("users",JSON.stringify([{"nombre":"Gonzalo", "direccion":"calle escopeta", "email":"123@g.com"}, {"nombre":"Joseju", "direccion": "brenes", "email":"suJosejuRechulon@hotmail.com"}, {"nombre":"joaquin", "direccion": "brenes", "email":"XxBrasileiroxX@yahoo.es"}]));

const alreadyAdded = (user) =>{
    //Declaramos una funcion auxiliar que me compruba si un usuario ya esta añadidod al array de usuarios
    for (const element of users) {  
        if(user.nombre == element.nombre && user.direccion == element.direccion && user.email == element.email){
            return true;
        }
    }
    return false;
}
const removeUserHtml = (user) =>{
    user.parentElement.remove();
}

const removeUserMemory = (user) =>{
    //Borramos el usuario del array y actualizamos la memoria local
    users.splice(users.indexOf(user),1);
    localStorage.setItem("users",JSON.stringify(users));
}

const addUser = (userObj) =>{
    //Creamos el elemento li en el que estara todo el texto y los botones
    let tmpLi = document.createElement("li");
    tmpLi.appendChild(document.createTextNode(`${userObj.nombre}: ${userObj.direccion} : ${userObj.email}`));

    //Creamos el boton junto a al event listener para que al pulsarlo llame a las funciones auxiliares para borrar
    let tmpDeleteButton = document.createElement("input");
    tmpDeleteButton.type = "button";
    tmpDeleteButton.value = "Borrar"
    tmpDeleteButton.addEventListener("click", (e)=>{
        removeUserHtml(e.target);
        removeUserMemory(userObj);
    })
    tmpLi.appendChild(tmpDeleteButton);

    //Creamos el boton para editar el usuario, lo eliminamos y añadimos los campos del usuario a los campos de texto
    let tmpEditButon = document.createElement("input");
    tmpEditButon.type = "button";
    tmpEditButon.value = "Editar";
    tmpEditButon.addEventListener("click", (e)=>{
        removeUserHtml(e.target);
        removeUserMemory(userObj);

        inputName.value = userObj.nombre;
        inputaddress.value = userObj.direccion;
        inputEmail.value = userObj.email;
    })
    tmpLi.appendChild(tmpEditButon);
    
    htmlUserList.appendChild(tmpLi);
    

    //Verificamos que el usuario no exista en el aray  
    if(!alreadyAdded(userObj)){
        users.push(userObj);
        localStorage.setItem("users",JSON.stringify(users));
    }
}

const initUsers = (usersList) =>{
    usersList.forEach(element => {
        addUser(element);
    });
}

let users = localStorage.getItem("users");
if(users != null){
    users = JSON.parse(users);
    initUsers(users);
}else{
    users = [];
    console.log("Memoria vacia");
}


htmlForm.addEventListener("submit", (event) =>{
    event.preventDefault();
    let tmpUser = {"nombre":inputName.value, "direccion": inputaddress.value, "email" :inputEmail.value};
    if(!alreadyAdded(tmpUser)){
        addUser(tmpUser);
    }else{
        alert("Añadido un usuario que ya existia");
    }
    inputName.value = "";
    inputaddress.value = "";
    inputEmail.value = "";
})