var campoFiltro = document.querySelector("#filtrar-tabela")
campoFiltro.addEventListener("input",function (event){
  console.log(event)
  var pacientes = document.querySelectorAll(".pacientes");
  for(var i=0; i<pacientes.length; i++){
    var paciente = pacientes[i];
    var tdNome = paciente.querySelector(".info-nome");
    var nome = tdNome.textContent;
  }
})