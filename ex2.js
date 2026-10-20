function calcularDobro(numero, callbackResultado) {
    const valorDobrado = numero * 2;
    callbackResultado(valorDobrado);
}

function imprimirFormatado(valor) {
    console.log('[RESULTADO]: O valor calculated é ' + valor);
}

calcularDobro(25, imprimirFormatado);
