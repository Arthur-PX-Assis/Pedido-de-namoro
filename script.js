function moverBotao() {
    var botaoNao = document.getElementById("botaoNao");

    var randomX, randomY;

    randomX = Math.floor(Math.random() * (window.innerWidth * 0.85));
    randomY = Math.floor(Math.random() * (window.innerHeight * 0.85));

    botaoNao.style.position = "absolute";
    botaoNao.style.left = randomX + "px";
    botaoNao.style.top = randomY + "px";
}
