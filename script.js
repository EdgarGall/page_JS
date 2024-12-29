import {basilica, puente, carabobo, castillo, maracaibo} from './turismo.js'

//obtener valores del DOM

// consultar todos los elementos de la etiqueta <a>
let enlazar = document.querySelectorAll("a")

let title = document.getElementById("titular")

let subtituloElemento = document.getElementById("subtitulo")
let parrafoElemento = document.getElementById("parrafo")


console.log(enlazar)
// Recorrer la lista de elementos de enlazar 
enlazar.forEach(function(enlace){ // cada elemento individualmente cumplira la siguiente funcion
    // N°#  elemento individual (QUE HACER SI LE DAN CLICK cumplir una funcion)
            //Parametros// onclick , la funcion 
    enlace.addEventListener("click", function(){
        enlazar.forEach(function(enlace){
            //remover el active
            enlace.classList.remove('active');
            
        });

        //Agregar active
        this.classList.add('active')
        console.log(enlace)

        
        //obtener el contenido
        let info =  tomarInformacion(this.textContent)
        //this.style.backgroundColor = '#152eff'
        //traer la informacion del objeto seleccionado
    
        title.innerHTML = info.titulo
        subtituloElemento.innerHTML = info.subtitulo
        parrafoElemento.innerHTML = info.parrafo
    
    //mostrar en el DOM
    }); 
});


//Funcion para traer la informacion correcta desde 

function tomarInformacion(enlace){
    let info ={
        'Inicio':maracaibo,
        'Basilica':basilica,
        'Puente':puente,
        'Carabobo':carabobo,
        'Castillo': castillo
    }
    return info[enlace]
}