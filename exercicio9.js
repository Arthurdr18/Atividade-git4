function gerarNumeroAleatorio(a, b){
    return Math.floor(Math.random() * (b - a + 1)) + a
}
console.log(gerarNumeroAleatorio(0, 10))