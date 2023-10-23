var ordenarObjetos = [
    {
        idade: 11
    },
    {
        idade: 10
    },
    {
        idade: 5
    },
    {
        idade: 12
    },
    {
        idade: 15
    }
];

ordenarObjetos.sort(function(a, b){
    if(a.idade < b.idade){
        return -1;
    } else {
        return true;
    }
}); 

console.log(ordenarObjetos)