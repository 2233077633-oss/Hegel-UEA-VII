const obras = {

    obras: {
        obra1:{
            numero: 1,
            titulo: "Tengo mucho ruido",
            imagen: "assets/uno.jpg",
            descrpcion: "Nace a partir de reflejar lo que sucede en mi cabeza, un sin fin de pensamientos que me atormentan día con día y una batalla constante en silencio."
        },

        obra2:{
            numero: 2,
            titulo: "Ausencia Habitada",
            imagen: "assets/dos.jpg",
            descrpcion: "La presencia a partir de la ausencia, aquello que permanece y se convierte en testimonios silenciosos capaces de conservar memoria."

        }
    },
    statement: "Me gusta experimentar con las tecnicas para capturar "
}

let statement = obras.statement

let about = document.createElement("p") // crear una variable about para alojar la creacion de un nuevo elemento parrafo
about.innerHTML = obras.statement
document.getElementsByClassName("about")[0].appendChild(about)

// console.log(obras.obras.obra1)
// console.log(obras['obras']['obra1'])
let listadoObras = Object.keys(obras.obras)
// console.log(obras.obras[listadoObras[0]])

const contenedorObras = document.getElementsByClassName("obras")[0]

for (let i = 0; i < listadoObras.length; i++) {
    let obraId = i + 1

    
let diccionarioObraEnTurno = obras.obras[listadoObras[i]]


let obrafoto = document.createElement("div")
obrafoto.setAttribute("class", "obra");
obrafoto.setAttribute("id", "obra" + obraId)


let descripcionObra = document.createElement("div")
descripcionObra.setAttribute("class", "descripcion-obra")


 let encabezado = document.createElement("div")
 encabezado.setAttribute("class", "encabezado-obra")
 encabezado.innerHTML = `<p class="numero-obras">0${obraId}</p><h2 class="titulo-obras">${obras.obras[listadoObras[i]].titulo}</h2>`
 

 let contenido = document.createElement("div")
 contenido.innerHTML = `< img src="${diccionarioObraEnTurno.imagen}"><p>${diccionarioObraEnTurno.descrpcion}</p>`


contenido.appendChild(obraContenido)
descripcionObra.appendChild(encabezado)
obrafoto.appendChild(descripcionObra)
contenedorObras.appendChild(obrafoto);



console.log(obrafoto)
    
}
// ['obra1','obra2','obra3']
