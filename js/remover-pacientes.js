var tabela = document.querySelector("table")

tabela.addEventListener("dblclick", function (event) {
  event.target.parentNode.classList.add("fadeOut")
  setTimeout(function () {
    event.target.parentNode.remove(); //subir para o pai que foi clicado
  },500)
})
