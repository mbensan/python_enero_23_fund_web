// variables que almacenan Strings (texto)
const nombres = 'Matias José'

const apellidos = 'Bensan Araya'

// Una variable a partir de otras variables
const saludo = 'Hola ' + nombres + ' ' + apellidos

// variables Booleanas (true o false)
const estaLloviendo = 3 > 8 - 4 ** 2
// = true

const verdad = 5 == 2 + 3
// true

const algo = 7 <= 8-2
// false


console.log(saludo)

// variable que almacena números
const edad = 40

// control de flujo
if (edad >= 80) {
  console.log("El usuario tiene " + edad + ' años')
  console.log("Está muy viejito para beber")
}
else if (edad == 40) {
  console.log("Felicidades por la 4 decadas")
}
else if (edad >= 18) {
  console.log("El usuario tiene " + edad + ' años')
  console.log("Puedes beber alcohol")
}
else {
  console.log("El usuario recién tiene " + edad + ' años')
  console.log("NO puede beber alcohol")
}

// Ciclos
function validate () {
  // 1. Captures los datos de los campos del formulario
}

