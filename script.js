function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  if (filmeFavorito.endsWith(".jpg")) {
    ListarFilmesNaTela(filmeFavorito);
  } else {
    alert("Endereço de filme inválido, insira um endereço com extensão .jpg");
    //console.error("Endereço de filme inválido");
  }
  document.getElementById("filme").value = "";
}

function ListarFilmesNaTela(filme) {
  //console.log(filme);
  var elementoFilmeFavorito = "<img src =" + filme + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}