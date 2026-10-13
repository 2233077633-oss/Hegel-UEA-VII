const obras = {

    obras: {
        obra1:{
            numero: 1,
            titulo: "Tengo mucho ruido",
            imagen: "assets/tmuno.jpg", 
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

let about = document.createElement('p')   //crear una variable about para alojar la creación de un nuevo elemento de párrafo
about.innerHTML = obras.statement
document.getElementsByClassName('about')[0].appendChild(about)
const log = document.querySelector(".about");
log.appendChild(about)
log.style.display = "none"


const button = document.querySelector("#aboutButton");
button.addEventListener("click", (e) =>{
log.style.display = "block"
}
);






// console.log(obras.obras.obra1)
// console.log(obras['obras']['obra1'])
let listadoObras = Object.keys(obras.obras)
// console.log(obras.obras[listadoObras[0]])
// let contenedorObras = document.getElementsByClassName('obras')[0]

const contenedorObras = document.getElementsByClassName('obras')[0];

for (let i = 0; i < listadoObras.length; i++) {
    let obraId = i + 1
    let diccionarioObraEnTurno = obras.obras[listadoObras[i]]

    let obraEnTurno = document.createElement('div')
    obraEnTurno.setAttribute('class', 'obra');
    obraEnTurno.setAttribute('id', 'obra' + obraId)

    let descripcionObra = document.createElement('div')
    descripcionObra.setAttribute('class', 'descripcion-obra')

    let encabezado = document.createElement('div')
    encabezado.setAttribute('class', 'encabezado-obra')
    encabezado.innerHTML = `<p class=numero-obra>0${obraId}</p><h2>${diccionarioObraEnTurno.titulo}</h2>`
    
    let obraContenido = document.createElement('div')
    obraContenido.setAttribute('class', 'obra-contenido')
    obraContenido.innerHTML = `<img src="${diccionarioObraEnTurno.imagen}"><p>${diccionarioObraEnTurno.descripcion}</p>`

    descripcionObra.appendChild(encabezado)
    descripcionObra.appendChild(obraContenido)
    obraEnTurno.appendChild(descripcionObra)
    contenedorObras.appendChild(obraEnTurno);
    
    console.log(obraEnTurno)
}
// ['obra1','obra2','obra3']
