function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function dividir(a, b) {
    return a / b;
}

function multiplicar(a, b) {
    return a * b;
}


function calcular(a, b, operacao) {
    return operacao(a, b);
}

console.log(calcular(10, 8, somar));   
console.log(calcular(10, 8, subtrair));
console.log(calcular(10, 8, dividir)); 
console.log(calcular(10, 8, multiplicar)); 