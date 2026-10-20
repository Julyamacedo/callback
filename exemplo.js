function dividir(y, a) {
    return y / (2 * a);
}

function bhaskara(a, b, c, callbackDividir) {
    const x1 = b * -1 + Math.sqrt(b ** 2 - 4 * a * c);
    const x2 = b * -1 - Math.sqrt(b ** 2 - 4 * a * c);

    valorX1 = callbackDividir(x1, a);
    valorX2 = callbackDividir(x2, a);

    return [valorX1, valorX2];
}

const resultado = bhaskara(1, -5, 6, dividir);

console.log(`O resultado da equação de Bháskara é ${resultado[0]} ou ${resultado[1]}`);
