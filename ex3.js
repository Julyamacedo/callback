function operar(a, b, operacaoCallback) {
    return operacaoCallback(a, b);
}

function somar(x, y) {
    return x + y;
}

function multiplicar(x, y) {
    return x * y;
}

console.log('Suma:', operar(10, 4, somar));
console.log('Multiplikasion:', operar(10, 4, multiplicar));
