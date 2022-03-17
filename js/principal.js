var titulo = document.querySelector("h1");
titulo.textContent = "Aparecidade Nutricionista"

var paciente = document.querySelectorAll(".paciente");

for (var i = 0; i < paciente.length; i++) {
  var peso = paciente[i].querySelector(".info-peso");
  var peso = peso.textContent

  var tdAltura = paciente[i].querySelector(".info-altura");
  var altura = tdAltura.textContent

  var tdImc = paciente[i].querySelector(".info-imc")


  var pesoEhValido = true;
  var alturaEhValida = true;

  if (peso < 0 || peso >= 1000) {
    console.log("Peso inválido")
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido"
    paciente[i].classList.add("paciente-invalido")

  }

  if (altura < 0 || altura > 3.00) {
    console.log("Altura inválida");
    alturaEhValida = false;
    tdImc.textContent = "Altura invalida"
    paciente[i].classList.add("paciente-invalido")


  }

  if (alturaEhValida && pesoEhValido) {
    imc = peso / (altura ** 2)
    tdImc.textContent = imc.toFixed(2)
  }
}

titulo.addEventListener("click", mostraMensagem)

function mostraMensagem() {
  console.log("Olá eu fui clicado")
}

var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault()

  var form = document.querySelector("#form-adiciona")
  var altura = form.altura.value
  var nome = form.nome.value
  var peso = form.peso.value
  var gordura = form.gordura.value

  var pacienteTr = document.createElement("tr")

  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  nomeTd.textContent = nome;
  pesoTd.textContent = peso
  alturaTd.textContent = altura
  gorduraTd.textContent = gordura
  imcTd.textContent = imc.toFixed(2)

  pacienteTr.appendChild(nomeTd)
  pacienteTr.appendChild(pesoTd)
  pacienteTr.appendChild(alturaTd)
  pacienteTr.appendChild(gorduraTd)
  pacienteTr.appendChild(imcTd)

  var tabela = document.querySelector("#tabela-pacientes")
  tabela.appendChild(pacienteTr)
})
