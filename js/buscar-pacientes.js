var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click",function(){
  console.log("Buscando pacientes")
  var xhr = new XMLHttpRequest();
  xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes")
  //https://api-pacientes.herokuapp.com/pacientes
  xhr.addEventListener("load",function(){
    if(xhr.status == 200){
      var resposta = xhr.responseText;
    var pacientes = JSON.parse(resposta)
    pacientes.forEach(function(paciente){
      adicionaPacienteNaTabela(paciente);
    })
    }else{
      console.log(xhr.status);
      console.log(xhr.responseText);
      var erroAjax = document.querySelector("#erro-ajax")
      errorAjax.classList.remove("invisivel")
    }
  })
  // JSON JAVASCRIPT OBJECT NOTATION -> objetos no javascript que estão dentro de strings

  xhr.send()
})
