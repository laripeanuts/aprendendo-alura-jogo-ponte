// CARROS

let alturaCarro = 45;
let larguraCarro = 85;
let yCarros = [119, 175, 232, 322, 378, 435];
let xCarros = [810, 810, 810, 810, 810, 810];
let xCarrosA = [810 + 300, 810 + 500, 810 + 500, 810 + 250, 810 + 400, 810 + 400];
let velCarros = [6, 5, 3.3, 2.8, 6, 3.5];
imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5, imagemCarro6];
imagemCarrosA = [imagemCarro1a, imagemCarro2a, imagemCarro3a, imagemCarro4a, imagemCarro5a, imagemCarro6a];

function mostraCarro() {
    for (let i = 0; i < imagemCarros.length; i++) {
        image(imagemCarros[i], xCarros[i], yCarros[i], larguraCarro, alturaCarro);
    }

    for (let ix = 0; ix < imagemCarrosA.length; ix++) {
        image(imagemCarrosA[ix], xCarrosA[ix], yCarros[ix], larguraCarro, alturaCarro);
    }
}

function movimentoCarro() {
    for (let i = 0; i < imagemCarros.length; i++) {
        xCarros[i] -= velCarros[i];
    }

    for (let ix = 0; ix < imagemCarrosA.length; ix++) {
        xCarrosA[ix] -= velCarros[ix];
    }
}

function voltaPosicaoInicialCarro() {
    for (let i = 0; i < imagemCarros.length; i++) {
        if (verificaPassouTela(xCarros[i])) {
            xCarros[i] = 800;
        }
    }

    for (let ix = 0; ix < imagemCarrosA.length; ix++) {
        if (verificaPassouTela(xCarrosA[ix])) {
            xCarrosA[ix] = 800;
        }
    }
}

function verificaPassouTela(x) {
    return x < - 100;
}