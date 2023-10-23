function produto(v){
    var res = 1; 
    for(var x = 0; x < v.length; x++) res *= v [x];
    return res;
}
console.log(produto([1, 4, 9]));