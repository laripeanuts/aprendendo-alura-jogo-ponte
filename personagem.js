//PERSONAGEM

let yPersonagem = 506;
let xPersonagem = 300;
let colisao = false;
let diametro = 40;

function mostraPersonagem() {
    image(imagemPersonagem, xPersonagem, yPersonagem, diametro, diametro)
}

function movimentoPersonagem() {
    if (keyIsDown(UP_ARROW)) {
        yPersonagem -= 2;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yPersonagem += 2;
    }
}

function verificaColisao() {
    for (let i = 0; i < imagemCarros.length; i++) {
        colisao = collideRectCircle(xCarros[i], yCarros[i], alturaCarro[i], larguraCarro[i], xPersonagem, yPersonagem, 15);
        if (colisao) {
            print("colidiu")
        }
    }
}