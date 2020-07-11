// IMAGENS 

let imagemBackground;
let imagemPersonagem;
let imagemCarro1;
let imagemCarro1a;
let imagemCarro2;
let imagemCarro2a;
let imagemCarro3;
let imagemCarro3a;
let imagemCarro4;
let imagemCarro4a;
let imagemCarro5;
let imagemCarro5a;
let imagemCarro6;
let imagemCarro6a;

function preload() {
    imagemBackground = loadImage("imagens/background.png")
    imagemPersonagem = loadImage("imagens/bolinha.png")

    imagemCarro1 = loadImage("imagens/carro01.png")
    imagemCarro1a = loadImage("imagens/carro07.png")
    imagemCarro2 = loadImage("imagens/carro02.png")
    imagemCarro2a = loadImage("imagens/carro08.png")
    imagemCarro3 = loadImage("imagens/carro03.png")
    imagemCarro3a = loadImage("imagens/carro09.png")
    imagemCarro4 = loadImage("imagens/carro04.png")
    imagemCarro4a = loadImage("imagens/carro10.png")
    imagemCarro5 = loadImage("imagens/carro05.png")
    imagemCarro5a = loadImage("imagens/carro11.png")
    imagemCarro6 = loadImage("imagens/carro06.png")
    imagemCarro6a = loadImage("imagens/carro12.png")

    imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5, imagemCarro6];
    imagemCarrosA = [imagemCarro1a, imagemCarro2a, imagemCarro3a, imagemCarro4a, imagemCarro5a, imagemCarro6a];

}