

function adicionarResult(value) {
  document.getElementById('result').value += value;
}

function calcular() {
  let result = document.getElementById('result');

  let display = document.getElementById('display');
  display.value = result.value;
  result.value = eval(result.value);
}

function limpar() {
  document.getElementById('result').value = "";
}

function limparHistorico() {
  document.getElementById('result').value = "";
  document.getElementById('display').value = "";
}

function limparUltimoNum(){
  let result = document.getElementById('result');
  result.value = result.value.slice(0, -1);
}

document.addEventListener("keypress", (e) => {
  if (e.key == "1") {
    adicionarResult("1");
  }
  else if (e.key == "2") {
    adicionarResult("2");
  }
  else if (e.key == "3") {
    adicionarResult("3");
  }
  else if (e.key == "4") {
    adicionarResult("4");
  }
  else if (e.key == "5") {
    adicionarResult("5");
  }
  else if (e.key == "6") {
    adicionarResult("6");
  }
  else if (e.key == "7") {
    adicionarResult("7");
  }
  else if (e.key == "8") {
    adicionarResult("8");
  }
  else if (e.key == "9") {
    adicionarResult("9");
  }
  else if (e.key == "0") {
    adicionarResult("0");
  }
  else if (e.key == ".") {
    adicionarResult(".");
  }
  else if (e.key == "+") {
    adicionarResult("+");
  }
  else if (e.key == "-") {
    adicionarResult("-");
  }
  else if (e.key == "/") {
    adicionarResult("/");
  }
  else if (e.key == "*") {
    adicionarResult("*");
  }
  else if (e.key == ("c")) {
    limpar("0");
  }
  else if (e.key == "Enter") {
    calcular();
  }
  else if (e.key == "Delete") {
    limparUltimoNum();
  }
})  
