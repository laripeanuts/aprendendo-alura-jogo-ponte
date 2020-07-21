

function setup() {
  createCanvas(800, 600);
  somTrilha.loop();
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

  //PONTOS
  incluiPontos();
  marcaPonto();
}
