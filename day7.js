/*
var operacao;
var resultado;
var num1;
var num2;

while(operacao !== "sair") {

operacao = prompt("Qual operação deseja realizar?");

switch (operacao) {
  case '+':
  valores();
  soma();
  break;
  case '-':
  valores();
  subtracao();
  break;
  case '*':
  valores();
  multiplicacao();
  break;
  case '/':
  valores();
  divisao();
  break;
  case 'sair':
  sair();
  break;
}

function valores(){
  num1 = prompt("Insira o primeiro valor");
  num2 = prompt("Insira o segundo valor");
}
  

function soma(){
  resultado = parseInt(num1)+parseInt(num2);
  alert(resultado);
}

function subtracao(){
  resultado = num1 - num2;
  alert(resultado);
}

function multiplicacao(){
  multiplicacao = num1 * num2;
  alert(resultado);
}

function divisao(){
  resultado = num1 / num2;
  alert(resultado);
}

function sair(){
  alert("Até a próxima!");
}

} */

/*
var operacao;
var resultado;
var num1;
var num2;

while(operacao !== "sair") {

operacao = prompt("Qual operação deseja realizar?");

switch (operacao) {
  case '+':
  valores();
  soma();
  break;
  case '-':
  valores();
  subtracao();
  break;
  case '*':
  valores();
  multiplicacao();
  break;
  case '/':
  valores();
  divisao();
  break;
  case 'sair':
  sair();
  break;
}

function valores(){
  num1 = prompt("Insira o primeiro valor");
  num2 = prompt("Insira o segundo valor");
}
  

function soma(){
  resultado = parseInt(num1)+parseInt(num2);
  alert(resultado);
}

function subtracao(){
  resultado = num1 - num2;
  alert(resultado);
}

function multiplicacao(){
  multiplicacao = num1 * num2;
  alert(resultado);
}

function divisao(){
  resultado = num1 / num2;
  alert(resultado);
}

function sair(){
  alert("Até a próxima!");
}

} 
/*

function somarValores(){
        var s1 = document.getElementById("txt1").value;
        var s2 = document.getElementById("txt2").value;
        var s3 = s1*s2;
        alert(s3);
    }

*/ 

const back =document.querySelectorAll('.days');

function day1(){
  back[1].classList.add('ocultar');
  back[2].classList.add('ocultar');
  back[3].classList.add('ocultar');
  back[4].classList.add('ocultar');
  back[5].classList.add('ocultar'); 
  back[6].classList.add('ocultar');
}

function day2(){
  back[0].classList.add('ocultar');
  back[2].classList.add('ocultar');
  back[3].classList.add('ocultar');
  back[4].classList.add('ocultar');
  back[5].classList.add('ocultar'); 
  back[6].classList.add('ocultar');
}

function day3(){
  back[0].classList.add('ocultar');
  back[1].classList.add('ocultar');
  back[3].classList.add('ocultar');
  back[4].classList.add('ocultar');
  back[5].classList.add('ocultar'); 
  back[6].classList.add('ocultar');
}

function day4(){
  back[0].classList.add('ocultar');
  back[1].classList.add('ocultar');
  back[2].classList.add('ocultar');
  back[4].classList.add('ocultar');
  back[5].classList.add('ocultar'); 
  back[6].classList.add('ocultar');
}

function day5(){
  back[0].classList.add('ocultar');
  back[1].classList.add('ocultar');
  back[2].classList.add('ocultar');
  back[3].classList.add('ocultar');
  back[5].classList.add('ocultar'); 
  back[6].classList.add('ocultar');
}

function day6(){
  back[0].classList.add('ocultar');
  back[1].classList.add('ocultar');
  back[2].classList.add('ocultar');
  back[3].classList.add('ocultar');
  back[4].classList.add('ocultar'); 
  back[6].classList.add('ocultar');
}

function day7(){
  back[0].classList.add('ocultar');
  back[1].classList.add('ocultar');
  back[2].classList.add('ocultar');
  back[3].classList.add('ocultar');
  back[4].classList.add('ocultar'); 
  back[5].classList.add('ocultar');
  back[7].classList.remove('ocultar');
}

function voltar() {
  console.log(back);
  back[0].classList.remove('ocultar');
  back[1].classList.remove('ocultar');
  back[2].classList.remove('ocultar');
  back[3].classList.remove('ocultar');
  back[4].classList.remove('ocultar');
  back[5].classList.remove('ocultar'); 
  back[6].classList.remove('ocultar');
  back[7].classList.add('ocultar');
} 


function somarValores(){
        var num1 = document.getElementById("num1").value;
        var operacao = document.getElementById("operacao").value;
        var num2 = document.getElementById("num2").value;


switch (operacao) {
  case '+':
  soma();
  break;
  case '-':
  subtracao();
  break;
  case '*':
  multiplicacao();
  break;
  case '/':
  divisao();
  break;
  case 'sair':
  sair();
  break;
}

  

function soma(){
  resultado = parseInt(num1)+parseInt(num2);
  alert(resultado);
}

function subtracao(){
  resultado = num1 - num2;
  alert(resultado);
}

function multiplicacao(){
  resultado = num1 * num2;
  alert(resultado);
}

function divisao(){
  resultado = num1 / num2;
  alert(resultado);
}

function sair(){
  alert("Até a próxima!");
}
}


/*
var operacao;
var resultado;
var num1;
var num2;

while(operacao !== "sair") {

operacao = prompt("Qual operação deseja realizar?");

switch (operacao) {
  case '+':
  valores();
  soma();
  break;
  case '-':
  valores();
  subtracao();
  break;
  case '*':
  valores();
  multiplicacao();
  break;
  case '/':
  valores();
  divisao();
  break;
  case 'sair':
  sair();
  break;
}

function valores(){
  num1 = prompt("Insira o primeiro valor");
  num2 = prompt("Insira o segundo valor");
}
  

function soma(){
  resultado = parseInt(num1)+parseInt(num2);
  alert(resultado);
}

function subtracao(){
  resultado = num1 - num2;
  alert(resultado);
}

function multiplicacao(){
  multiplicacao = num1 * num2;
  alert(resultado);
}

function divisao(){
  resultado = num1 / num2;
  alert(resultado);
}

function sair(){
  alert("Até a próxima!");
}

}
        
    } */
