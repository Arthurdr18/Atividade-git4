var l1 = 3
var l3 = 2
var l2 = 1
var l4 = 4

function soma (numero1, numero2, numero3){
   return(numero1+'! = '+ numero1+' * '+numero3+' * '+numero2)
}
var somaA = function (numero1, numero2, numero3, numero4){
    return (numero4+'! = '+numero4+' * '+numero1+' * '+numero3+' * '+numero2)
}
var total = soma(l1, l2, l3) 
console.log(total)
console.log(somaA(l1, l2, l3, l4))