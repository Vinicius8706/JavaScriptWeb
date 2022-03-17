var titulo = document.querySelector("h1");
titulo.textContent ="Aparecidade Nutricionista"

var paciente = document.querySelector("#primeiro-paciente");
var peso = paciente.querySelector(".info-peso");
var peso = peso.textContent

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent

imc = peso/(altura**2)
console.log(peso);
console.log(tdAltura);
console.log(imc);