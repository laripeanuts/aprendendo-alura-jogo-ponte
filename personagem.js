//PERSONAGEM
let yPersonagem = 506;
let xPersonagem = 150;
let colisao = false;
let diametro = 30;

//PONTOS
let meusPontos = 0;

function mostraPersonagem() {
    if (keyIsDown(DOWN_ARROW)) {
        image(imagemPersonagem2, xPersonagem, yPersonagem, diametro, diametro);
    } else {
        image(imagemPersonagem, xPersonagem, yPersonagem, diametro, diametro);
    }
}

function movimentoPersonagem() {
    if (keyIsDown(UP_ARROW)) {
        yPersonagem -= 5;
    }

    if (keyIsDown(DOWN_ARROW)) {
        if (podeMoverY()) {
            yPersonagem += 5;
        }
    }

    if (keyIsDown(RIGHT_ARROW)) {
        if (podeMoverXb()) {
            xPersonagem += 4;
        }
    }

    if (keyIsDown(LEFT_ARROW)) {
        if (podeMoverXa()) {
            xPersonagem -= 4;
        }
    }
}

//collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)

function verificaColisao() {
    for (let i = 0; i < imagemCarros.length; i++) {
        colisao = collideRectCircle(xCarros[i], yCarros[i], larguraCarro, alturaCarro, xPersonagem, yPersonagem, 10);
        if (colisao) {
            voltaPersonagemInicio();
            somColisao.play();
            if (pontosMaiorZero()) {
                meusPontos -= 1;
            }
        }
    }

    for (let ix = 0; ix < imagemCarrosA.length; ix++) {
        colisao = collideRectCircle(xCarrosA[ix], yCarros[ix], larguraCarro, alturaCarro, xPersonagem, yPersonagem, 10);
        if (colisao) {
            voltaPersonagemInicio();
            somColisao.play();
            if (pontosMaiorZero()) {
                meusPontos -= 1;
            }
        }
    }
}

function voltaPersonagemInicio() {
    yPersonagem = 506;
}

function pontosMaiorZero() {
    return meusPontos > 0
}

function podeMoverY() {
    return yPersonagem < 510;
}

function podeMoverXa() {
    return xPersonagem > 5;
}

function podeMoverXb() {
    return xPersonagem < 765;
}

function incluiPontos() {
    fill(color(0, 128, 128));
    rect(130, 62, 60, 30);
    textAlign(CENTER);
    textSize(25);
    textStyle(BOLD);
    fill(color(200, 0, 0));
    text(meusPontos, width / 5, 85);
}

function marcaPonto() {
    if (yPersonagem < 90) {
        meusPontos += 1;
        somPontos.play();
        voltaPersonagemInicio();
    }
}