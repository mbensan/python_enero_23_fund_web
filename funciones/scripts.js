function mult3 (x) {
  const resultado = x * 3
  return resultado
}

function potencia (base, exp) {
  return base ** exp
}

function saludar (nombre) {
  const saludo = 'Mucho gusto ' + nombre
  return saludo
}

function contar (inicio, fin) {
  // escribir en consola todos los números entre inicio y fin
  // BONUS: Los múltiplos de 7 escribirlos entre gatos: #14#
  // BONUS 2: Retornar la suma de todos los números listados
}

function presetarse (nombre) {
  const saludo = saludar(nombre)
  console.log('Hola, ' + saludo)
}
presetarse('Maca')

function fizzbuzz(inicio, fin) {

  for (let i=inicio; i <= fin; i+=1) {

    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz")
    }
    else if (i % 3 == 0) {
      console.log("Fizz")
    }
    else if (i % 5 == 0) {
      console.log("Buzz")
    }
    else {
      console.log(i);
    }

  }
}

