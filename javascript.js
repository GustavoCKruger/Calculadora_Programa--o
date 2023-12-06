

function adicionarResult(value){
  document.getElementById('result').value += value;
}

function calcular(){
  let result = document.getElementById('result');

  let display = document.getElementById('display');
  display.value = result.value;
  result.value = eval(result.value);
}

function limpar(){
  document.getElementById('result').value = "";
}

