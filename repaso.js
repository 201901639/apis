//variables
let numero = 5;
const noCambia = "5";

//ifs fors y whiles
let a = 5;
let b = "5";

let lista = [5, true, "Silvia"];

for (let i = 0; i<lista.length; i++){
    console.log(lista[i]);
}

for (let elemento of lista){
    console.log(elemento);
}

if(a == b){
    console.log("Son de igual valor a y b");
} else{
    console.log("No son de igual valor");
}

if(a === b){
    console.log("Son de igual forma a y b");
} else {
    console.log("No son de igual forma a y b");
}

//variables objetos
let persona = {
    Nombre: "Silvia",
    Edad: 21,
    Carrera: "Difícil",
    Apellidos: {
        primerApellido: "García",
        segundoApellido: "Lage",
    },
}

console.log(persona.Apellidos.primerApellido);

//funciones
function imprimirMensaje(mensaje){
    console.log(mensaje);
}

let imprimirMensaje2 = (mensaje) => {
    console.log(mensaje);
};

imprimirMensaje("Hola capullos");
imprimirMensaje2("Hola subnormales");

let llamarFuncion = (funcion) => {
    const mensaje = "Mensaje de la funcion llamarFuncion";
    funcion(mensaje);
};

llamarFuncion(imprimirMensaje2);

//también se puede hacer la función de la manera anónima

llamarFuncion((mensaje) => {
    console.log(mensaje);
});

//relacionarse con html
let myDiv = document.getElementById("my-div");
console.log(myDiv);

let myGroup = document.getElementsByClassName("div-group");
console.log(myGroup);

let div = document.getElementsByTagName("div");
console.log(div);

/*let parrafo = document.getElementById("parrafo");
parrafo.innerHTML = "Hola me llamo Silvia";
console.log(parrafo.innerHTML);

let botonPinchado = () =>{
    console.log("Se ha pinchado el botón juju");
};*/

