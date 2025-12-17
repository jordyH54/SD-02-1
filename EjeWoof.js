const prompt = require("prompt-sync")();

const cantidad = parseInt(prompt("¿Cuántos números deseas imprimir? "));

for (let i = 1; i <= cantidad; i++) {
  let resultado = "";

  if (i % 3 === 0) {
    resultado += "Fizz";
  }

  if (i % 5 === 0) {
    resultado += "Buzz";
  }

  if (i % 7 === 0) {
    resultado += "Woof";
  }

  // si el resultado está vacío imprime el número
  if (resultado === "") {
    console.log(i);
  // si no imprime el texto
  } else {
    console.log(resultado);
  }
}
