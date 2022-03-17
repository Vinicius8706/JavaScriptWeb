var titulo = document.querySelector("h1");
titulo.textContent ="Aparecidade Nutricionista"

var paciente = document.querySelector("#primeiro-paciente");
var peso = paciente.querySelector(".info-peso");
var peso = peso.textContent

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent

var tdImc = paciente.querySelector(".info-imc")
imc = peso/(altura**2)
tdImc.textContent =imc

if(peso<0){
  console.log("Peso inválido")
}else if(peso > 1000){
  console.log("Peso inválido")
}


console.log(peso);
console.log(tdAltura);
console.log(imc);