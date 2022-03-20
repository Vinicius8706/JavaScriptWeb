var titulo = document.querySelector("h1");
titulo.textContent = "Aparecidade Nutricionista"

var paciente = document.querySelectorAll(".paciente");

for (var i = 0; i < paciente.length; i++) {
  var peso = paciente[i].querySelector(".info-peso");
  var peso = peso.textContent

  var tdAltura = paciente[i].querySelector(".info-altura");
  var altura = tdAltura.textContent

  var tdImc = paciente[i].querySelector(".info-imc")


  var pesoEhValido = validaPeso(peso)
  var alturaEhValida = validaAltura(altura)

  if (!pesoEhValido) {
    console.log("Peso inválido")
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido"
    paciente[i].classList.add("paciente-invalido")

  }

  if (!validaAltura) {
    var imc = calculaImc(peso, altura)
    alturaEhValida = false;
    tdImc.textContent = "Altura invalida"
    paciente[i].classList.add("paciente-invalido")
  }

  if (alturaEhValida && pesoEhValido) {
    imc = peso / (altura ** 2)
    tdImc.textContent = imc
  }
}

function validaPeso(peso) {

  if (peso >= 0 && peso < 1000) {
    return true
  } else {
    return false
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura <= 3.00) {
    return true
  } else {
    return false;
  }
}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura ** 2)

  return imc.toFixed(2)
}

