function clonarObjeto(nome){
    this.nome = nome;
}
var clonar = new clonarObjeto('{nome: teste}');
var objeto = {
    nome: 'teste',
}
console.log(objeto)
console.log(clonar.nome)