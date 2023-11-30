let displayValue = '0';
let historyValue = '';

function limpar() {
    displayValue = '0';
    historyValue = '';
    atualizarDisplay();
}

function add_numero(numero) {
    if (displayValue === '0') {
        displayValue = numero.toString();
    } else {
        displayValue += numero.toString();
    }
    atualizarDisplay();
}

function add_operador(operador) {
    if (displayValue !== '0') {
        historyValue += displayValue + ' ' + operador + ' ';
        displayValue = '0';
        atualizarDisplay();
    }
}

function total() {
    if (displayValue !== '0') {
        historyValue += displayValue;
        displayValue = eval(historyValue).toString();
        historyValue = '';
        atualizarDisplay();
    }
}

function atualizarDisplay() {
    document.getElementById('display').value = displayValue;
    document.getElementById('history').innerText = historyValue;
}
