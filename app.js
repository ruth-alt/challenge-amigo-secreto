// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let nombreDeAmigo= document.getElementById("amigo");
let listaAmigos=document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

let btnSortear = document.getElementById("btnSortear");
let btnNuevoSorteo = document.getElementById("btnNuevoSorteo");
let idxAmigosSorteados=[];
let contadorSorteos = 0;


//elimia el contenido de la lista de resultados y lista de amigos
function limpiarElemento(resultado, listaAmigos){
    resultado.innerHTML="";
    listaAmigos.innerHTML="";
}
function ocultarElemento(elemento){
    elemento.style.display="none";
}
function mostrarElemento(elemento){
    elemento.style.display="flex";
}


function validarNombreIngresado(nombreDeAmigo){
    //validar que NO este vacio
    if(!nombreDeAmigo){
        alert("el campo esta vacio");
        return false;
    }
    // Validar que NO sea un número
    if (Number(nombreDeAmigo)) {
        console.log("validar solo nombres");
        alert("¡Solo se permiten letras como caracteres!");
        return false;
    }
    return true;  

}
//esta funcion añade un elemento li a la lista de amigos
function agregarAmigo(onclick){
    if(!validarNombreIngresado(nombreDeAmigo.value)) return;
    listaAmigos.innerHTML += `<li>${nombreDeAmigo.value}</li>`;
    nombreDeAmigo.value = ""; //reinicio de valor (nombre) del imput
    nombreDeAmigo.focus();//enfoque en el mismo imput
}

//funcionalidad del boton ´sortear amigo´
function sortearAmigo(){
    let listaAmigosLi = listaAmigos.childNodes;
    let indiceMaximo = listaAmigosLi.length; 
    
    // valida que se insertaron amigos.
    if(!indiceMaximo) return alert("Ingrese al menos un nombre de un amigo  para continuar.");

    if(contadorSorteos == indiceMaximo -1){
        //  ocultar boton de sorteo
        ocultarElemento(btnSortear);
        //  mostrar boton de nuevo sorteo
        mostrarElemento(btnNuevoSorteo);
    }
    
    //numero random
    let indiceRandom = Math.floor(Math.random()*indiceMaximo); 
    
    if(idxAmigosSorteados.includes(indiceRandom)){
        return sortearAmigo();
    };

    contadorSorteos++;
    idxAmigosSorteados.push(indiceRandom);

//hago uso del numero random para acceder a la lista de amigos por la pocision indica por el indice random
    let amigoSorteado = listaAmigosLi[indiceRandom]; 
    resultado.innerHTML = `¡Tu amigo secreto es ${amigoSorteado.textContent.toUpperCase()}🎉!`; 
}
//esta funcion prepara la aplicacion para un nuevo sorteo
function nuevoSorteo(){
    limpiarElemento(resultado,listaAmigos);
    ocultarElemento(btnNuevoSorteo);
    mostrarElemento(btnSortear);
}

//funcionalidad de la tecla enter 
function teclaEnter(e){
    if(e.keyCode != 13) return;
    agregarAmigo();
}














