function insert(num) {
    var numero = resultado.innerHTML;
    resultado.innerHTML = numero + num;
}

function clean() {
    resultado.innerHTML = "";
}

function back() {
    const result = resultado.innerHTML;
    resultado.innerHTML = result.substring(0, result.length - 1);
}

function calcular() {
    const result = resultado.innerHTML;
    
    if (!result) {
        return;
    }

    if (eval(result) == Infinity) {
        return resultado.innerHTML = 'Erro';
    }
    
    resultado.innerHTML = eval(result);
}