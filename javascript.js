/*const result = document.querySelector(".result");
const buttons = document.querySelectorAll(".buttons button");

let currentNumber = "";
let primeiroOperandor = null;
let operador = null;
let resete = false;

function atualizarResultado(limpar = false) {
    result.innerText = limpar ? 0 : currentNumber.replace(".", ",");
}

function addDigit(digit) {
    if (digit === "," && (currentNumber.includes(",") || !currentNumber)) return;

    if (resete) {
        currentNumber = digit;
        resete = false;
    } else {
        currentNumber += digit;
    }

    atualizarResultado();
}

function setOperador(novoOperador) {
    if (currentNumber) {
        calculador();

        primeiroOperandor = parseFloat(currentNumber.replace(",", "."));
        currentNumber = "";
    }

    operador = novoOperador;
}

function calculador() {
    if (operador === null || primeiroOperandor === null) return;
    let segundoOperador = parseFloat(currentNumber.replace(",", "."));
    let resultValue;

    switch (operador) {
        case "+":
            resultValue = primeiroOperandor + segundoOperador;
            break;
        case "-":
            resultValue = primeiroOperandor - segundoOperador;
            break;
        case "*":
            resultValue = primeiroOperandor * segundoOperador;
            break;
        case "/":
            resultValue = primeiroOperandor / segundoOperador;
            break;
        default:
        return;
    }

    if(resultValue.toString().split(".")[1]?.length > 5) {
        currentNumber = parseFloat(resultValue.toFixed(5)).toString();
    } else {
        currentNumber = resultValue.toString();
    }
}


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonText = button.innerText;
        if (/^[0-9,]+$/.test(buttonText)) {
            addDigit(buttonText);
        } else if (["+", "-", "*", "/"].includes(buttonText)) {
            setOperator(buttonText);
        } else if(buttonText === "="){
            calculador();
        }
    })
})*/

const result = document.querySelector(".result");
const buttons = document.querySelectorAll(".buttons button");

let currentNumber = "";
let primeiroOperandor = null;
let operador = null;
let recomeço = false;

function atualizar(originClear = false) {
  result.innerText = originClear ? 0 : currentNumber.replace(".", ",");
}

function addDigit(digit) {
  if (digit === "," && (currentNumber.includes(",") || !currentNumber)) return;

  if (recomeço) {
    currentNumber = digit;
    recomeço = false;
  } else {
    currentNumber += digit;
  }

  atualizar();
}

function setOperador(newoperador) {
  if (currentNumber) {
    calculate();

    primeiroOperandor = parseFloat(currentNumber.replace(",", "."));
    currentNumber = "";
  }

  operador = newoperador;
}

function calculate() {
  if (operador === null || primeiroOperandor === null) return;
  let secondOperand = parseFloat(currentNumber.replace(",", "."));
  let resultValue;

  switch (operador) {
    case "+":
      resultValue = primeiroOperandor + secondOperand;
      break;
    case "-":
      resultValue = primeiroOperandor - secondOperand;
      break;
    case "*":
      resultValue = primeiroOperandor * secondOperand;
      break;
    case "/":
      resultValue = primeiroOperandor / secondOperand;
      break;
    default:
      return;
  }

  if (resultValue.toString().split(".")[1]?.length > 5) {
    currentNumber = parseFloat(resultValue.toFixed(5)).toString();
  } else {
    currentNumber = resultValue.toString();
  }

  operador = null;
  primeiroOperandor = null;
  recomeçpo = true;
  percentageValue = null;
  atualizar();
}

function clearCalculator() {
  currentNumber = "";
  primeiroOperandor = null;
  operador = null;
  atualizar(true);
}

function setPercentage() {
  let result = parseFloat(currentNumber) / 100;

  if (["+", "-"].includes(operador)) {
    result = result * (primeiroOperandor || 1);
  }

  if (result.toString().split(".")[1]?.length > 5) {
    result = result.toFixed(5).toString();
  }

  currentNumber = result.toString();
  atualizar();
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.innerText;
    if (/^[0-9,]+$/.test(buttonText)) {
      addDigit(buttonText);
    } else if (["+", "-", "*", "/"].includes(buttonText)) {
      setOperador(buttonText);
    } else if (buttonText === "=") {
      calculate();
    } else if (buttonText === "C") {
      clearCalculator();
    } else if (buttonText === "%") {
      setPercentage();
    }
  });
});