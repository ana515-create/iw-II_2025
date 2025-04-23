const imagem = document.getElementById("imagemPrincipal");

function mostrarImagem(numero) {
  if (numero === 1) {
    imagem.src = "img/rio.jpg";
  } else if (numero === 2) {
    imagem.src = "img/469-anos-de-sao-paulo.jpg";
  } else if (numero === 3) {
    imagem.src = "img/baia.jpg";
  }
}