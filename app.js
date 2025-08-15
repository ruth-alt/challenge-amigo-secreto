// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let nombreDeAmigo= document.getElementById("amigo");
let listaAmigos=document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

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

function agregarAmigo(onclick){
    if(!validarNombreIngresado(nombreDeAmigo.value)) return;
    listaAmigos.innerHTML += `<li>${nombreDeAmigo.value}</li>`;
    nombreDeAmigo.value = "";
}

//funcionalidad del boton ´sortear amigo´
function sortearAmigo(){
    let listaAmigosLi = listaAmigos.childNodes;
    let indiceMaximo = listaAmigosLi.length; 
    
    // TODO validar que se insertaron amigos.
    if(!indiceMaximo) return alert("Ingrese al menos un nombre de un amigo  para continuar.");
    
    let indiceRandom = Math.floor(Math.random()*indiceMaximo); 
    let amigoSorteado = listaAmigosLi[indiceRandom]; 
    resultado.innerHTML = `¡Tu amigo secreto es ${amigoSorteado.textContent.toUpperCase()}🎉!`; 
}


        
      








