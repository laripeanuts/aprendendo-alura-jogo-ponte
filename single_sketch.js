

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(imagemBackground);
  mostraPersonagem();
  mostraCarro();

  //MOVIMENTO
  movimentoCarro();
  movimentoPersonagem();
  voltaPosicaoInicialCarro();

  //COLISAO
  verificaColisao();
}
