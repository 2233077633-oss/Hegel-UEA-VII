const obras = {

    obras: {
        obra1:{
            numero: 1,
            titulo: "Tengo mucho ruido",
            descrpcion: "Nace a partir de reflejar lo que sucede en mi cabeza, un sin fin de pensamientos que me atormentan día con día y una batalla constante en silencio."
        },

        obra2:{
            numero: 2,
            titulo: "Ausencia Habitada",
            descrpcion: "La presencia a partir de la ausencia, aquello que permanece y se convierte en testimonios silenciosos capaces de conservar memoria."

        }
    },
    statement: "Me gusta experimentar con las tecnicas para capturar "
}

let statement = obras.statement

let about = document.createElement("p")
about.innerHTML = statement
document.getElementsByClassName("about")[0].appendChild(about)

// console.log(obras.obras.obra1)
// console.log(obras['obras']['obra1'])
let listadoObras = Object.keys(obras.obras)
// console.log(obras.obras[listadoObras[0]])

for (let i = 0; i < listadoObras.length; i++) {
    console.log(obras.obras[listadoObras[i]])
}
// ['obra1','obra2','obra3']